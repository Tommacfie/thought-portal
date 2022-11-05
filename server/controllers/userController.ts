import { Request, Response } from 'express';

import User from '../models/user';

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.send(users).status(200);
  } catch (error) {
    console.log('error:', error);
    res.send(error).status(500);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await User.create(req.body);
    res.send(newUser).status(201);
  } catch (error) {
    console.log('error:', error);
    res.send(error).status(500);
  }
};
