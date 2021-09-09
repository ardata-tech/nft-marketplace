import {
    auctionContractAddress,
    ERC721ContractAddress,
    ethereum,
    loadERC721Contract,
    marketplaceContractAddress
} from "./blockchainInteractor";


export async function balanceOfAddressERC721(address) {
    const contract = loadERC721Contract();
    try{
        const txn  = await contract.methods.balanceOf(address).call();
        return txn;
    }catch (e) {
        return 0;
    }
}
export async function getTotalMintedERC721(){
    const contract = loadERC721Contract();
    try{
        const txn  = await contract.methods.totalSupply().call();
        return txn;
    }catch (e) {
        return null;
    }
}
export async function getAllTokensERC721(startIndex,endIndex){
    const contract = loadERC721Contract();
    try{
        const txn  = await contract.methods.getTokens(startIndex, endIndex).call();
        return txn;
    }catch (e) {
        return [];
    }
}
export async function getTokensOfAddressERC721(address, startIndex, endIndex) {
    const contract = loadERC721Contract();
    try{
        const txn  = await contract.methods.getTokens(address, startIndex, endIndex).call();
        return txn;
    }catch (e) {
        return [];
    }
}
export async function getApprovedToken(tokenId) {
    const contract = loadERC721Contract();
    try{
        const txn  = await contract.methods.getApproved(tokenId).call();
        return txn;
    }catch (e) {
        return null;
    }
}
export async function approveToken(tokenId, confirmationCallback, isForMarketplace = true) {
    const contract = loadERC721Contract();
    const txn  = contract.methods.approve(isForMarketplace ? marketplaceContractAddress : auctionContractAddress, tokenId).send({
        from: ethereum.selectedAddress,
        to: ERC721ContractAddress,
        gasLimit: 2000000,
    }).on('transactionHash', confirmationCallback);
    return txn;
}
export async function getOwnerFromERCByTokenId(tokenId){
    const contract = loadERC721Contract();
    try{
        const txn  = await contract.methods.ownerOf(tokenId).call();
        return txn;
    }catch (e) {
        return null;
    }
}
