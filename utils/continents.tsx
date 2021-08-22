import { IContinent } from "typescript/interfaces/interfaces";

const continents: IContinent[] = [
  {
    name: "Asia",
    bgImage: "/asia.jpeg",
    active: true,
    id: 1,
    type: "IContinent"
  },
  {
    name: "Africa",
    bgImage: "/africa.jpeg",
    active: true,
    id: 2,
    type: "IContinent"
  },
  {
    name: "America",
    bgImage: "/america.jpeg",
    active: false,
    id: 3,
    type: "IContinent"
  },
  {
    name: "Europe",
    bgImage: "/europe.jpeg",
    active: false,
    id: 4,
    type: "IContinent"
  },
  {
    name: "Australia",
    bgImage: "/australia.jpeg",
    active: false,
    id: 5,
    type: "IContinent"
  },
];

export { continents };
