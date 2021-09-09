import {ethereum, loadContract, marketplaceContractAddress, web3} from "./blockchainInteractor";
let mintFees = '';

export async function balanceOfAddressMarketplace(address){
    const contract = loadContract();
    try{
        const txn  = await contract.methods.balanceOf(address).call();
        return txn;
    }catch (e) {
        return null;
    }
}
export async function getTotalListedMarketplace(){
    const contract = loadContract();
    try{
        const txn  = await contract.methods.totalListed().call();
        return txn;
    }catch (e) {
        return null;
    }
}
export async function getAllTokensMarketPlace(startIndex, endIndex){
    const contract = loadContract();
    try{
        const txn  = await contract.methods.getTokens(startIndex, endIndex).call();
        return txn;
    }catch (e) {
        return [];
    }
}
export async function getTokensOfAddressMarketplace(address,startIndex,endIndex){
    const contract = loadContract();
    try{
        const txn  = await contract.methods.getTokens(address,startIndex,endIndex).call();
        return txn;
    }catch (e) {
        return [];
    }
}
export async function listTokenMarketplace(tokenId,priceETH,priceType){
    const contract = loadContract();
    const txn  = await contract.methods.list(tokenId, web3.utils.toWei(priceETH), priceType).send({
        from: ethereum.selectedAddress,
        to: marketplaceContractAddress,
        gasLimit: 2000000,
    });
    return txn;
}
export async function unListTokenMarketplace(tokenId){
    const contract = loadContract();
    const txn  = await contract.methods.unlist(tokenId).send({
        from: ethereum.selectedAddress,
        to: marketplaceContractAddress,
        gasLimit: 2000000,
    });
    return txn;
}
export async function transferToken(tokenId){
    const contract = loadContract();
    try{
        const txn  = await contract.methods.transferOwnership(tokenId).call();
        return txn;
    }catch (e) {
        return null;
    }
}
export async function buyToken(tokenId, price){
    const contract = loadContract();
    const txn  = await contract.methods.buy(tokenId).send({
        from: ethereum.selectedAddress,
        to: marketplaceContractAddress,
        gasLimit: 2000000,
        value: price,
    });
    return txn;
}
export async function setSellingPrice(){
    const contract = loadContract();
    try{
        const txn  = await contract.methods.setSellingFeeRateX100().call();
        return txn;
    }catch (e) {
        return null;
    }
}
export async function getSellingPrice(){
    const contract = loadContract();
    try{
        const txn  = await contract.methods.sellingFeeRateX100().call();
        return txn;
    }catch (e) {
        return null;
    }
}
export async function getMarketPlaceTokenByTokenId(tokenId){
    const contract = loadContract();
    try{
        const txn  = await contract.methods.getToken(tokenId).call();
        return txn;
    }catch (e) {
        return null;
    }
}
export async function getMintFees(){
    if(!mintFees){
        const contract = loadContract();
        try{
            mintFees  = await contract.methods.mintFeeNative().call();
        }catch (e) {
            mintFees = '0';
        }
    }
    return web3.utils.fromWei(mintFees, 'ether');
}
export async function mintNFT(){
    const contract = loadContract();
    const txn = await contract.methods.mintNative().send({
        from: ethereum.selectedAddress,
        to: marketplaceContractAddress,
        gasLimit: 2000000,
        value: web3.utils.toWei(await getMintFees(), 'ether'),
    });
    return txn;
}
