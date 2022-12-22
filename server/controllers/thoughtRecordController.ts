import { Request, Response } from 'express';
import Mood from '../models/Mood';
import ThoughtRecord from '../models/thoughtRecord';
import { MoodType } from '../utils/types';

export const getThoughtRecords = async (_req: Request, res: Response) => {
  try {
    const thoughtRecords = await ThoughtRecord.find().populate('moods');
    res.send(thoughtRecords).status(200);
  } catch (error) {
    console.log('error:', error);
    res.send(error).status(500);
    return;
  }
};
export const getThoughtRecord = async (req: Request, res: Response) => {
  try {
    const thoughtRecord = await ThoughtRecord.find({
      _id: req.query.id,
    }).populate('moods');
    res.send(thoughtRecord).status(200);
    return;
  } catch (error) {
    console.log('error:', error);
    res.send(error).status(500);
    return;
  }
};

export const createThoughtRecord = async (req: Request, res: Response) => {
  try {
    const newMood = await Mood.create(req.body.moods);
    req.body.moods = newMood;
    const newThoughtRecord = await ThoughtRecord.create(req.body);
    res.send(newThoughtRecord).status(201);
    return;
  } catch (error) {
    console.log('error:', error);
    res.send(error).status(500);
    return;
  }
};

export const updateThoughtRecord = async (req: Request, res: Response) => {
  const moods: MoodType[] = req.body.moods;

  try {
    const updatedMoods = await Promise.all(
      moods.map(async (mood, index) => {
        if (mood._id) {
          const updatedMood = await Mood.findOneAndUpdate(
            { _id: mood },
            { ...req.body.moods[index] },
            { new: true }
          );
          return updatedMood;
        } else {
          const newMood = await Mood.create(req.body.moods[index]);
          return newMood;
        }
      })
    );
    const newThoughtRecord = await ThoughtRecord.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      { ...req.body, moods: updatedMoods },
      { new: true }
    );
    res.send(newThoughtRecord).status(201);
    return;
  } catch (error) {
    console.log('error:', error);
    res.send(error).status(500);
    return;
  }
};
