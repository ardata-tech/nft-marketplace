import Web3 from 'web3';
import MarketPlace from './contracts/marketPlace.json';
import Auction from './contracts/auction.json';
import ERC721 from './contracts/ERC721.json';
import ERC20 from './contracts/ERC20.json';
export const marketplaceContractAddress = '0xf23Bc04F9504918Cb09fAf497d97fa3412c84F9C';
export const auctionContractAddress = '0x093a237908AddE84ebaD66F0E337258eEf7592c7';
export const ERC721ContractAddress = '0x37e51f8397642635e9760F1C52EE702327C5B289';
export const ERC20ContractAddress = '0xAA1bAFc1E888aC0eEa3dD4E5742df586497D7ef7';
export const ethereum = window.ethereum;
export const web3 = new Web3(ethereum);
export const  ListingType = {
  AUCTION: "AUCTION",
  MARKETPLACE: "MARKETPLACE",
  NOT_LISTED: "NOT_LISTED",
};

export function loadContract(isAuction=false) {
  if(isAuction)  return new web3.eth.Contract(Auction, auctionContractAddress);
  return new web3.eth.Contract(MarketPlace, marketplaceContractAddress);
}
export function loadERC721Contract() {
  return new web3.eth.Contract(ERC721, ERC721ContractAddress);
}
export function loadERC20Contract() {
  return new web3.eth.Contract(ERC20, ERC20ContractAddress);
}
export function connectWallet(){
  ethereum.request({
    method: 'eth_requestAccounts',
  });
}
export function getCurrentWalletConnected(){
  return window.ethereum ?  window.ethereum.selectedAddress : '';
}
export function getTokenIdFromTxn(txn, isERC = false){
  if(isERC){
    return web3.utils.hexToNumber(txn.events[2].raw.topics[3]);
  }
  return web3.utils.hexToNumber(txn.events[0].raw.topics[3]);
}

