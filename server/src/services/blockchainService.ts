import { ethers } from "ethers";
import Web3 from "web3";
import { ElectionABI, ElectionAddress } from "../utils/constants";

const web3 = new Web3("http://127.0.0.1:8545");
const contract = new web3.eth.Contract(ElectionABI, ElectionAddress);

export const recordVoteOnBlockchain = async (voterId: string, candidateId: number) => {
  try { 
    const accounts = await web3.eth.getAccounts();
    await contract.methods.vote(candidateId).send({ from: accounts[0] });
    return { success: true };
  } catch (error: any) {
    console.error(error);
    return { success: false, message: error.message };
  }
}

export const getTotalVotesFromBlockchain = async (candidateId: string) => {
  try {
    return await contract.methods.totalVotesFor(candidateId).call();
  } catch (error: any) {
    console.error(error);
    return 0;
  }
}