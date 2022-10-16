import Mongoose from 'mongoose';
import { DB } from '../config';

const mongoose = Mongoose;

mongoose.connect(`${DB}`, (error) => {
  // eslint-disable-next-line no-console
  if (error) console.log('error:', error.message);
  // eslint-disable-next-line no-console
  console.log('Connected to mongodb');
});

export default mongoose;
