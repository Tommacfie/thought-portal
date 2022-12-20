import mongoose from './index';
const { Schema, model } = mongoose;
import { MoodType } from '../utils/types';

export const moodSchema = new Schema<MoodType>({
  name: String,
  description: [String],
  intensity: {
    beforeThoughtRecord: { type: Number, min: 0, max: 100 },
    afterThoughtRecord: { type: Number, min: 0, max: 100 },
  },
  tags: [String],
});

const Mood = model<MoodType>('mood', moodSchema);

export default Mood;
