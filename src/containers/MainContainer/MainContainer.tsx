import React from "react";

import classes from "./MainContainer.module.scss";
import Header from "./../Header/Header";
import WeeksContainer from "../WeeksContainer/WeeksContainer";
import TodayContainer from "../TodayContainer/TodayContainer";

import { useSelector } from "react-redux";
import { WEEK } from "../../store/constants/actions";

const MainContainer = () => {
  const viewType = useSelector((state: any) => state.viewType);

  return (
    <div className={classes.main}>
      <Header />
      {viewType === WEEK ? <WeeksContainer /> : ""}
      <TodayContainer hideHeader={viewType !== WEEK} />
    </div>
  );
};

export default MainContainer;
