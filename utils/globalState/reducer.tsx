const Reducer = (state: object, action: any) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_SELECTED_COUNTRY":
      return {
        ...state,
        country: action.payload,
      };
    case "SET_NUMBER_OF_QUESTIONS":
      return {
        ...state,
        numberOfQuestions: action.payload,
      };
    case "SET_PANEL":
      return {
        ...state,
        panel: action.payload,
      };
    case "SET_QUESTIONS":
    return {
        ...state,
        questions: action.payload,
    };
    default:
      return state;
  }
};

export default Reducer;
