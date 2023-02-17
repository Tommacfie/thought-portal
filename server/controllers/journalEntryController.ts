import { Request, Response } from 'express';
import JournalEntry from '../models/journalEntry';

export const getJournalEntries = async (_req: Request, res: Response) => {
  try {
    const journalEntries = await JournalEntry.find();
    res.send(journalEntries).status(200);
    return;
  } catch (error) {
    console.log('error: ', error);
    res.send(error).status(500);
    return;
  }
};
export const getJournalEntryById = async (req: Request, res: Response) => {
  try {
    const journalEntry = await JournalEntry.findById({
      _id: req.query.id,
    });

    if (!journalEntry) {
      res.send('Journal Entry not found').status(404);
    } else {
      res.send(journalEntry).status(200);
    }
    return;
  } catch (error) {
    console.log('error: ', error);
    res.send(error).status(500);
    return;
  }
};

export const createJournalEntry = async (req: Request, res: Response) => {
  try {
    const newJournalEntry = await JournalEntry.create(req.body);
    res.send(newJournalEntry).status(201);
    return;
  } catch (error) {
    console.log('error: ', error);
    res.send(error).status(500);
    return;
  }
};

export const updateJournalEntry = async (req: Request, res: Response) => {
  try {
    const newJournalEntry = await JournalEntry.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      { ...req.body },
      { new: true }
    );
    res.send(newJournalEntry).status(200);
    return;
  } catch (error) {
    console.log('error: ', error);
    res.send(error).status(500);
    return;
  }
};

export const deleteJournalEntry = async (req: Request, res: Response) => {
  try {
    const deletedJournalEntry = await JournalEntry.findOneAndDelete({
      _id: req.query.id,
    });

    res.send(deletedJournalEntry).status(200);
    return;
  } catch (error) {
    console.log('error: ', error);
    return;
  }
};
