interface ICardItem {
  name: string;
  id: number;
  bgImage: string;
  onClick?: any;
  step: string;
  nextStep: string;
}

export interface ITheme extends ICardItem {
  active: boolean;
}

export interface IDifficulty extends ICardItem {
  numberOfQuestions: number;
  timeout: number;
}

export interface IContinent extends ICardItem {
  active: boolean;
}

export type PickableItemType = ITheme | IDifficulty | IContinent;
