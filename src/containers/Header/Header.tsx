import React from "react";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>Today</li>
          <li className={classes.selected}>Week</li>
        </ul>
      </nav>
      <div className={classes.units}>
        <div className={classes.selected}>&#176;C</div>
        <div>&#176;F</div>
      </div>
    </header>
  );
};

export default Header;
