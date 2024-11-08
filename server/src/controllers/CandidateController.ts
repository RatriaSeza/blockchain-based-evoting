import { Request, Response } from "express";
import { Candidate } from "../models/Candidate";
import { getTotalVotesFromBlockchain } from "../services/blockchainService";
import mongoose from "mongoose";

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

export const getCandidateImage = async (req: Request, res: Response): Promise<void> => {
  try {
    const candidateNumber = req.params.candidateNumber;
    const candidate = await Candidate.findOne({ candidateNumber });

    if (!candidate || !candidate.candidateImage) {
      res.status(404).json({ status: "error", error: "Image not found" });
      return;
    }

    // Convert base64 image back to buffer and send
    const imageBuffer = Buffer.from(candidate.candidateImage, "base64");
    res.setHeader("Content-Type", "image/jpeg");
    res.setHeader("Content-Disposition", `inline; filename="candidate_${candidateNumber}.jpg"`);
    res.status(200).send(imageBuffer);
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
    res.status(201).json({ message: "Candidate created", candidate });
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

export const editCandidate = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    // Ensure the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: "Invalid candidate ID" });
      return;
    }

    // Prepare the update data
    const updateData: any = {
      candidateNumber: req.body.candidateNumber,
      chiefName: req.body.chiefName,
      viceName: req.body.viceName,
      chiefMajor: req.body.chiefMajor,
      viceMajor: req.body.viceMajor,
      chiefClassOf: req.body.chiefClassOf,
      viceClassOf: req.body.viceClassOf,
    };

    // Check if a new image file is provided
    if (req.file) {
      updateData.candidateImage = req.file.buffer.toString("base64");
    }

    const candidate = await Candidate.findByIdAndUpdate(id, updateData, { new: true });

    // If no candidate was found and updated, return a 404
    if (!candidate) {
      res.status(404).json({ error: "Candidate not found" });
      return;
    }

    // Success: Return the updated candidate data
    res.status(200).json({ message: "Candidate updated", candidate });

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export const deleteCandidate = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    // Ensure the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: "Invalid candidate ID" });
      return;
    }

    // Attempt to delete the candidate by ID
    const deletedCandidate = await Candidate.findByIdAndDelete(id);

    // If no candidate was found and deleted, return a 404
    if (!deletedCandidate) {
      res.status(404).json({ error: "Candidate not found" });
      return;
    }

    // Success: Return the deleted candidate data
    res.status(200).json({ message: "Candidate deleted successfully", candidate: deletedCandidate });

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}