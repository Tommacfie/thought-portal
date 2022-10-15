import { Schema, model } from 'mongoose';

const thoughtSchema = new Schema({
  name: String,
  email: String,
  tags:[String]
});

const Thought = model('thought', thoughtSchema);

export default Thought;
