export type UserType = {
  name: string;
  email: string;
};

export type ThoughtType = {
  title: string;
  body: string;
  tags: string[];
};

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
