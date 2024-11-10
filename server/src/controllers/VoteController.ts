import { Request, Response, NextFunction } from "express";
import { Voter } from "../models/Voter";
import { Candidate } from "../models/Candidate";
import { getVoteHistoryOnBlochchain, getVotesByMajorOnBlockchain, recordVoteOnBlockchain } from "../services/blockchainService";
import { formatTimestampDistanceToNow } from "../utils/formatTimestampDistanceToNow";

export const Vote = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { voterId, candidateId } = req.body;

    if (!voterId || !candidateId) {
      res.status(400).json({ message: "Invalid request." });
      return;
    }

    const voter = await Voter.findById(voterId);

    if (!voter || voter.isVoted) {
      res.status(400).json({ message: "You are already voted or invalid voter." });
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

export const getChartVotesByMajorSeries = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const majors = req.query.majors as string[]; 
    const candidates = await Candidate.find();
    const series = [];

    for (const candidate of candidates) {
      const data = [];
      for (const major of majors) {
        const votes = await getVotesByMajorOnBlockchain(candidate.candidateNumber, major);
        data.push(votes);
      }
      series.push({ name: candidate.chiefName, data });
    }

    res.status(200).json({ series });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export const getVoteHistory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const count = parseInt(req.params.count as string) || 0; // default value is 0 to get all history

    // get vote history from blockchain and voter information from database
    const voteHistory = await getVoteHistoryOnBlochchain(count);
    const voters = await Voter.find();

    const result = voteHistory.map(vote => ({
      voter: voters.find(voter => voter._id == vote.voterId),
      candidate: vote.candidateId,
      timestamp: formatTimestampDistanceToNow(vote.timestamp)
    }));

    res.status(200).json({ recentVotes: result });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}