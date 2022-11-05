import { Router } from 'express';
import { getMoods, createMood } from './controllers/moodController';
import {
  createThoughtRecord,
  getThoughtRecords,
} from './controllers/thoughtRecordController';
import { getUsers, createUser } from './controllers/userController';

const router = Router();

// Users
router.get('/users', getUsers);
router.post('/user', createUser);

// Thought Records
router.get('/thoughtRecords', getThoughtRecords);
router.post('/thoughtRecord', createThoughtRecord);

// Moods
router.get('/moods', getMoods);
router.post('/mood', createMood);

export default router;
