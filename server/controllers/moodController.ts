import { Request, Response } from 'express';
import Mood from '../models/Mood';

export const getMoods = async (_req: Request, res: Response) => {
  try {
    const moods = await Mood.find();
    res.send(moods).status(200);
  } catch (error) {
    console.log('error:', error);
    res.send(error).status(500);
  }
};

export const createMood = async (req: Request, res: Response) => {
  try {
    const newMood = await Mood.create(req.body);
    res.send(newMood).status(201);
  } catch (error) {
    console.log('error:', error);
    res.send(error).status(500);
  }
};
