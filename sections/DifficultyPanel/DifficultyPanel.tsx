import React, { useState, useEffect } from "react";

import DifficultyCard from "./DifficultyCard/DifficultyCard";

import { IDifficulty } from "typescript/interfaces/general_interfaces";
import { difficulties } from "utils/difficulties";
import { useGlobalContext } from "utils/globalState/store";

import classes from "./DifficultyPanel.module.less";

const DifficultyPanel = () => {
  const { store, setLoading, setPanel, setDifficulty }: any =
    useGlobalContext();
  const [attention, setAttention] = useState<boolean[]>(
    Array(difficulties.length).fill(false)
  );
  const [out, setOut] = useState<boolean[]>(
    Array(difficulties.length).fill(false)
  );

  const setAnimationsStates = (selectionnedDifficulty: number) => {
    const newAttention = attention?.map((el: boolean, index: number) => {
      return index === selectionnedDifficulty - 1? !el : el;
    });
    const newOut = out?.map((el: boolean, index: number) => {
      return index === selectionnedDifficulty - 1? el : !el;
    });
    return { newAttention, newOut };
  };
  
  const selectDifficultyHandler = (selectionnedDifficulty: number) => {
    const { newAttention, newOut } = setAnimationsStates(selectionnedDifficulty);
    setAttention(newAttention);
    setOut(newOut);
    setDifficulty(difficulties[selectionnedDifficulty - 1].name);
    setTimeout(() => { setPanel("RulesPanel")}, 3000)
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  console.log("difficulties are:", difficulties)

  return (
    <div className={classes.difficultyContainer}>
      {difficulties?.map((el: IDifficulty, index: number) => {
        return (
          <DifficultyCard
            key={el?.name}
            difficulty={el}
            selectDifficultyHandler={selectDifficultyHandler}
            out={out[index]}
            attention={attention[index]}
          />
        );
      })}
    </div>
  );
};

export default DifficultyPanel;
