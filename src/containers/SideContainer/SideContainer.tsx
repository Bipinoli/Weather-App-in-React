import React from "react";

import classes from "./SideContainer.module.scss";

const SideContainer = () => {
  return (
    <div className={classes.sidebar}>
      <section className={classes.search}>
        <input type="text" placeholder="Search for places ..." />
        <i className="fa fa-search"></i>
      </section>

      <section className={classes.main}>
        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
        <div className={classes.metrics}>
          <div className={classes.temp}>12&#176;C</div>
          <p>Mostly Cloudy</p>
        </div>
      </section>

      <section className={classes.cityPart}>
        <h2>Kathmandu</h2>
        <div className={classes.datetime}>
          Monday, <span className={classes.time}>16:00</span>
        </div>
      </section>
    </div>
  );
};

export default SideContainer;
