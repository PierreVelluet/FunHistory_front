interface ICardItem {
  name: string;
  id: number;
  bgImage: string;
  onClick?: any;
  step: string;
  nextStep: string;
  inactive?: boolean;
}

export interface ICountry extends ICardItem {
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
  bgImage: string;
  continent: string;
}

export interface ITheme extends ICardItem {}

export interface IDifficulty extends ICardItem {
  timeout: number;
}

export interface IContinent extends ICardItem {}

export type PickableItemType = ITheme | IDifficulty | IContinent | ICountry;
