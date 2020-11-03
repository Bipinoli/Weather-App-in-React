import React from "react";
import BaseSkeleton from "../BaseSkeleton/BaseSkeleton";

import classes from "./WeekCardSkeleton.module.scss";

const WeekCardSkeleton = () => {
  return (
    <article className={`${classes.week_card} ${classes.skeleton}`}>
      <BaseSkeleton type="rectangle" size="small" />
      <BaseSkeleton type="square" size="small" />
      <BaseSkeleton type="rectangle" size="small" />
    </article>
  );
};

export default WeekCardSkeleton;
