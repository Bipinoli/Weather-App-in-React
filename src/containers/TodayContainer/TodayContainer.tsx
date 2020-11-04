import React from "react";
import { connect, useSelector } from "react-redux";

import classes from "./TodayContainer.module.scss";
import HighlightCard from "../../components/HighlightCard/HighlightCard";
import HighlightCardSkeleton from "../../skeletons/HighlightCardSkeleton/HighlightCardSkeleton";
import { conditionalRenderer } from "../utils";

import { selectors } from "../../store/reducers";

type propsType = {
  hideHeader: boolean;
  weatherToday?: any;
  weeks?: any[];
  selectedWeekCardIndex?: number;
};

const TodayContainer = ({
  hideHeader,
  weatherToday,
  weeks,
  selectedWeekCardIndex = 0,
}: propsType) => {
  const unit = useSelector((state: any) => state.unit);

  return (
    <section className={classes.today_container}>
      {hideHeader ? "" : renderHighlightHeading(selectedWeekCardIndex, weeks)}
      {hideHeader
        ? renderHighlightCards(weatherToday, unit)
        : renderHighlightCards(
            (weeks && weeks[selectedWeekCardIndex]) || weatherToday,
            unit
          )}
    </section>
  );
};

function renderHighlightHeading(
  selectedWeekCardIndex: number,
  weeks: any
): JSX.Element {
  if (selectedWeekCardIndex === 0) return <h2>Today's Highlights</h2>;
  const date = new Date(weeks[selectedWeekCardIndex].dt * 1000);
  const weekDay = Intl.DateTimeFormat(undefined, {
    weekday: "long",
  }).format(date);
  return <h2>{weekDay}'s Highlights</h2>;
}

function renderHighlightCards(weather: any, unit: string): JSX.Element {
  const speed_unit = unit === "C" ? "meters/s" : "miles/s";
  return (
    <div className={classes.today_grid}>
      {conditionalRenderer({
        condition:
          !!weather &&
          weather.hasOwnProperty("temp") &&
          weather.temp.hasOwnProperty("day"),
        successContent: () => (
          <HighlightCard
            title="Temperature"
            primaryInfo={`${Math.round(weather?.temp?.day)}° ${unit}`}
            secondaryInfo={`${Math.round(
              weather?.temp?.min
            )}° ${unit} to ${Math.round(weather?.temp?.max)}° ${unit}`}
          />
        ),
        failurePlaceholder: () => <HighlightCardSkeleton />,
      })}

      {conditionalRenderer({
        condition:
          !!weather &&
          !!weather.sunrise &&
          weather.hasOwnProperty("temp") &&
          weather.temp.hasOwnProperty("morn"),
        successContent: () => (
          <HighlightCard
            title="Sunrise"
            primaryInfo={`${
              weather && weather.sunrise && formatTime(weather?.sunrise)
            }`}
            secondaryInfo={`morning: ${Math.round(
              weather?.temp?.morn
            )}° ${unit}`}
          />
        ),
        failurePlaceholder: () => <HighlightCardSkeleton />,
      })}

      {conditionalRenderer({
        condition:
          !!weather &&
          !!weather.sunset &&
          !!weather.hasOwnProperty("temp") &&
          weather.temp.hasOwnProperty("eve"),
        successContent: () => (
          <HighlightCard
            title="Sunset"
            primaryInfo={`${
              weather && weather.sunset && formatTime(weather?.sunset)
            }`}
            secondaryInfo={`evening: ${Math.round(weather?.temp?.eve)}°${unit}`}
          />
        ),
        failurePlaceholder: () => <HighlightCardSkeleton />,
      })}

      {conditionalRenderer({
        condition: !!weather && weather.hasOwnProperty("pressure"),
        successContent: () => (
          <HighlightCard
            title="Pressure"
            primaryInfo={`${weather?.pressure} hPa`}
            secondaryInfo="hectopascals"
          />
        ),
        failurePlaceholder: () => <HighlightCardSkeleton />,
      })}

      {conditionalRenderer({
        condition: !!weather && weather.hasOwnProperty("humidity"),
        successContent: () => (
          <HighlightCard
            title="Humidity"
            primaryInfo={`${weather?.humidity} %`}
            secondaryInfo="WSW"
          />
        ),
        failurePlaceholder: () => <HighlightCardSkeleton />,
      })}

      {conditionalRenderer({
        condition: !!weather && weather.hasOwnProperty("pop"),
        successContent: () => (
          <HighlightCard
            title="Precipitation"
            primaryInfo={`${weather?.pop * 100} %`}
            secondaryInfo="probability"
          />
        ),
        failurePlaceholder: () => <HighlightCardSkeleton />,
      })}

      {conditionalRenderer({
        condition:
          !!weather &&
          weather.hasOwnProperty("speed") &&
          weather.hasOwnProperty("deg"),
        successContent: () => (
          <HighlightCard
            title="Wind Status"
            primaryInfo={`${weather?.speed} ${speed_unit}`}
            secondaryInfo={`${weather?.deg} degrees`}
          />
        ),
        failurePlaceholder: () => <HighlightCardSkeleton />,
      })}

      {conditionalRenderer({
        condition: !!weather && weather.hasOwnProperty("clouds"),
        successContent: () => (
          <HighlightCard
            title="Cloudiness"
            primaryInfo={`${weather?.clouds} %`}
            secondaryInfo="percentage"
          />
        ),
        failurePlaceholder: () => <HighlightCardSkeleton />,
      })}
    </div>
  );
}

function formatTime(timestamp: number): string {
  return Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "numeric",
  }).format(new Date(timestamp * 1000));
}

function mapStateToProps(state: any) {
  return {
    weatherToday: selectors.weatherToday(state),
    weeks: (() => {
      //@ts-ignore
      return [...Array(7).keys()].map((index: number) =>
        selectors.futureWeather(index, state)
      );
    })(),
  };
}

export default connect(mapStateToProps)(TodayContainer);
