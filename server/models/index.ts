/* eslint-disable no-console */
import Mongoose from 'mongoose';
import { DB } from '../config';

const mongoose = Mongoose;

mongoose.connect(`${DB}`, (error) => {
  if (error) {
    console.log('error:', error);
    return;
  }
  if (process.env.NODE_ENV != 'test') {
    console.log(`\n${new Date().toLocaleString()}:\n=> Connected to mongodb\n`);
  }
});

mongoose.connection.on('close', (error) => {
  if (error) {
    console.log('error: ', error);
    return;
  }
  if (process.env.NODE_ENV != 'test') {
    console.log(
      `\n${new Date().toLocaleString()}:\n=> Disconnected from mongodb\n`
    );
  }
});

export default mongoose;
