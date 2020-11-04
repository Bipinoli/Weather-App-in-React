import React from "react";
import classes from "./WeekCard.module.scss";

type propsType = {
  day: string;
  imgSrc: string;
  temp: number;
  index: number;
  clickHandler: (index: number) => void;
  selected?: boolean;
};

const WeekCard = ({
  day,
  imgSrc,
  temp,
  index,
  clickHandler,
  selected,
}: propsType) => {
  const handleClick = (e: any) => {
    clickHandler(index);
  };
  let classname = `${classes.week_card}`;
  if (selected) classname = `${classes.week_card} ${classes.selected}`;

  return (
    <article className={classname} onClick={handleClick}>
      <p>{day}</p>
      <img src={imgSrc} alt="icon" />
      <p>{Math.round(temp)}&#176;</p>
    </article>
  );
};

export default WeekCard;
