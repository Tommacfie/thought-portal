import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../../index';
import { DB } from '../../config';
import { MoodType, ThoughtRecordType } from '../../utils/types';

beforeAll(async () => {
  await mongoose.connect(`${DB}`);
});
afterAll(async () => {
  await mongoose.connection.close();
});

const newMood: MoodType = {
  name: 'Test Mood',
  description: ['Test Mood Array for Thought Record'],
  intensity: {
    beforeThoughtRecord: 99,
    afterThoughtRecord: 1,
  },
  tags: ['testmood'],
};

const newThoughtRecord = {
  title: 'Test Thought Record',
  situation: 'Testing environment',
  moods: [newMood],
  automaticThoughts: [],
  evidenceFor: [],
  evidenceAgainst: [],
  alternativeThoughts: [],
};
const editedThoughtRecord = {
  title: 'Edit Thought Record',
  situation: 'Edit Testing environment',
  moods: [],
  automaticThoughts: [],
  evidenceFor: [],
  evidenceAgainst: [],
  alternativeThoughts: [],
};

let thoughtRecordID: string;
describe('Thought Record Controller', () => {
  it('should return all thought records', async () => {
    const response = await request(app).get('/thoughtRecords');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
  it('should allow a user to create a thought record', async () => {
    const response = await request(app)
      .post('/thoughtRecord')
      .send(newThoughtRecord)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    thoughtRecordID = response.body._id;
    const mood = response.body.moods[0];

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe('Test Thought Record');
    expect(response.body.situation).toBe('Testing environment');
    expect(mood.name).toBe('Test Mood');
    expect(mood.description[0]).toBe('Test Mood Array for Thought Record');
    expect(mood.tags[0]).toBe('testmood');
  });
  it('should return a thought record by id', async () => {
    const response = await request(app).get(
      `/thoughtRecord?id=${thoughtRecordID}`
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.title).toBe('Test Thought Record');
    expect(response.body.situation).toBe('Testing environment');
  });
  it("should return a 404 error if thought record doesn't exist", async () => {
    const response = await request(app).get(
      `/thoughtRecord?id=64aaaaaaaaaa08a07774130b`
    );
    expect(response.statusCode).toBe(404);
    expect(response.text).toBe('Thought Record not found');
  });
  it('should allow a user to edit a thought record', async () => {
    const createThoughtRecordToEdit = await request(app)
      .post('/thoughtRecord')
      .send(newThoughtRecord)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    const createdThoughtRecordToEditId = createThoughtRecordToEdit.body._id;

    const editThoughtRecord = await request(app)
      .put('/thoughtRecord')
      .query({ id: createdThoughtRecordToEditId })
      .send(editedThoughtRecord)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    expect(editThoughtRecord.statusCode).toBe(200);
    expect(editThoughtRecord.body.title).toBe('Edit Thought Record');
    expect(editThoughtRecord.body.situation).toBe('Edit Testing environment');
  });
  it('should allow a user to delete a thought record', async () => {
    const createThoughtRecordToDelete = await request(app)
      .post('/thoughtRecord')
      .send(newThoughtRecord)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    const createdThoughtRecordToDeleteId = createThoughtRecordToDelete.body._id;

    const deleteThoughtRecord = await request(app)
      .delete('/thoughtRecord')
      .query({ id: createdThoughtRecordToDeleteId })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    expect(deleteThoughtRecord.statusCode).toBe(200);
    expect(deleteThoughtRecord.body.title).toBe('Test Thought Record');

    // get all journal entries and check that entry has been deleted
    const response = await request(app).get('/thoughtRecords');
    const thoughtRecordStillExists = response.body.some(
      (thoughtRecord: ThoughtRecordType) =>
        thoughtRecord._id === createdThoughtRecordToDeleteId
    );
    expect(thoughtRecordStillExists).toBe(false);
  });
});
