import { IActivity } from "typescript/interfaces/general_interfaces";

const allActivities: IActivity[] = [
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

const animations = {
  outRight: "animate__animated animate__bounceOutRight",
  inDown: "animate__animated animate__bounceInDown",
  attention: "animate__animated animate__rubberBand",
  delay1: "animate__delay-1s",
  delay2: "animate__delay-2s",
  delay3: "animate__delay-3s",
  delay4: "animate__delay-4s",
  delay5: "animate__delay-5s",
  
};

export { allActivities, animations };
