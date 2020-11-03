import React, { useState } from "react";

import classes from "./MainContainer.module.scss";
import Header from "./../Header/Header";
import WeeksContainer from "../WeeksContainer/WeeksContainer";
import TodayContainer from "../TodayContainer/TodayContainer";

import { useSelector } from "react-redux";
import { WEEK } from "../../store/constants/actions";

const MainContainer = () => {
  const viewType = useSelector((state: any) => state.viewType);

  const [selectedWeekCardIndex, setSelectedWeekCardIndex] = useState(0);
  const weekCardClickHandler = (index: number): void => {
    setSelectedWeekCardIndex(index);
  };

  return (
    <div className={classes.main}>
      <Header />
      {viewType === WEEK ? (
        <WeeksContainer clickHandler={weekCardClickHandler} />
      ) : (
        ""
      )}
      <TodayContainer
        hideHeader={viewType !== WEEK}
        selectedWeekCardIndex={selectedWeekCardIndex}
      />
    </div>
  );
};

export default MainContainer;
