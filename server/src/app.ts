import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './config/db';
import UserRoute from './routes/UserRoutes';
import CandidateRoute from './routes/CandidateRoutes';
import MasterRoute from './routes/MasterRoutes';

const app = express();

connectDB();

app.use(
  cors({
    origin: ['http://localhost:5000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Blockchain Based E-Voting API');
});

app.use('/api', UserRoute);
app.use('/api', CandidateRoute);
app.use('/api', MasterRoute);

export default app;
