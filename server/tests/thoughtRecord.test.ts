import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../index';
import { DB } from '../config';

beforeAll(async () => {
  await mongoose.connect(`${DB}`);
});
afterAll(async () => {
  await mongoose.connection.close();
});

const newThoughtRecord = {
  title: 'Test Thought Record',
  situation: 'Testing environment',
  moods: [],
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

describe('Get /thoughtRecords', () => {
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

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe('Test Thought Record');
    expect(response.body.situation).toBe('Testing environment');
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
});
