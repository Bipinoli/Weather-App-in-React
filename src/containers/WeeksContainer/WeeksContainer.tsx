import React from "react";
import { connect } from "react-redux";

import classes from "./WeeksContainer.module.scss";
import WeekCard from "../../components/WeekCard/WeekCard";
import WeekCardSkeleton from "../../skeletons/WeekCardSkeleton/WeekCardSkeleton";
import { selectors } from "../../store/reducers";
import { conditionalRenderer } from "../utils";

type weekInfoType = {
  weekDay?: string;
  logoTag?: string;
  temp?: number;
};

function weekCardRenderer(week: weekInfoType): JSX.Element {
  return conditionalRenderer({
    condition: !!week.weekDay && !!week.logoTag && !!week.temp,
    successContent: () => (
      <WeekCard
        day={week.weekDay || ""}
        imgSrc={`http://openweathermap.org/img/wn/${week.logoTag}@2x.png`}
        temp={week.temp || 0}
      />
    ),
    failurePlaceholder: () => <WeekCardSkeleton />,
  });
}

const WeeksContainer = ({ weeks }: { weeks: weekInfoType[] }) => {
  return (
    <section className={classes.weeks_container}>
      {weeks.map((week) => {
        return weekCardRenderer(week);
      })}
    </section>
  );
};

function mapStateToProps(state: any) {
  return {
    weeks: ((): weekInfoType[] => {
      //@ts-ignore
      return [...Array(7).keys()].map((index: number) => {
        let weather = selectors.futureWeather(index, state);
        return {
          weekDay:
            weather?.dt &&
            Intl.DateTimeFormat(undefined, {
              weekday: "short",
            }).format(new Date(weather.dt * 1000)),
          logoTag: !!weather && !!weather.weather && weather.weather[0]?.icon,
          temp: weather?.temp?.day,
        };
      });
    })(),
  };
}

export default connect(mapStateToProps)(WeeksContainer);
