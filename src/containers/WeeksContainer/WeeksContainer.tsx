import React from "react";

import classes from "./WeeksContainer.module.scss";
import WeekCard from "../../components/WeekCard/WeekCard";

const WeeksContainer = () => {
  return (
    <section className={classes.weeks_container}>
      <WeekCard
        day="Sun"
        imgSrc="http://openweathermap.org/img/wn/10d@2x.png"
        temp={15}
      />
      <WeekCard
        day="Sun"
        imgSrc="http://openweathermap.org/img/wn/10d@2x.png"
        temp={15}
      />
      <WeekCard
        day="Sun"
        imgSrc="http://openweathermap.org/img/wn/10d@2x.png"
        temp={15}
      />
      <WeekCard
        day="Sun"
        imgSrc="http://openweathermap.org/img/wn/10d@2x.png"
        temp={15}
      />
      <WeekCard
        day="Sun"
        imgSrc="http://openweathermap.org/img/wn/10d@2x.png"
        temp={15}
      />
      <WeekCard
        day="Sun"
        imgSrc="http://openweathermap.org/img/wn/10d@2x.png"
        temp={15}
      />
      <WeekCard
        day="Sun"
        imgSrc="http://openweathermap.org/img/wn/10d@2x.png"
        temp={15}
      />
    </section>
  );
};

export default WeeksContainer;
