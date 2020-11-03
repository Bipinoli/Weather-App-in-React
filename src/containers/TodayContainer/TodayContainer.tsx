import React from "react";
import { connect } from "react-redux";

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
  return (
    <section className={classes.today_container}>
      {hideHeader ? "" : renderHighlightHeading(selectedWeekCardIndex, weeks)}
      {hideHeader
        ? renderHighlightCards(weatherToday)
        : renderHighlightCards(
            (weeks && weeks[selectedWeekCardIndex]) || weatherToday
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

function renderHighlightCards(weather: any): JSX.Element {
  return (
    <div className={classes.today_grid}>
      {conditionalRenderer({
        condition: !!weather && !!weather.temp && !!weather.temp.day,
        successContent: () => (
          <HighlightCard
            title="Temperature"
            primaryInfo={`${Math.round(weather?.temp?.day)}° C`}
            secondaryInfo={`${Math.round(
              weather?.temp?.min
            )}° C to ${Math.round(weather?.temp?.max)}° C`}
          />
        ),
        failurePlaceholder: () => <HighlightCardSkeleton />,
      })}

      {conditionalRenderer({
        condition:
          !!weather &&
          !!weather.sunrise &&
          !!weather.temp &&
          !!weather.temp.morn,
        successContent: () => (
          <HighlightCard
            title="Sunrise"
            primaryInfo={`${
              weather && weather.sunrise && formatTime(weather?.sunrise)
            }`}
            secondaryInfo={`morning: ${Math.round(weather?.temp?.morn)}° C`}
          />
        ),
        failurePlaceholder: () => <HighlightCardSkeleton />,
      })}

      {conditionalRenderer({
        condition:
          !!weather && !!weather.sunset && !!weather.temp && !!weather.temp.eve,
        successContent: () => (
          <HighlightCard
            title="Sunset"
            primaryInfo={`${
              weather && weather.sunset && formatTime(weather?.sunset)
            }`}
            secondaryInfo={`evening: ${Math.round(weather?.temp?.eve)}° C`}
          />
        ),
        failurePlaceholder: () => <HighlightCardSkeleton />,
      })}

      {conditionalRenderer({
        condition: !!weather && !!weather.pressure,
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
        condition: !!weather && !!weather.humidity,
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
        condition: !!weather && !!weather.pop,
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
        condition: !!weather && !!weather.speed && !!weather.deg,
        successContent: () => (
          <HighlightCard
            title="Wind Status"
            primaryInfo={`${weather?.speed} m/s`}
            secondaryInfo={`${weather?.deg} degrees`}
          />
        ),
        failurePlaceholder: () => <HighlightCardSkeleton />,
      })}

      {conditionalRenderer({
        condition: !!weather && !!weather.clouds,
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
