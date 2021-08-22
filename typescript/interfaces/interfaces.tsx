interface ICardItem {
  name: string;
  id: number;
  bgImage: string;
  onClick?: any;
}

export interface ITheme extends ICardItem {
  active: boolean;
  type: "ITheme";
}

export interface IDifficulty extends ICardItem {
  numberOfQuestions: number;
  timeout: number;
  type: "IDifficulty";
}

export interface IContinent extends ICardItem {
  active: boolean;
  type: "IContinent";
}

export type PickableItemType = ITheme | IDifficulty | IContinent;
