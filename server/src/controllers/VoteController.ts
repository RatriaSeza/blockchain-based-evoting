import { Request, Response, NextFunction } from "express";
import { Voter } from "../models/Voter";
import { Candidate } from "../models/Candidate";
import { recordVoteOnBlockchain } from "../services/blockchainService";

export const Vote = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { voterId, candidateId } = req.body;

    if (!voterId || !candidateId) {
      res.status(400).json({ message: "Invalid request." });
      return;
    }

    const voter = await Voter.findById(voterId);

    if (!voter || voter.isVoted) {
      res.status(400).json({ message: "Voter has already voted or invalid voter." });
      return;
    }
      
    const candidate = await Candidate.findById(candidateId);

    if (!candidate) {
      res.status(404).json({ message: "Candidate not found." });
      return;
    }

    const result = await recordVoteOnBlockchain(voterId, candidate.candidateNumber);    
    if (!result.success) {
      res.status(500).json({ message: result.message });
      return;
    }

    voter.isVoted = true;
    await voter.save();

    res.status(200).json({ message: "Vote recorded successfully." });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}