import bcrypt from 'bcrypt';
import { User } from '../models/User';
import { createSecretToken } from '../utils/SecretToken';

export const Login = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { username, password, role } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required." });
    }

    if (role === 'voter') {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: "User not found. Please check your NIM." });
      }

      if (user.role !== 'voter') {
        return res.status(400).json({ message: "You not registered as a voter." });
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
      
      res.status(200).json({ message: "Login successful.", token, user });
      
      next();
    } else {

    }

  } catch (error) {
    console.error(error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Internal Server Error' });
    }

    res.status(500).json({ message: "An error occurred during login. Please try again later." });
  }
}

export const Logout = async (_req: any, res: any): Promise<void> => {
  res.clearCookie('token');
  res.status(200).json({ message: "Logout successful." });
}

export const ChangePassword = async (req: any, res: any): Promise<void> => {
  try {
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.status(400).json({ message: "Old password and new password are required." });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({ message: "Password must be at least 8 characters." });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const auth = await bcrypt.compare(oldPassword, user.password);
    if (!auth) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password changed successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred during password change. Please try again later." });
  }
}