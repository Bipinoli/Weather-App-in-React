import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, connect } from "react-redux";

import classes from "./SideContainer.module.scss";
import WeatherActions from "../../store/weather/action";
import { selectors } from "../../store/reducers";
import BaseSkeleton from "../../skeletons/BaseSkeleton/BaseSkeleton";

const SideContainer = ({ cityDetails }: { cityDetails: any }) => {
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
        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
        <div className={classes.metrics}>
          <div className={classes.temp}>12&#176;C</div>
          <p>Mostly Cloudy</p>
        </div>
      </section>

      <section className={classes.cityPart}>
        {!cityDetails && <BaseSkeleton type="rectangle" size="big" />}
        {!!cityDetails && <h2 ref={cityNameRef}>{cityDetails.name}</h2>}
        <div className={classes.datetime}>
          Monday, <span className={classes.time}>16:00</span>
        </div>
      </section>
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    cityDetails: selectors.cityDetails(state),
  };
}

export default connect(mapStateToProps)(SideContainer);
