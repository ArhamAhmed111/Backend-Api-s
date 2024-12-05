import express from 'express';
import { userData } from '../AllData/UserData.js';

export const userRoute = express.Router();

userRoute.get('/', (req, res) => {
  res.status(200).send({ status: 200, message: 'success', data: userData });
});
