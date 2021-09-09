import Web3 from 'web3';
import MarketPlace from './contracts/marketPlace.json';
import Auction from './contracts/auction.json';
import ERC721 from './contracts/ERC721.json';
export const marketplaceContractAddress = '0x5425fdcC504498a9a3998AfFe9C06Fb59BC82ca4';
export const auctionContractAddress = '0x03544ef9dF1952859A96FB65563B21cd6098f845';
export const ERC721ContractAddress = '0x2E8E25Ff4BF4AD019be612f97CF01Fd61379c1e8';
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
export function connectWallet(){
  ethereum.request({
    method: 'eth_requestAccounts',
  });
}
export function getCurrentWalletConnected(){
  return window.ethereum ?  window.ethereum.selectedAddress : '';
}
export function getTokenIdFromTxn(txn){
  return web3.utils.hexToNumber(txn.events[0].raw.topics[3]);
}

