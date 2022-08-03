import Web3 from "web3";
import { abi } from "./abi.js";

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://data-seed-prebsc-1-s1.binance.org:8545/"
  )
);

const contractAddress = "0xE3d616F18f99E8cA3932AD5d1D3B2B9A81D39d2b";
export const contract = new web3.eth.Contract(
  abi,
  web3.utils.toChecksumAddress(contractAddress)
);


const web3Instance =new Web3('wss://apis.ankr.com/wss/015f5f69544f40dd8117f6ddae436e77/413648eca2d076e7369843bb0f97d79a/binance/full/test');
export const contractWithListner = new web3Instance.eth.Contract(abi, contractAddress);
