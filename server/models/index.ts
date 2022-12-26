import Mongoose from 'mongoose';
import { DB } from '../config';

const mongoose = Mongoose;

mongoose.connect(`${DB}`, (error) => {
  // eslint-disable-next-line no-console
  if (error) {
    console.log('error:', error);
    return;
  }
  // eslint-disable-next-line no-console
  console.log(`\n${new Date().toLocaleString()}:\n=> Connected to mongodb\n`);
});

mongoose.connection.on('close', (error) => {
  if (error) {
    console.log('error: ', error);
    return;
  }
  console.log(
    `\n${new Date().toLocaleString()}:\n=> Disconnected from mongodb\n`
  );
});

export default mongoose;
