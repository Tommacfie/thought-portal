import { Router } from 'express';
import {
  getJournalEntries,
  getJournalEntryById,
  createJournalEntry,
  deleteJournalEntry,
  updateJournalEntry,
} from './controllers/journal-entry/journalEntryController';
import { getMoods, createMood } from './controllers/mood/moodController';
import {
  createThoughtRecord,
  deleteThoughtRecord,
  getThoughtRecordById,
  getThoughtRecords,
  updateThoughtRecord,
} from './controllers/thought-record/thoughtRecordController';
import {
  getUsers,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
} from './controllers/user/userController';

const router = Router({ strict: true });

// Users
router.get('/users', getUsers);
router.get('/user', getUserById);
router.post('/user', createUser);
router.put('/user', updateUser);
router.delete('/user', deleteUser);

// Thought Records
router.get('/thoughtRecords', getThoughtRecords);
router.get('/thoughtRecord', getThoughtRecordById);
router.put('/thoughtRecord', updateThoughtRecord);
router.post('/thoughtRecord', createThoughtRecord);
router.delete('/thoughtRecord', deleteThoughtRecord);

// Journal Entries
router.get('/journalEntries', getJournalEntries);
router.get('/journalEntry', getJournalEntryById);
router.put('/journalEntry', updateJournalEntry);
router.post('/journalEntry', createJournalEntry);
router.delete('/journalEntry', deleteJournalEntry);

// Moods
router.get('/moods', getMoods);
router.post('/mood', createMood);

export default router;
