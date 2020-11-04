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

const WeeksContainer = ({
  weeks,
  clickHandler,
  selectedCardIndex,
}: {
  weeks: weekInfoType[];
  clickHandler: (index: number) => void;
  selectedCardIndex: number;
}) => {
  return (
    <section className={classes.weeks_container}>
      {weeks.map((week, index) => {
        return weekCardRenderer(week, index, clickHandler, selectedCardIndex);
      })}
    </section>
  );
};

function weekCardRenderer(
  week: weekInfoType,
  index: number,
  clickHandler: (index: number) => void,
  selectedCardIndex: number
): JSX.Element {
  return conditionalRenderer({
    condition: !!week.weekDay && !!week.logoTag && week.hasOwnProperty("temp"),
    successContent: () => (
      <WeekCard
        key={index}
        day={week.weekDay || ""}
        imgSrc={`http://openweathermap.org/img/wn/${week.logoTag}@2x.png`}
        temp={week.temp || 0}
        index={index}
        clickHandler={clickHandler}
        selected={index === selectedCardIndex}
      />
    ),
    failurePlaceholder: () => <WeekCardSkeleton />,
  });
}

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
