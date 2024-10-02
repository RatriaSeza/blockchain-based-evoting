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
    if (!req.file) {
      res.status(400).json({ error: "No image file" });
      return;
    }

    const candidate = new Candidate({
      candidateNumber: req.body.candidateNumber,
      chiefName: req.body.chiefName,
      viceName: req.body.viceName,
      chiefMajor: req.body.chiefMajor,
      viceMajor: req.body.viceMajor,
      chiefClassOf: req.body.chiefClassOf,
      viceClassOf: req.body.viceClassOf,
      candidateImage: req.file.buffer.toString("base64"),
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

export const deleteCandidate = async (req: Request, res: Response): Promise<void> => {
  try {
    const candidate = await Candidate.deleteOne({ "_id": {"$oid": req.params.id } });
    res.status(200).json(candidate);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}