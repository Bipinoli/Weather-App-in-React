import React from "react";

import classes from "./WeekCard.module.scss";

type propsType = {
  day: string;
  imgSrc: string;
  temp: number;
};

const WeekCard = ({ day, imgSrc, temp }: propsType) => {
  return (
    <article className={classes.week_card}>
      <p>{day}</p>
      <img src={imgSrc} alt="icon" />
      <p>{temp}&#176;</p>
    </article>
  );
};

export default WeekCard;
