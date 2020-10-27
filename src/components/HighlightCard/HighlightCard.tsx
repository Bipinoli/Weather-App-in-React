import React from "react";

import classes from "./HighlightCard.module.scss";

type propsType = {
  title: string;
  primaryInfo: string;
  secondaryInfo: string;
};

const HighlightCard = ({ title, primaryInfo, secondaryInfo }: propsType) => {
  return (
    <article className={classes.today_card}>
      <p className={classes.title}>{title}</p>
      <h1>{primaryInfo}</h1>
      <p>{secondaryInfo}</p>
    </article>
  );
};

export default HighlightCard;
