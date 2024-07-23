import { Request, Response } from "express";
import { Candidate } from "../models/Candidate";

export const getCandidates = async (req: Request, res: Response): Promise<void> => {
  try {
    const candidates = await Candidate.find();
    res.status(200).json(candidates);
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