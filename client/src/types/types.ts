export type TMood = {
  name: string;
  description: [string];
  intensity: {
    beforeThoughtRecord: number;
    afterThoughtRecord: number;
  };
  tags: [string];
};

export type TThoughtRecord = {
  title: string;
  situation: string;
  moods: [TMood];
  automaticThoughts: [string];
  evidenceFor: [string];
  evidenceAgainst: [string];
  alternativeThoughts: [string];
};
