import ThoughtRecord from '../../../models/thoughtRecord';
import { ThoughtRecordType } from '../../types';

export const thoughtRecords = [
  {
    title: 'Mood Check',
    situation: 'At home',
    moods: [],
    automaticThoughts: [],
    evidenceFor: [],
    evidenceAgainst: [],
    alternativeThoughts: [],
  },
  {
    title: 'Mood Check',
    situation: 'At home',
    moods: [],
    automaticThoughts: [],
    evidenceFor: [],
    evidenceAgainst: [],
    alternativeThoughts: [],
  },
  {
    title: 'Mood Check',
    situation: 'At the pub after work',
    moods: [],
    automaticThoughts: [],
    evidenceFor: [],
    evidenceAgainst: [],
    alternativeThoughts: [],
  },
];

Promise.all([
  thoughtRecords.forEach(async (thoughtRecord: ThoughtRecordType) => {
    await ThoughtRecord.create(thoughtRecord);
  }),
]);
