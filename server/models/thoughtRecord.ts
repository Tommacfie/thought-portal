import mongoose from './index';
const { Schema, model } = mongoose;
import { IThoughtRecord } from '../utils/interfaces';

const thoughtRecordSchema = new Schema<IThoughtRecord>({
  title: String,
  situation: String,
  moods: [{ type: Schema.Types.ObjectId, ref: 'mood' }],
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
