import mongoose from './index';
const { Schema, model } = mongoose;
import { IThoughtRecord } from '../utils/interfaces';
import { moodSchema } from './mood';

const thoughtRecordSchema = new Schema<IThoughtRecord>({
  title: String,
  situation: String,
  moods: [moodSchema],
  automaticThoughts: [String],
  evidenceFor: [String],
  evidenceAgainst: [String],
  alternativeThoughts: [String],
});

const ThoughtRecord = model<IThoughtRecord>(
  'thoughtRecord',
  thoughtRecordSchema
);

export default ThoughtRecord;
