import React from "react";

import classes from "./MainContainer.module.scss";

const MainContainer = () => {
  return (
    <div className={classes.main}>
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
      <section className={classes.weeks_container}>
        <article className={classes.week_card}>
          <p>Sun</p>
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon" />
          <p>15&#176;</p>
        </article>
        <article className={classes.week_card}>
          <p>Sun</p>
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon" />
          <p>15&#176;</p>
        </article>
        <article className={classes.week_card}>
          <p>Sun</p>
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon" />
          <p>15&#176;</p>
        </article>
        <article className={classes.week_card}>
          <p>Sun</p>
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon" />
          <p>15&#176;</p>
        </article>
        <article className={classes.week_card}>
          <p>Sun</p>
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon" />
          <p>15&#176;</p>
        </article>
        <article className={classes.week_card}>
          <p>Sun</p>
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon" />
          <p>15&#176;</p>
        </article>
        <article className={classes.week_card}>
          <p>Sun</p>
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon" />
          <p>15&#176;</p>
        </article>
      </section>
      <section className={classes.today_container}>
        <h2>Today's Highlights</h2>
        <div className={classes.today_grid}>
          <article className={classes.today_card}>
            <p className={classes.title}>Wind Status</p>
            <h1>7.70 km/h</h1>
            <p>WSW</p>
          </article>
          <article className={classes.today_card}>
            <p className={classes.title}>Wind Status</p>
            <h1>7.70 km/h</h1>
            <p>WSW</p>
          </article>
          <article className={classes.today_card}>
            <p className={classes.title}>Wind Status</p>
            <h1>7.70 km/h</h1>
            <p>WSW</p>
          </article>
          <article className={classes.today_card}>
            <p className={classes.title}>Wind Status</p>
            <h1>7.70 km/h</h1>
            <p>WSW</p>
          </article>
          <article className={classes.today_card}>
            <p className={classes.title}>Wind Status</p>
            <h1>7.70 km/h</h1>
            <p>WSW</p>
          </article>
          <article className={classes.today_card}>
            <p className={classes.title}>Wind Status</p>
            <h1>7.70 km/h</h1>
            <p>WSW</p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default MainContainer;
