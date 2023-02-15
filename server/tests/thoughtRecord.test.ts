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

describe('Get /thoughtRecords', () => {
  it('should return all thought records', async () => {
    const res = await request(app).get('/thoughtRecords');
    console.log(res.body);

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
