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
  questions: object
}

export interface IActivity {
  name: string,
  backgroundImage: string,
  active: boolean,
  number: number,
  setter?: any
}