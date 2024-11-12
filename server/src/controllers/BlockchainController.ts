import { getVoterOnBlockchain } from "../services/blockchainService";

export const getVoter = async (req: any, res: any): Promise<void> => {
  try {
    const { id } = req.params;

    const result = await getVoterOnBlockchain(id);    

    if (!result.success) {
      return res.status(500).json({ message: result.message });
    } else {
      const voter = result.voter;
      return res.status(200).json({ voter });
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}