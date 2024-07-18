import express, { Request, Response } from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './config/db';
import UserRoute from './routes/UserRoutes';

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Blockchain Based E-Voting API');
});

app.use('/api', UserRoute);

export default app;
