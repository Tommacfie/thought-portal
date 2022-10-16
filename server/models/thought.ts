import mongoose from './index';
const { Schema, model } = mongoose;
import { IThought } from '../utils/interfaces';

const thoughtSchema = new Schema<IThought>({
  title: String,
  body: String,
  tags: [String],
});

const Thought = model<IThought>('thought', thoughtSchema);

export default Thought;
