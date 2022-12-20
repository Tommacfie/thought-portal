import mongoose from './index';
import { UserType } from '../utils/types';

const { Schema, model } = mongoose;

const userSchema = new Schema<UserType>({
  name: String,
  email: String,
});

const User = model<UserType>('user', userSchema);

export default User;
