import mongoose from './index';
const { Schema, model } = mongoose;
import { IMood } from '../utils/interfaces';

export const moodSchema = new Schema<IMood>({
  name: String,
  description: [String],
  intensity: {
    beforeThoughtRecord: { type: Number, min: 0, max: 100 },
    afterThoughtRecord: { type: Number, min: 0, max: 100 },
  },
  tags: [String],
});

const Mood = model<IMood>('mood', moodSchema);

export default Mood;
