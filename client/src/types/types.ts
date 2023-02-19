export type MoodType = {
  name: string;
  description: [string];
  intensity: {
    beforeThoughtRecord: number;
    afterThoughtRecord: number;
  };
  tags: [string];
};

export type ThoughtRecordType = {
  title: string;
  situation: string;
  moods: [MoodType];
  automaticThoughts: [string];
  evidenceFor: [string];
  evidenceAgainst: [string];
  alternativeThoughts: [string];
};

export type JournalEntryType = {
  _id: string;
  title: string;
  journalEntry: string;
  tags: string[];
};

export type CreateJournalEntryType = {
  title: string;
  journalEntry: string;
  tags: string[];
};
