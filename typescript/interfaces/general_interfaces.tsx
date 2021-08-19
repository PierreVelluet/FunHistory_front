export interface ICountry {
  name: string;
  "native country name": string;
  greeting: string;
  capital: string;
  language: string;
  government: string;
  leader: string;
  area: number;
  population: number;
  density: number;
  timeZone: string;
  establishment: string;
  "gross domestic product per capita": number;
  flagImage: string;
}

export interface IGlobalState {
  loading: boolean;
  country: string;
  numberOfQuestions: number;
  panel: string;
  activity: string;
  questions: object;
  currentQuestionNumber: number;
}

export interface IFetchResult {
  success: boolean;
  results: IQuestion[]
}

export interface IActivity {
  name: string;
  backgroundImage: string;
  active: boolean;
  number: number;
}

export interface IAnswer {
  answer: string;
  answerNumber: number;
  correct: boolean;
}

export interface IQuestion {
  country: string;
  question: string;
  answers: IAnswer[];
  type: string;
  correctAnswerImage: string;
  explanation: string;
  ressourceLink: string;
  category: string;
}
