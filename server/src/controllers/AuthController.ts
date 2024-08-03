import bcrypt from 'bcrypt';
import { User } from '../models/User';
import { createSecretToken } from '../utils/SecretToken';

export const Login = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required." });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found. Please check your NIM." });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = createSecretToken(user._id as string);

    res.cookie('token', token, {
      withCredentials: true,
      httpOnly: true,
    });
    
    res.status(200).json({ message: "Login successful.", token });
    
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred during login. Please try again later." });
  }
}

export const Logout = async (_req: any, res: any): Promise<void> => {
  res.clearCookie('token');
  res.status(200).json({ message: "Logout successful." });
}