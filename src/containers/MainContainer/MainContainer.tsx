import React from "react";

import classes from "./MainContainer.module.scss";
import Header from "./../Header/Header";
import WeeksContainer from "../WeeksContainer/WeeksContainer";
import TodayContainer from "../TodayContainer/TodayContainer";

const MainContainer = () => {
  return (
    <div className={classes.main}>
      <Header />
      <WeeksContainer />
      <TodayContainer />
    </div>
  );
};

export default MainContainer;
