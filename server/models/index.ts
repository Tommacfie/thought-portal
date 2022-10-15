import mongoose from 'mongoose';
import { DB }from '../config'

mongoose.connect(`${DB}`, (error) => {
  // eslint-disable-next-line no-console
  if (error) return console.log(error.message);
  // eslint-disable-next-line no-console
  return console.log('Connected to mongodb');
});

export default mongoose;
