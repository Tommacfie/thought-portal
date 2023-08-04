import { Request, Response } from 'express';
import Mood from '../models/mood';
import ThoughtRecord from '../models/thoughtRecord';
import { MoodType } from '../utils/types';

export const getThoughtRecords = async (_req: Request, res: Response) => {
  try {
    const thoughtRecords = await ThoughtRecord.find().populate('moods');
    res.status(200).send(thoughtRecords);
    return;
  } catch (error) {
    console.log('error: ', error);
    res.send(error).status(500);
    return;
  }
};
export const getThoughtRecordById = async (req: Request, res: Response) => {
  try {
    const thoughtRecord = await ThoughtRecord.findById({
      _id: req.query.id,
    }).populate('moods');

    if (!thoughtRecord) {
      res.status(404).send('Thought Record not found');
    } else {
      res.status(200).send(thoughtRecord);
    }
    return;
  } catch (error) {
    console.log('error: ', error);
    res.send(error).status(500);
    return;
  }
};

export const createThoughtRecord = async (req: Request, res: Response) => {
  try {
    if (req.body.moods) {
      const newMood = await Mood.create(req.body.moods);
      req.body.moods = newMood;
    }
    const newThoughtRecord = await (
      await ThoughtRecord.create(req.body)
    ).populate('moods');
    res.status(201).send(newThoughtRecord);
    return;
  } catch (error) {
    console.log('error: ', error);
    res.send(error).status(500);
    return;
  }
};

export const updateThoughtRecord = async (req: Request, res: Response) => {
  try {
    const moods: MoodType[] = req.body.moods;
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
        _id: req.query.id,
      },
      { ...req.body, moods: updatedMoods },
      { new: true }
    ).populate('moods');

    res.status(200).send(newThoughtRecord);
    return;
  } catch (error) {
    console.log('error: ', error);
    res.send(error).status(500);
    return;
  }
};

export const deleteThoughtRecord = async (req: Request, res: Response) => {
  try {
    const deletedThoughtRecord = await ThoughtRecord.findOneAndDelete({
      _id: req.query.id,
    }).populate('moods');

    if (deletedThoughtRecord?.moods.length) {
      await Promise.all(
        deletedThoughtRecord?.moods?.map(async (mood: MoodType) => {
          const deletedMood = await Mood.findByIdAndDelete({
            _id: mood._id,
          });
          return deletedMood;
        })
      );
    }
    res.status(200).send(deletedThoughtRecord);
    return;
  } catch (error) {
    console.log('error: ', error);
    return;
  }
};
