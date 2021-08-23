import { IContinent } from "typescript/interfaces/interfaces";

const continents: IContinent[] = [
  {
    name: "Asia",
    bgImage: "/asia.jpeg",
    active: true,
    id: 1,
    step: "IContinent",
    nextStep: "CountryPanel"
  },
  {
    name: "Africa",
    bgImage: "/africa.jpeg",
    active: true,
    id: 2,
    step: "IContinent",
    nextStep: "CountryPanel"
  },
  {
    name: "America",
    bgImage: "/america.jpeg",
    active: false,
    id: 3,
    step: "IContinent",
    nextStep: "CountryPanel"
  },
  {
    name: "Europe",
    bgImage: "/europe.jpeg",
    active: false,
    id: 4,
    step: "IContinent",
    nextStep: "CountryPanel"
  },
  {
    name: "Australia",
    bgImage: "/australia.jpeg",
    active: false,
    id: 5,
    step: "IContinent",
    nextStep: "CountryPanel"
  },
];

export { continents };
