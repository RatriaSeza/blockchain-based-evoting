import { ethers } from "ethers";
import Web3 from "web3";
import { ElectionABI, ElectionAddress } from "../utils/constants";

const web3 = new Web3("http://127.0.0.1:8545");
const contract = new web3.eth.Contract(ElectionABI, ElectionAddress);

export const recordVoteOnBlockchain = async (voterId: string, candidateId: number) => {
  try { 
    const accounts = await web3.eth.getAccounts();
    const voter: { hasVoted: boolean } = await contract.methods.voters(voterId).call();

    if (!voter || voter.hasVoted) {
      return { success: false, message: "Voter is not registered or has already voted." };
    }

    await contract.methods.vote(voterId, candidateId).send({ from: accounts[0] });
    return { success: true };
  } catch (error: any) {
    console.error(error);
    return { success: false, message: error.message };
  }
}

export const getTotalVotesFromBlockchain = async (candidateNumber: number) => {
  try {
    const result: BigInt = await contract.methods.totalVotesFor(candidateNumber).call();
    return result.toString();
  } catch (error: any) {
    console.error(error);
    return "0";
  }
}

export const createVoterOnBlockchain = async (voterId: unknown, voterMajor: string) => {
  try {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.addVoter(String(voterId), voterMajor).send({ from: accounts[0] });
    return { success: true };
  } catch (error: any) {
    console.error(error);
    return { success: false, message: error.message };
  }
}

export const removeVoterOnBlockchain = async (voterId: unknown) => {
  try {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.removeVoter(String(voterId)).send({ from: accounts[0] });
    return { success: true };
  } catch (error: any) {
    console.error(error);
    return { success: false, message: error.message };
  }
}

export const getVotesByMajorOnBlockchain = async (candidateId: number, major: string) => {
  try {
    const result: BigInt = await contract.methods.totalVotesByMajor(candidateId, major).call();
    return result.toString();
  } catch (error: any) {
    console.error(error);
    return "0";
  }
}

export const getVoteHistoryOnBlochchain = async (count: number) => {
  try {
    const result: any[] = await contract.methods.getVoteHistory(count).call();
    const voteHistory = result.map(vote => ({
      voterId: vote.voterId,
      candidateId: vote.candidateId.toString(),
      timestamp: vote.timestamp.toString()
    }))
    return voteHistory;
  } catch (error: any) {
    console.error(error);
    return [];
  }
}