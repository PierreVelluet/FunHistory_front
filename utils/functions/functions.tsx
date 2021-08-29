import { IQuestion, IQuestionState } from "typescript/interfaces/general_interfaces";

const capitalize = (s: any) => {
  if (typeof s === "string") {
    return (s && s[0].toUpperCase() + s.slice(1)) || "";
  } else if (typeof s === "number") {
    return s.toLocaleString();
  } else {
    return s;
  }
};

const booleanArrayHandler = (boolArray: boolean[], id: number) => {
  return boolArray.map((el: boolean, index: number) => {
    return index === id - 1 ? el : !el;
  });
};

const addIdHandler = (data: []) => {
  return data?.map((el: any, index: number) => {
    return {
      ...el,
      id: index + 1,
    };
  });
};

const initializeQuestionsState = (questions: IQuestion[]): IQuestionState[] => {
  return questions.map((el: IQuestion, index: number) => {
    return {
        number: index + 1,
        state: index === 0 ? 'current' : 'upcoming',
    }
})
}

export { capitalize, booleanArrayHandler, addIdHandler, initializeQuestionsState };
