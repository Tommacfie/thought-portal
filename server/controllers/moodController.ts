import { Request, Response } from 'express';
import Mood from '../models/mood';

export const getMoods = async (_req: Request, res: Response) => {
  try {
    const moods = await Mood.find();
    res.send(moods).status(200);
    return;
  } catch (error) {
    console.log('error:', error);
    res.send(error).status(500);
    return;
  }
};

export const createMood = async (req: Request, res: Response) => {
  try {
    const newMood = await Mood.create(req.body);
    res.send(newMood).status(201);
    return;
  } catch (error) {
    console.log('error:', error);
    res.send(error).status(500);
    return;
  }
};

export const updateMood = async (req: Request, res: Response) => {
  try {
    const updatedMood = await Mood.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      { ...req.body },
      { new: true }
    );
    res.send(updatedMood).status(201);
    return;
  } catch (error) {
    console.log('error:', error);
    res.send(error).status(500);
    return;
  }
};
