import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, connect } from "react-redux";

import classes from "./SideContainer.module.scss";
import WeatherActions from "../../store/weather/action";
import { selectors } from "../../store/reducers";
import BaseSkeleton from "../../skeletons/BaseSkeleton/BaseSkeleton";

import { conditionalRenderer } from "../utils";

const SideContainer = ({
  cityDetails,
  weatherToday,
}: {
  cityDetails: any;
  weatherToday: any;
}) => {
  const cityNameRef = useRef<HTMLHeadingElement>(null);

  const adaptCityName = () => {
    // shrink or expand the text if too big or small
    if (!!cityNameRef && !!cityNameRef.current) {
      const textWidth = parseFloat(
        getComputedStyle(cityNameRef.current as Element).width
      );
      const containerWidth = (() => {
        const computedStyle = getComputedStyle(
          cityNameRef.current?.parentElement?.parentElement as Element
        );
        const width = parseFloat(computedStyle.width);
        const leftPadding = parseFloat(computedStyle.paddingLeft);
        const rightPadding = parseFloat(computedStyle.paddingRight);
        return width - leftPadding - rightPadding;
      })();

      const defaultRemSize: string = classes.cityNameDefaultRemSize;
      cityNameRef.current.style.fontSize = defaultRemSize;

      if (textWidth > containerWidth) {
        console.log("too big");
        console.log("container: ", containerWidth);
        console.log("text: " + textWidth);
        // debugger;
        const shrinkedFontSize =
          (containerWidth / textWidth) * parseFloat(defaultRemSize);
        console.log("shrinked font size: " + shrinkedFontSize);
        cityNameRef.current.style.fontSize = `${shrinkedFontSize}rem`;
      }
    }
  };

  useEffect(() => {
    console.log("rerender");
    adaptCityName();
  });

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    console.log(data);
    return dispatch(WeatherActions.fetchWeather(data.city, "metric"));
  };

  return (
    <div className={classes.sidebar}>
      <section className={classes.search}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="city"
            type="text"
            placeholder="Search for places ..."
            ref={register({ required: true, minLength: 1 })}
          />
          {/* {errors.city && <p>Enter a valid city</p>} */}
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </section>

      <section className={classes.main}>
        {conditionalRenderer({
          condition:
            !!weatherToday &&
            !!weatherToday.weather &&
            !!weatherToday.weather[0].icon,
          successContent: () => (
            <img
              src={`http://openweathermap.org/img/wn/${weatherToday.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
          ),
          failurePlaceholder: () => <BaseSkeleton type="square" size="big" />,
        })}

        <div className={classes.metrics}>
          {conditionalRenderer({
            condition:
              !!weatherToday &&
              weatherToday.hasOwnProperty("temp") &&
              !!weatherToday.temp.hasOwnProperty("day"),
            successContent: () => (
              <div className={classes.temp}>
                {Math.round(weatherToday.temp.day)}&#176;C
              </div>
            ),
            failurePlaceholder: () => <BaseSkeleton type="square" size="big" />,
          })}

          {conditionalRenderer({
            condition:
              !!weatherToday &&
              !!weatherToday.weather &&
              !!weatherToday.weather[0].description,
            successContent: () => <p>{weatherToday.weather[0].description}</p>,
            failurePlaceholder: () => (
              <BaseSkeleton type="rectangle" size="big" />
            ),
          })}
        </div>
      </section>

      <section className={classes.cityPart}>
        {conditionalRenderer({
          condition: !!cityDetails && !!cityDetails.name,
          successContent: () => <h2 ref={cityNameRef}>{cityDetails.name}</h2>,
          failurePlaceholder: () => (
            <BaseSkeleton type="rectangle" size="big" />
          ),
        })}

        {conditionalRenderer({
          condition: !!weatherToday && !!weatherToday.dt,
          successContent: () => (
            <div className={classes.datetime}>
              <p>
                {Intl.DateTimeFormat(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  weekday: "short",
                }).format(new Date(weatherToday.dt * 1000))}
              </p>
            </div>
          ),
          failurePlaceholder: () => (
            <BaseSkeleton type="rectangle" size="big" />
          ),
        })}
      </section>
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    cityDetails: selectors.cityDetails(state),
    weatherToday: selectors.weatherToday(state),
  };
}

export default connect(mapStateToProps)(SideContainer);
