import { Request, Response } from 'express';
import JournalEntry from '../../models/journalEntry';
import { consoleLog } from '../../utils/helpers/logging';

export const getJournalEntries = async (_req: Request, res: Response) => {
  try {
    const journalEntries = await JournalEntry.find();
    res.status(200).send(journalEntries);
    return;
  } catch (error) {
    consoleLog('error: ' + error);
    res.status(500).send(error);
    return;
  }
};
export const getJournalEntryById = async (req: Request, res: Response) => {
  try {
    const journalEntry = await JournalEntry.findById({
      _id: req.query.id,
    });

    if (!journalEntry) {
      res.status(404).send('Journal Entry not found');
    } else {
      res.status(200).send(journalEntry);
    }
    return;
  } catch (error) {
    consoleLog('error: ' + error);
    res.status(500).send(error);
    return;
  }
};

export const createJournalEntry = async (req: Request, res: Response) => {
  try {
    const newJournalEntry = await JournalEntry.create(req.body);
    res.status(201).send(newJournalEntry);
    return;
  } catch (error) {
    consoleLog('error: ' + error);
    res.status(500).send(error);
    return;
  }
};

export const updateJournalEntry = async (req: Request, res: Response) => {
  try {
    const newJournalEntry = await JournalEntry.findOneAndUpdate(
      {
        _id: req.query.id,
      },
      { ...req.body },
      { new: true }
    );

    res.status(200).send(newJournalEntry);
    return;
  } catch (error) {
    consoleLog('error: ' + error);
    res.status(500).send(error);
    return;
  }
};

export const deleteJournalEntry = async (req: Request, res: Response) => {
  try {
    const deletedJournalEntry = await JournalEntry.findOneAndDelete({
      _id: req.query.id,
    });

    res.status(200).send(deletedJournalEntry);
    return;
  } catch (error) {
    consoleLog('error: ' + error);
    res.status(500).send(error);
    return;
  }
};
