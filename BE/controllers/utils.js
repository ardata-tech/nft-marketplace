import jwt from 'jsonwebtoken';
import Web3 from 'web3';
import ercConfig from '../config/ERC721-config.js';
import marketplaceConfig from '../config/marketplace-config.js';

// const dotenv = require('dotenv');
// dotenv.config();
// TOKEN_SECRET = process.env.TOKEN_SECRET;

const TOKEN_SECRET = 'JWT_SECRET';

const INFURA_PROJECT_ID = "15df16fd2dfa4b7eaad1c1e416f7a925";
const INFURA_PROJECT_SECRET = "a3fd4912671d4814b34e77ffc7ed2c85";
const API_URL = `https://:${INFURA_PROJECT_SECRET}@rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`;
const web3 = new Web3(API_URL);

// web3.eth.accounts.wallet.add(walletPrivateKey);
// const walletAddress = web3.eth.accounts.wallet[0].address;

const ercAddress = ercConfig.address;
const ercABI = ercConfig.abi;
const ercContract = new web3.eth.Contract(ercABI, ercAddress);

const marketplaceAddress = marketplaceConfig.address;
const marketplaceABI = marketplaceConfig.abi;
const marketplaceContract = new web3.eth.Contract(marketplaceABI, marketplaceAddress);

export const ownerOf = async (tokenID) => {
    return ercContract.methods.ownerOf(tokenID).call();
}

export const getToken = async (tokenID) => {
    return marketplaceContract.methods.getToken(tokenID).call();
}

export const generateAccessToken = (address) => {
    return jwt.sign({ address }, TOKEN_SECRET);
    // return jwt.sign({ address }, TOKEN_SECRET, { expiresIn: "1h" });
}