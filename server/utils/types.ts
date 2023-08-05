export type UserType = {
  _id?: string;
  name: string;
  email: string;
  password: string;
};

export type ThoughtType = {
  _id?: string;
  title: string;
  body: string;
  tags: string[];
};

export type MoodType = {
  _id?: string;
  name: string;
  description: string[];
  intensity: {
    beforeThoughtRecord: number;
    afterThoughtRecord: number;
  };
  tags: [string];
};

export type ThoughtRecordType = {
  _id?: string;
  title: string;
  situation: string;
  moods: MoodType[];
  automaticThoughts: string[];
  evidenceFor: string[];
  evidenceAgainst: string[];
  alternativeThoughts: string[];
};

export type JournalEntryType = {
  _id?: string;
  title: string;
  body: string;
  tags: string[];
};
