interface ICardItem {
  name: string;
  id: number;
  bgImage: string;
  onClick?: any;
  step: string;
  nextStep: string;
  active?: boolean;
}

export interface ITheme extends ICardItem {
}

export interface IDifficulty extends ICardItem {
  numberOfQuestions: number;
  timeout: number;
}

export interface IContinent extends ICardItem {
}

export type PickableItemType = ITheme | IDifficulty | IContinent;
