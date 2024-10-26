import { Request, Response } from "express";
import { Voter } from "../models/Voter";
import crypto from 'crypto';
import { User } from "../models/User";

export const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const voters = await Voter.find();
    res.status(200).json(voters);
  }
  catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export const getById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    
    const voter = await Voter.findById(id);

    if (!voter) {
      res.status(404).json({ message: "Voter not found." });
      return;
    }
    
    res.status(200).json(voter);
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
    const { name, nim, major, classOf } = req.body;
    
    const defaultPassword = crypto.randomBytes(8).toString('hex');
    const user = new User({
      username: nim,
      password: defaultPassword,
      role: 'voter',
    });
    await user.save();

    const voter = new Voter({
      name,
      nim,
      major,
      classOf,
      userId: user._id,
    });
    await voter.save();

    res.status(201).json({ voter, user: { username: user.username, password: defaultPassword } });
  }
  catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}