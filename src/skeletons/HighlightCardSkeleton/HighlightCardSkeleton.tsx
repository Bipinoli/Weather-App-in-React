import React from "react";
import classes from "../../components/HighlightCard/HighlightCard.module.scss";
import BaseSkeleton from "../BaseSkeleton/BaseSkeleton";

const HighlightCardSkeleton = () => {
  return (
    <article className={classes.today_card}>
      <BaseSkeleton type="rectangle" size="small" />
      <BaseSkeleton type="square" size="big" />
      <BaseSkeleton type="rectangle" size="big" />
    </article>
  );
};

export default HighlightCardSkeleton;
