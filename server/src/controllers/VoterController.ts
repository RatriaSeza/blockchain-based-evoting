import { Request, Response } from "express";
import { Voter } from "../models/Voter";
import crypto from 'crypto';
import { User } from "../models/User";
import mongoose from "mongoose";
import { createVoterOnBlockchain, removeVoterOnBlockchain } from "../services/blockchainService";

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
    const defaultPassword = crypto.randomBytes(8).toString('hex');

    const user = new User({
      username: req.body.nim,
      password: defaultPassword,
      role: 'voter',
    });
    await user.save();

    const voter = new Voter({
      name: req.body.name,
      nim: req.body.nim,
      major: req.body.major,
      classOf: req.body.classOf,
      userId: user._id,
    });
    await voter.save();

    const result = await createVoterOnBlockchain(voter._id);
    if (!result.success) {
      await User.findByIdAndDelete(user._id);
      await Voter.findByIdAndDelete(voter._id);
      res.status(500).json({ error: result.message });
      return;
    }

    res.status(201).json({ voter, user: { username: user.username, password: defaultPassword } });
  }
  catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    // Ensure the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: "Invalid voter ID" });
      return;
    }

    // Find the voter by ID and update the voter data
    const updatedVoter = await Voter.findByIdAndUpdate(id, {
      name: req.body.name,
      nim: req.body.nim,
      major: req.body.major,
      classOf: req.body.classOf,
    }, { new: true });

    if (!updatedVoter) {
      res.status(404).json({ message: "Voter not found." });
      return;
    }

    res.status(200).json({ message: "Voter updated", voter: updatedVoter });
  }
  catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export const deleteById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    // Ensure the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: "Invalid voter ID" });
      return;
    }

    // Attempt to delete the voter by ID
    const deletedVoter = await Voter.findByIdAndDelete(id);

    if (!deletedVoter) {
      res.status(404).json({ message: "Voter not found." });
      return;
    }

    // Also delete the user associated with the voter
    const deletedUser = await User.findByIdAndDelete(deletedVoter.userId);
    if (!deletedUser) {
      res.status(404).json({ message: "User not found." });
    }

    const result = await removeVoterOnBlockchain(deletedVoter._id);
    if (!result.success) {
      res.status(500).json({ error: result.message });
      return
    }

    res.status(200).json({ message: "Voter deleted", voter: deletedVoter });
  }
  catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}