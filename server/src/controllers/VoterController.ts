import { Request, Response } from "express";
import { Voter } from "../models/Voter";

export const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const voters = await Voter.find();
    res.status(200).json(voters);
  }
  catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export const getByUserId = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    
    const voter = await Voter.findOne({ userId });

    if (!voter) {
      res.status(404).json({ message: "Voter not found." });
      return;
    }
    
    res.status(200).json(voter);
  }
  catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, major, classOf, userId } = req.body;
    const voter = new Voter({
      name,
      major,
      classOf,
      userId,
    });
    await voter.save();
    res.status(201).json(voter);
  }
  catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}