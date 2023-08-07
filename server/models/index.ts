/* eslint-disable no-console */
import Mongoose from 'mongoose';
import { DB } from '../config';
import { log, logWithDate } from '../utils/helpers/logging';

const mongoose = Mongoose;

mongoose.set('strictQuery', true);

mongoose.connect(`${DB}`, (error) => {
  if (error) {
    log('error: ' + error);
    return;
  }
  if (process.env.NODE_ENV != 'test') {
    logWithDate('Connected to mongodb');
  }
});

mongoose.connection.on('close', (error) => {
  if (error) {
    log('error: ' + error);
    return;
  }
  if (process.env.NODE_ENV != 'test') {
    logWithDate('Disconnected from mongodb');
  }
});

export default mongoose;
