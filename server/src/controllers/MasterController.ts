import { Response, Request } from "express";
import { Master } from "../models/Master";

export const getMasters = async (req: Request, res: Response): Promise<void> => {
  try {
    const masters = await Master.find();
    res.status(200).json(masters);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getMasterByKey = async (req: Request, res: Response): Promise<void> => {
  try {
    const master = await Master.findOne({ key: req.params.key });
    res.status(200).json(master);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const createMaster = async (req: Request, res: Response): Promise<void> => {
  try {
    const { key, value } = req.body;
    const master = new Master({
      key,
      value
    });
    await master.save();
    res.status(201).json(master);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};