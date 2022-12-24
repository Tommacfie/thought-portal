import mongoose from '../models/index';
import request from 'supertest';
import { app } from '../index';
import { DB } from '../config';

beforeEach(async () => {
  mongoose.connect(`${DB}`, (error) => {
    if (error) {
      console.log('error: ', error);
      return;
    } else {
      console.log('connected to database');
    }
  });
});
afterEach(async () => {
  await mongoose.disconnect();
});

describe('Get /thoughtRecords', () => {
  it('should return all thought records', async () => {
    const res = await request(app).get('/thoughtRecords');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
