import {
    marketplaceContractAddress,
    ERC20ContractAddress,
    ethereum,
    loadERC20Contract,
    web3
} from "./blockchainInteractor";
import { getMintFees } from "./marketPlaceInteractor";

export async function balanceOfAddressERC20() {
    const contract = loadERC20Contract();
    try{
        const txn  = await contract.methods.balanceOf(ethereum.selectedAddress).call();
        return txn;
    }catch (e) {
        return 0;
    }
}
export async function getSymbolERC20(){
    const contract = loadERC20Contract();
    try{
        const txn  = await contract.methods.symbol().call();
        return txn;
    }catch (e) {
        return null;
    }
}
export async function getTotalMintedERC20(){
    const contract = loadERC20Contract();
    try{
        const txn  = await contract.methods.totalSupply().call();
        return txn;
    }catch (e) {
        return null;
    }
}
export async function getApprovedToken(tokenId) {
    const contract = loadERC20Contract();
    try{
        const txn  = await contract.methods.getApproved(tokenId).call();
        return txn;
    }catch (e) {
        return null;
    }
}
export async function approveSpenderERC20(spenderAddress = marketplaceContractAddress, limit) {
    if(!limit){
        limit = web3.utils.toWei(await getMintFees(true), 'ether');
    }
    const contract = loadERC20Contract();
    const txn  = contract.methods.approve(spenderAddress, limit).send({
        from: ethereum.selectedAddress,
        to: ERC20ContractAddress,
        gasLimit: 2000000,
    });
    return txn;
}