import { toInteger } from "lodash";
import {auctionContractAddress, ethereum, loadContract, web3} from "./blockchainInteractor";

export async function createAuction(tokenId,startPriceETH,endPriceETH,durationHours){
    const contract = loadContract(true);
    const startPrice = web3.utils.toWei(startPriceETH, 'ether');
    const endPrice = web3.utils.toWei(endPriceETH, 'ether');
    const txn  = await contract.methods.createAuction(tokenId,startPrice,endPrice,durationHours*3600).send({
        from: ethereum.selectedAddress,
        to: auctionContractAddress,
        gasLimit: 2000000,
    });
    return txn;
}
export async function getAuctionId(){
    const contract = loadContract(true);
    try{
        const txn  = await contract.methods.auctionId().call();
        return txn;
    }catch (e) {
        return null;
    }
}
export async function getAuctionByAuctionId(auctionId){
    const contract = loadContract(true);
    try{
        const txn  = await contract.methods.getAuctionByAuctionId(auctionId).call();
        return txn;
    }catch (e) {
        return null;
    }
}
export async function cancelAuctionByAuctionId(auctionId){
    const contract = loadContract(true);
    try{
        const txn  = await contract.methods.cancelAuctionByAuctionId(auctionId).call();
        return txn;
    }catch (e) {
        return null;
    }
}
export async function getCurrentPriceByAuctionId(auctionId){
    const contract = loadContract(true);
    try{
        const txn  = await contract.methods.getCurrentPriceByAuctionId(auctionId).call();
        return txn;
    }catch (e) {
        return null;
    }
}
export async function getAuctionByTokenId(tokenId){
    const contract = loadContract(true);
    try{
        const txn  = await contract.methods.getAuctionByTokenId(tokenId).call();
        return txn;
    }catch (e) {
        return null;
    }
}
export async function cancelAuctionByTokenId(tokenId){
    const contract = loadContract(true);
    const txn  = await contract.methods.cancelAuctionByTokenId(tokenId).send({
        from: ethereum.selectedAddress,
        to: auctionContractAddress,
        gasLimit: 2000000,
    });
    return txn;
}
export async function bidByTokenId(tokenId){
    const contract = loadContract(true);
    try{
        const txn  = await contract.methods.bid(tokenId).send({
            from: ethereum.selectedAddress,
            to: auctionContractAddress,
            gasLimit: 2000000,
            value: toInteger(await getCurrentPriceByTokenId(tokenId)) + 10000000000000,
        });
        return txn;
    }catch (e) {
        return null;
    }
}
export async function getCurrentPriceByTokenId(tokenId){
    const contract = loadContract(true);
    try{
        const txn  = await contract.methods.getCurrentPriceByTokenId(tokenId).call();
        return txn;
    }catch (e) {
        return null;
    }
}
export  function  getAuctionDetails(auction){
    if(!auction)
        return {};
    return {
        duration: auction.duration,
        endingPrice: auction.endingPrice,
        auctionId: auction.id,
        startedAt: auction.startedAt,
        startingPrice: auction.startingPrice};
}
