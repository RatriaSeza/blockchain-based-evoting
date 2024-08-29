import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { connectDB } from './config/db';
import UserRoute from './routes/UserRoutes';
import CandidateRoute from './routes/CandidateRoutes';
import MasterRoute from './routes/MasterRoutes';
import LoginRoute from './routes/AuthRoutes';
import TestRoutes from './routes/TestRoutes';
import VoterRoutes from './routes/VoterRoutes';
import VoteRoute from './routes/VoteRoutes';
import CandidateImageRoutes from './routes/CandidateImageRoutes';

const app = express();

connectDB();

app.use(
  cors({
    origin: ['http://localhost:5000', 'http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/auth', LoginRoute);
app.use('/api', UserRoute);
app.use('/api', VoterRoutes);
app.use('/api', CandidateRoute);
app.use('/api', MasterRoute);
app.use('/api', CandidateImageRoutes);
app.use('/api', VoteRoute)

app.use('/api/test', TestRoutes);

export default app;
