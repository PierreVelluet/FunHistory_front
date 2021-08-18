import React, { createContext, useReducer, useContext } from "react";
import Reducer from "./reducer";

import { IGlobalState } from "typescript/interfaces/general_interfaces";

const initialState: IGlobalState = {
  loading: true,
  country: "",
  numberOfQuestions: 10,
  panel: "CountryPanel",
  questions: {}
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
  const setPanel = (string: string) =>
    dispatch({
      type: "SET_PANEL",
      payload: string,
    });
    const setQuestions = (object: object) =>
    dispatch({
      type: "SET_QUESTIONS",
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
        setPanel,
        setQuestions
      }}
    >
      {children}
    </Context.Provider>
  );
};

const Context = createContext(initialState);
export { Store };
export const useGlobalContext = () => useContext(Context);
