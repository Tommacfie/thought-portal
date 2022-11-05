import { Router } from 'express';
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

export default router;
