import React from "react";
import classes from "./WeekCard.module.scss";

type propsType = {
  day: string;
  imgSrc: string;
  temp: number;
  index: number;
  clickHandler: (index: number) => void;
};

const WeekCard = ({ day, imgSrc, temp, index, clickHandler }: propsType) => {
  const handleClick = (e: any) => {
    clickHandler(index);
  };
  return (
    <article className={classes.week_card} onClick={handleClick}>
      <p>{day}</p>
      <img src={imgSrc} alt="icon" />
      <p>{Math.round(temp)}&#176;</p>
    </article>
  );
};

export default WeekCard;
