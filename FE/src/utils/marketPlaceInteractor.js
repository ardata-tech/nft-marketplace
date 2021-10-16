import {ethereum, loadContract, marketplaceContractAddress, web3} from "./blockchainInteractor";
let mintFeesNative = '';
let mintFeesERC = '';

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
export async function getMintFees(isERC20 = false){
    if(!isERC20){
        if(!mintFeesNative){
            const contract = loadContract();
            try{
                mintFeesNative  = await contract.methods.mintFeeNative().call();
            }catch (e) {
                mintFeesNative = '0';
            }
        }
        return web3.utils.fromWei(mintFeesNative, 'ether');
    }
    if(!mintFeesERC){
        const contract = loadContract();
        try{
            mintFeesERC  = await contract.methods.mintFee().call();
        }catch (e) {
            mintFeesERC = '0';
        }
    }
    return web3.utils.fromWei(mintFeesERC, 'ether');

}
export async function mintNFT(currency){
    const contract = loadContract();
    let payload = {
        from: ethereum.selectedAddress,
        to: marketplaceContractAddress,
        gasLimit: 2000000,
    }
    let txn = null
    if (currency === "ERC") {
        txn = await contract.methods.mint().send(payload);
    } else {
        payload.value = web3.utils.toWei(await getMintFees(), 'ether');
        txn = await contract.methods.mintNative().send(payload);
    }
    return txn;
}
