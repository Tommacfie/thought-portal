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
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.find({ _id: req.query.id });
    res.send(user).status(200);
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

export const deleteUser = async (req: Request, res: Response) => {
  console.log(req.body, req.query);

  try {
    const deletedUser = await User.findByIdAndDelete({ _id: req.query.id });
    res.send(deletedUser).status(200);
    return;
  } catch (error) {
    console.log('error: ', error);
    res.send(error).status(500);
    return;
  }
};
