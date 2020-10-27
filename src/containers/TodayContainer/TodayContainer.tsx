import React from "react";

import classes from "./TodayContainer.module.scss";
import HighlightCard from "../../components/HighlightCard/HighlightCard";

const TodayContainer = () => {
  return (
    <section className={classes.today_container}>
      <h2>Today's Highlights</h2>
      <div className={classes.today_grid}>
        <HighlightCard
          title="Wind Status"
          primaryInfo="7.70 km/h"
          secondaryInfo="WSW"
        />
        <HighlightCard
          title="Wind Status"
          primaryInfo="7.70 km/h"
          secondaryInfo="WSW"
        />
        <HighlightCard
          title="Wind Status"
          primaryInfo="7.70 km/h"
          secondaryInfo="WSW"
        />
        <HighlightCard
          title="Wind Status"
          primaryInfo="7.70 km/h"
          secondaryInfo="WSW"
        />
        <HighlightCard
          title="Wind Status"
          primaryInfo="7.70 km/h"
          secondaryInfo="WSW"
        />
        <HighlightCard
          title="Wind Status"
          primaryInfo="7.70 km/h"
          secondaryInfo="WSW"
        />
      </div>
    </section>
  );
};

export default TodayContainer;
