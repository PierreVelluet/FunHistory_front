import { IActivity } from "typescript/interfaces/general_interfaces";

const activities: IActivity[] = [
  {
    name: "History",
    backgroundImage: "/history.png",
    active: true,
    number: 1,
    setter: null,
  },
  {
    name: "Geography",
    backgroundImage: "/geography.jpeg",
    active: true,
    number: 2,
    setter: null,
  },
  {
    name: "Politic",
    backgroundImage: "/politic.png",
    active: false,
    number: 3,
    setter: null,
  },
];

export { activities };
