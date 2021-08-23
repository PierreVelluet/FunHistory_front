import React, { createContext, useReducer, useContext } from "react";
import Reducer from "./reducer";

import { IGlobalState } from "typescript/interfaces/general_interfaces";

const initialState: IGlobalState = {
  loading: true,
  country: "Japan",
  numberOfQuestions: 10,
  currentQuestionNumber: 0,
  currentPanel: "IContinent",
  theme: "Culture",
  continent: "Asia",
  questions: {},
  difficulty: "Moderate",
};

const Store = ({ children }: { children: any }) => {
  const [store, dispatch] = useReducer(Reducer, initialState);

  const setLoading = (boolean: boolean) =>
    dispatch({
      type: "SET_LOADING", // The name of the reducer
      payload: boolean, // The new state of the reducer
    });
  const setSelectedCountry = (string: string) =>
    dispatch({
      type: "SET_SELECTED_COUNTRY",
      payload: string,
    });
  const setNumberOfQuestions = (string: string) =>
    dispatch({
      type: "SET_NUMBER_OF_QUESTIONS",
      payload: string,
    });
  const setCurrentPanel = (string: string) =>
    dispatch({
      type: "SET_CURRENT_PANEL",
      payload: string,
    });
    const setContinent = (string: string) =>
    dispatch({
      type: "SET_CONTINENT",
      payload: string,
    });
  const setTheme = (string: string) =>
    dispatch({
      type: "SET_THEME",
      payload: string,
    });
  const setQuestions = (object: number) =>
    dispatch({
      type: "SET_QUESTIONS",
      payload: object,
    });
  const setCurrentQuestionNumber = (object: object) =>
    dispatch({
      type: "SET_CURRENT_QUESTION_NUMBER",
      payload: object,
    });
  const setDifficulty = (object: string) =>
    dispatch({
      type: "SET_DIFFICULTY",
      payload: object,
    });

  return (
    <Context.Provider
      value={{
        //@ts-ignore
        store,
        setLoading,
        setSelectedCountry,
        setNumberOfQuestions,
        setCurrentPanel,
        setTheme,
        setContinent,
        setQuestions,
        setCurrentQuestionNumber,
        setDifficulty,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const Context = createContext(initialState);
export { Store };
export const useGlobalContext = () => useContext(Context);
