import { Request, Response } from 'express';
import ThoughtRecord from '../models/thought';

export const getThoughtRecords = async (_req: Request, res: Response) => {
  try {
    const thoughts = await ThoughtRecord.find();
    res.send(thoughts).status(200);
  } catch (error) {
    console.log('error:', error);
    res.send(error).status(500);
  }
};

export const createThoughtRecord = async (req: Request, res: Response) => {
  try {
    const newThoughtRecord = await ThoughtRecord.create(req.body);
    res.send(newThoughtRecord).status(201);
  } catch (error) {
    console.log('error:', error);
    res.send(error).status(500);
  }
};
