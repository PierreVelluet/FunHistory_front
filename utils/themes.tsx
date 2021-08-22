import { ITheme } from "typescript/interfaces/interfaces";

const themes: ITheme[] = [
  {
    name: "History",
    bgImage: "/history.jpeg",
    active: true,
    id: 1,
    type: "ITheme"
  },
  {
    name: "Geography",
    bgImage: "/geography.jpeg",
    active: true,
    id: 2,
    type: "ITheme"
  },
  {
    name: "Politic",
    bgImage: "/politic.jpeg",
    active: false,
    id: 3,
    type: "ITheme"
  },
  {
    name: "Culture",
    bgImage: "/culture.jpg",
    active: false,
    id: 4,
    type: "ITheme"
  },
];

export { themes };
