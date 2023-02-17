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

describe('Get /thoughtRecords', () => {
  it('should return all thought records', async () => {
    const res = await request(app).get('/thoughtRecords');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
  it('should allow a user to create a thought record', async () => {
    const res = await request(app)
      .post('/thoughtRecord')
      .send(newThoughtRecord)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test Thought Record');
    expect(res.body.situation).toBe('Testing environment');
  });
  it('should allow a user to edit a thought record', async () => {});
});
