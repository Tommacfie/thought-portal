import mongoose from './index';
const { Schema, model } = mongoose;
import { ThoughtType } from '../utils/types';

const thoughtSchema = new Schema<ThoughtType>(
  {
    title: String,
    body: String,
    tags: [String],
  },
  { timestamps: true }
);

const Thought = model<ThoughtType>('thought', thoughtSchema);

export default Thought;
