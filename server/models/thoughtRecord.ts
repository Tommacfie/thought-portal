import mongoose from './index';
const { Schema, model } = mongoose;
import { ThoughtRecordType } from '../utils/types';

const thoughtRecordSchema = new Schema<ThoughtRecordType>(
  {
    title: String,
    situation: String,
    moods: [{ type: Schema.Types.ObjectId, ref: 'mood' }],
    automaticThoughts: [String],
    evidenceFor: [String],
    evidenceAgainst: [String],
    alternativeThoughts: [String],
  },
  { timestamps: true }
);

const ThoughtRecord = model<ThoughtRecordType>(
  'thoughtRecord',
  thoughtRecordSchema
);

export default ThoughtRecord;
