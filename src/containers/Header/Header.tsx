import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DAY, WEEK, week, today } from "../../store/actions/viewType";
import { DEG_C, DEG_F, celsius, fahrenheit } from "../../store/actions/units";

import classes from "./Header.module.scss";

const Header = () => {
  const viewType = useSelector((state: any) => state.viewType);
  const unit = useSelector((state: any) => state.unit);
  const dispatch = useDispatch();

  const handleViewTypeClick = (event: any) => {
    switch (event.target.innerText) {
      case "Week":
        return dispatch(week());
      case "Today":
        return dispatch(today());
    }
  };

  const handleUnitClick = (event: any) => {
    switch (event.target.getAttribute("degree")) {
      case "F":
        return dispatch(fahrenheit());
      case "C":
        return dispatch(celsius());
    }
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li
            onClick={handleViewTypeClick}
            className={viewType === DAY ? classes.selected : ""}
          >
            Today
          </li>
          <li
            onClick={handleViewTypeClick}
            className={viewType === WEEK ? classes.selected : ""}
          >
            Week
          </li>
        </ul>
      </nav>
      <div className={classes.units}>
        <div
          onClick={handleUnitClick}
          className={unit === DEG_C ? classes.selected : ""}
          // @ts-ignore
          degree="C"
        >
          &#176;C
        </div>
        <div
          onClick={handleUnitClick}
          className={unit === DEG_F ? classes.selected : ""}
          // @ts-ignore
          degree="F"
        >
          &#176;F
        </div>
      </div>
    </header>
  );
};

export default Header;
