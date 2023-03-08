import ThoughtRecord from '../../../models/thoughtRecord';

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
  thoughtRecords.forEach(async (thoughtRecord: any) => {
    await ThoughtRecord.create(thoughtRecord);
  }),
]);
