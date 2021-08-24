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
    case "SET_CURRENT_PANEL":
      return {
        ...state,
        currentPanel: action.payload,
      };
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    case "SET_CONTINENT":
      return {
        ...state,
        continent: action.payload,
      };
    case "SET_CURRENT_QUESTION_NUMBER":
      return {
        ...state,
        currentQuestionNumber: action.payload,
      };
    case "SET_QUESTIONS":
      return {
        ...state,
        questions: action.payload,
      };
    case "SET_DIFFICULTY":
      return {
        ...state,
        difficulty: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
