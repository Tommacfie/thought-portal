import { Router } from 'express';
import { getMoods, createMood } from './controllers/moodController';
import {
  createThoughtRecord,
  deleteThoughtRecord,
  getThoughtRecordById,
  getThoughtRecords,
  updateThoughtRecord,
} from './controllers/thoughtRecordController';
import {
  getUsers,
  createUser,
  getUserById,
  deleteUser,
} from './controllers/userController';

const router = Router();

// Users
router.get('/users', getUsers);
router.get('/user', getUserById);
router.post('/user', createUser);
router.delete('/user', deleteUser);

// Thought Records
router.get('/thoughtRecords', getThoughtRecords);
router.get('/thoughtRecord', getThoughtRecordById);
router.put('/thoughtRecord', updateThoughtRecord);
router.post('/thoughtRecord', createThoughtRecord);
router.delete('/thoughtRecord', deleteThoughtRecord);

// Moods
router.get('/moods', getMoods);
router.post('/mood', createMood);

export default router;
