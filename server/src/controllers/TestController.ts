import { Request, Response } from "express";
import CryptoJS from "crypto-js";

export const hashBlock = async (req: Request, res: Response): Promise<void> => {
  try {
    let { data } = req.body;

    let hash = "";
    let nonce = 0;

    while (hash.substring(0, 4) !== "0000") {
      nonce++;
      hash = CryptoJS.SHA256(data + nonce).toString();
    }

    res.status(200).json({ hash, nonce });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};