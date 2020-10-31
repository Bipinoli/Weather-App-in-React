import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DAY, WEEK, DEG_C, DEG_F } from "../../store/constants/actions";
import ViewTypeActions from "../../store/viewTypes/action";
import UnitActions from "../../store/units/action";

import classes from "./Header.module.scss";

const Header = () => {
  const viewType = useSelector((state: any) => state.viewType);
  const unit = useSelector((state: any) => state.unit);
  const dispatch = useDispatch();

  const handleViewTypeClick = (event: any) => {
    switch (event.target.innerText) {
      case "Week":
        return dispatch(ViewTypeActions.week());
      case "Today":
        return dispatch(ViewTypeActions.today());
    }
  };

  const handleUnitClick = (event: any) => {
    switch (event.target.getAttribute("degree")) {
      case "F":
        return dispatch(UnitActions.fahrenheit());
      case "C":
        return dispatch(UnitActions.celsius());
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
