import { IDifficulty } from "typescript/interfaces/interfaces";

const difficulties: IDifficulty[] = [
  {
    name: "Easy",
    id: 1,
    numberOfQuestions: 5,
    timeout: 20,
    bgImage: "/easy.jpeg",
    type: "IDifficulty"
  },
  {
    name: "Moderate",
    id: 2,
    numberOfQuestions: 10,
    timeout: 15,
    bgImage: "/moderate.jpeg",
    type: "IDifficulty"
  },
  {
    name: "Hard",
    id: 3,
    numberOfQuestions: 15,
    timeout: 10,
    bgImage: "/hard.jpeg",
    type: "IDifficulty"
  },
  {
    name: "Insane",
    id: 4,
    numberOfQuestions: 20,
    timeout: 5,
    bgImage: "/insane.jpeg",
    type: "IDifficulty"
  },
];

export { difficulties };
