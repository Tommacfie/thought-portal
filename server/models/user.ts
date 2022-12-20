import mongoose from './index';
import { IUser } from '../utils/types';

const { Schema, model } = mongoose;

const userSchema = new Schema<IUser>({
  name: String,
  email: String,
});

const User = model<IUser>('user', userSchema);

export default User;
