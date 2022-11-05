export interface IUser {
  name: string;
  email: string;
}

export interface IThought {
  title: string;
  body: string;
  tags: string[];
}

export interface IMood {
  name: string;
  description: [string];
  intensity: {
    beforeThoughtRecord: number;
    afterThoughtRecord: number;
  };
  tags: [string];
}

export interface IThoughtRecord {
  title: string;
  situation: string;
  moods: [IMood];
  automaticThoughts: [string];
  evidenceFor: [string];
  evidenceAgainst: [string];
  alternativeThoughts: [string];
}
