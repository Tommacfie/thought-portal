import { Request, Response } from 'express';
import Mood from '../models/Mood';
import ThoughtRecord from '../models/thoughtRecord';

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
    const newMood = await Mood.create(req.body.moods);
    req.body.moods = newMood;
    const newThoughtRecord = await ThoughtRecord.create(req.body);
    res.send(newThoughtRecord).status(201);
  } catch (error) {
    console.log('error:', error);
    res.send(error).status(500);
  }
};
