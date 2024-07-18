import express, { Request, Response } from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './config/db';
import { insert } from './controllers/UserController';
import { User } from './models/user';

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Blockchain Based E-Voting API');

  try {
    const user = await new User({
      username: 'Yazid',
      password: 'password',
      role: 'admin',
      createdAt: new Date(Date.now()),
    })
    res.send('User inserted');
  } catch (error) {
    res.status(500).send('Error inserting user');
  }
});

app.get('/user', (req, res) => {
  try {
    insert();
    res.send('User inserted');
  } catch (error) {
    res.status(500).send('Error inserting user');
  } 
});

export default app;
