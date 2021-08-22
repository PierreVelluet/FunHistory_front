import { IActivity } from "typescript/interfaces/general_interfaces";

const activities: IActivity[] = [
  {
    name: "History",
    backgroundImage: "/history.jpeg",
    active: true,
    number: 1,
  },
  {
    name: "Geography",
    backgroundImage: "/geography.jpeg",
    active: true,
    number: 2,
  },
  {
    name: "Politic",
    backgroundImage: "/politic.jpeg",
    active: false,
    number: 3,
  },
  {
    name: "Culture",
    backgroundImage: "/culture.jpg",
    active: false,
    number: 4,
  },
];

export { activities };
