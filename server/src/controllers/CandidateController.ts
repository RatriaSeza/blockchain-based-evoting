import { Request, Response } from "express";
import { Candidate } from "../models/Candidate";
import { getTotalVotesFromBlockchain } from "../services/blockchainService";

export const getCandidates = async (req: Request, res: Response): Promise<void> => {
  try {
    const candidates = await Candidate.find();
    res.status(200).json(candidates);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getByCandidateNumber = async (req: Request, res: Response): Promise<void> => {
  try {
    const candidate = await Candidate.findOne({ candidateNumber: req.params.candidateNumber });
    res.status(200).json(candidate);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const createCandidate = async (req: Request, res: Response): Promise<void> => {
  try {
    const { candidateNumber, chiefName, viceName, chiefMajor, viceMajor, chiefClassOf, viceClassOf, candidateImage } = req.body;
    const candidate = new Candidate({
      candidateNumber,
      chiefName,
      viceName,
      chiefMajor,
      viceMajor,
      chiefClassOf,
      viceClassOf,
      candidateImage
    });
    await candidate.save();
    res.status(201).json(candidate);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getTotalVotesByCandidate = async (req: Request, res: Response): Promise<void> => {
  try {
    const { candidateNumber } = req.params;
    const candidate = await Candidate.findOne({ candidateNumber: candidateNumber });

    if (!candidate) {
      res.status(404).json({ message: "Candidate not found." });
      return;
    }

    const result = await getTotalVotesFromBlockchain(candidate.candidateNumber);
    res.status(200).send({ totalVotes: result });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}