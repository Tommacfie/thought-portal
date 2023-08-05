import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../../index';
import { DB } from '../../config';
import { JournalEntryType } from '../../utils/types';

beforeAll(async () => {
  await mongoose.connect(`${DB}`);
});
afterAll(async () => {
  await mongoose.connection.close();
});

const newJournalEntry = {
  title: 'New Journal Entry',
  body: 'New Journal Entry content',
  tags: ['new', 'journalentry'],
};
const journalEntryToEdit = {
  title: 'Edited Journal Entry',
  body: 'Journal Entry Edited content',
  tags: ['edited', 'journalentryedited'],
};

let thoughtRecordID: string;
describe('Thought Record Controller', () => {
  it('should return all journal entries', async () => {
    const response = await request(app).get('/journalEntries');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
  it('should allow a user to create a journal entry', async () => {
    const response = await request(app)
      .post('/journalEntry')
      .send(newJournalEntry)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    thoughtRecordID = response.body._id;
    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe('New Journal Entry');
    expect(response.body.body).toBe('New Journal Entry content');
  });
  it('should return a journal entry by id', async () => {
    const response = await request(app).get(
      `/journalEntry?id=${thoughtRecordID}`
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.title).toBe('New Journal Entry');
    expect(response.body.body).toBe('New Journal Entry content');
  });
  it("should return a 404 error if journal entry doesn't exist", async () => {
    const response = await request(app).get(
      `/journalEntry?id=64aaaaaaaaaa08a07774130b`
    );
    expect(response.statusCode).toBe(404);
    expect(response.text).toBe('Journal Entry not found');
  });
  it('should allow a user to edit a journal entry', async () => {
    const createJournalEntryToEdit = await request(app)
      .post('/journalEntry')
      .send(newJournalEntry)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    const createdJournalEntryToEditId = createJournalEntryToEdit.body._id;

    const editedJournalEntry = await request(app)
      .put('/journalEntry')
      .query({ id: createdJournalEntryToEditId })
      .send(journalEntryToEdit)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    expect(editedJournalEntry.statusCode).toBe(200);
    expect(editedJournalEntry.body.title).toBe('Edited Journal Entry');
    expect(editedJournalEntry.body.body).toBe('Journal Entry Edited content');
  });
  it('should allow a user to delete a journal entry', async () => {
    const createJournalEntryToDelete = await request(app)
      .post('/journalEntry')
      .send(newJournalEntry)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    const createdJournalEntryToDeleteId = createJournalEntryToDelete.body._id;

    const deleteJournalEntry = await request(app)
      .delete('/journalEntry')
      .query({ id: createdJournalEntryToDeleteId })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    expect(deleteJournalEntry.statusCode).toBe(200);
    expect(deleteJournalEntry.body.title).toBe('New Journal Entry');

    // get all journal entries and check that entry has been deleted
    const response = await request(app).get('/journalEntries');
    const journalEntryStillExists = response.body.some(
      (journalEntry: JournalEntryType) =>
        journalEntry._id === createdJournalEntryToDeleteId
    );
    expect(journalEntryStillExists).toBe(false);
  });
});
