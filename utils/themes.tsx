import { ITheme } from "typescript/interfaces/interfaces";

const themes: ITheme[] = [
  {
    name: "History",
    bgImage: "/history.jpeg",
    active: true,
    id: 1,
    step: "ITheme",
    nextStep: "IDifficulty"
  },
  {
    name: "Geography",
    bgImage: "/geography.jpeg",
    active: false,
    id: 2,
    step: "ITheme",
    nextStep: "IDifficulty"
  },
  {
    name: "Politic",
    bgImage: "/politic.jpeg",
    active: false,
    id: 3,
    step: "ITheme",
    nextStep: "IDifficulty"
  },
  {
    name: "Culture",
    bgImage: "/culture.jpg",
    active: false,
    id: 4,
    step: "ITheme",
    nextStep: "IDifficulty"
  },
];

export { themes };
