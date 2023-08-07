import { Request, Response } from 'express';

import Thought from '../../models/thought';
import { consoleLog } from '../../utils/helpers/logging';

export const getThoughts = async (_req: Request, res: Response) => {
  try {
    const thoughts = await Thought.find();
    res.send(thoughts).status(200);
  } catch (error) {
    consoleLog('error: ' + error);
    res.send(error).status(500);
  }
};

export const createThought = async (req: Request, res: Response) => {
  try {
    const newThought = await Thought.create(req.body);
    res.send(newThought).status(201);
  } catch (error) {
    consoleLog('error: ' + error);
    res.send(error).status(500);
  }
};
