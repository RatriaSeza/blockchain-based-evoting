import { Request, Response, NextFunction } from "express";
import { CandidateImage } from "../models/CandidateImage";

export const getImage = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const candidateNumber = req.params.candidateNumber;
    const candidateImage = await CandidateImage.findOne({ candidateNumber });

    if (!candidateImage) {
      res.status(404).json({ status: "error", error: "Image not found" });
      return;
    }

    res.status(200).json({ 
      status: "success", 
      image: candidateImage?.image,
    });
  }
  catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export const storeImage = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ status: "error", error: "No image file" });
      return;
    } 

    const existingImage = await CandidateImage.findOne({ candidateNumber: req.body.candidateNumber });

    if (existingImage) {
      res.status(400).json({ status: "error", error: "Image already exists for this candidate" });
      return;
    }
    
    const uploadImage = new CandidateImage({
      image: req.file?.buffer.toString("base64"),
      candidateNumber: req.body.candidateNumber
    });

    await uploadImage.save();

    res.status(201).json({ 
      status: "success", 
      message: "Image uploaded successfully", 
      imageUrl: `http://localhost:5000/api/candidate/image/${uploadImage.candidateNumber}`,
      details: {
        fileName: req.file?.originalname,
        size: req.file?.size,
        mimetype: req.file?.mimetype
      }
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}