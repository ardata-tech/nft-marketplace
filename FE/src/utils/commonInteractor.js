import {ListingType, marketplaceContractAddress} from "./blockchainInteractor";
import {
    balanceOfAddressERC721, getAllTokensERC721,
    getOwnerFromERCByTokenId,
    getTokensOfAddressERC721,
    getTotalMintedERC721
} from "./erc721Interactor";
import {
    balanceOfAddressMarketplace, getAllTokensMarketPlace,
    getMarketPlaceTokenByTokenId,
    getTokensOfAddressMarketplace, getTotalListedMarketplace
} from "./marketPlaceInteractor";
import {getAuctionByTokenId, getAuctionDetails, getCurrentPriceByTokenId} from "./auctionInteractor";
import {getMetaForMany} from "../services/metaService";

export async function getStoreFrontNFTS(){
    const totalListedMarketplaceCount = await getTotalListedMarketplace();
    let storeNFTs = [];
    const MarketplaceTokens = await getAllTokensMarketPlace(0, totalListedMarketplaceCount);
    const {_prices,_tokens,_owners,_priceTypes } = MarketplaceTokens;
    if(_owners && _owners.length){
        for(let i=0;i<_tokens.length;i++){
            storeNFTs.push({tokenId:_tokens[i],price:_prices[i],owner:_owners[i],priceType:_priceTypes[i], listingType : ListingType.MARKETPLACE})
        }
    }
    const totalERCTokensCount = await getTotalMintedERC721();
    const AllERCTokens = await getAllTokensERC721(0, totalERCTokensCount);
    let auctionPromises = [];
    for(let tokenId of AllERCTokens)
        auctionPromises.push(getAuctionByTokenId(tokenId));
    const areAuctions = await Promise.all(auctionPromises);
    for(let index in AllERCTokens)
        if(areAuctions[index])
            storeNFTs.push({'tokenId': AllERCTokens[index], 'listingType' : ListingType.AUCTION,
                owner : areAuctions[index].seller,
                ...getAuctionDetails(areAuctions[index]),});
    return storeNFTs;
};

export async function getUserNFTs(address){
    let UserNFTs = [], auctionPromises = [];
    const ErcBalance = await balanceOfAddressERC721(address);
    const marketPlaceBalance = await balanceOfAddressMarketplace(address);
    const ERCTokens =  await getTokensOfAddressERC721(address, 0, ErcBalance);
    const MarketplaceTokens = await getTokensOfAddressMarketplace(address,0, marketPlaceBalance);
    for(let tokenId of ERCTokens)
        auctionPromises.push(getAuctionByTokenId(tokenId));
    const areAuctions = await Promise.all(auctionPromises);
    for(let i in ERCTokens)
        UserNFTs.push({tokenId: ERCTokens[i], listingType : areAuctions[i] ? ListingType.AUCTION : ListingType.NOT_LISTED,
            owner : areAuctions[i] ? areAuctions[i].seller : address,
            ...getAuctionDetails(areAuctions[i]),
        });
    const {_prices,_tokens,_owners,_priceTypes } = MarketplaceTokens;
    if(_owners && _owners.length){
        for(let i=0;i<_tokens.length;i++){
            UserNFTs.push({tokenId:_tokens[i],price:_prices[i],owner:_owners[i],priceType:_priceTypes[i], listingType : ListingType.MARKETPLACE});
        }
    }
    return UserNFTs;
}
export async function getTokenInfo(tokenId){
    let tokenInfo = {};
    const owner = await getOwnerFromERCByTokenId(tokenId);
    let listingType  = ListingType.NOT_LISTED
    if(owner.toLowerCase() === marketplaceContractAddress.toLowerCase()){
        listingType = ListingType.MARKETPLACE;
        const token = await getMarketPlaceTokenByTokenId(tokenId);
        if(token){
            const {_price,_priceType,_owner} = token;
            tokenInfo = {price:_price,priceType:_priceType,owner:_owner,listingType}
        }
    }else{
        const auction = await  getAuctionByTokenId(tokenId);
        if(!!auction){
            listingType = ListingType.AUCTION;
            const auctionDetail = getAuctionDetails(auction);
            const currentPrice = await getCurrentPriceByTokenId(tokenId);
            tokenInfo = {owner,listingType,...auctionDetail, currentPrice};
        }else{
            tokenInfo = {owner,listingType}
        }
    }
    return tokenInfo;
}
export async function  getAllNFTs(address){
    let nfts = !address ? await getStoreFrontNFTS() : await getUserNFTs(address);
    const tokenIDs = [];
    for(const token of nfts)
        tokenIDs.push(token.tokenId);
    let metaDatas = await getMetaForMany({tokenIDs});
    for(let i=0;i<nfts.length;i++)
        nfts[i] = {...nfts[i],...metaDatas.data[i]};

    return nfts;
}
