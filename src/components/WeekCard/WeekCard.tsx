import React from "react";
import { connect } from "react-redux";
import { selectors } from "../../store/reducers";

import BaseSkeleton from "../../skeletons/BaseSkeleton/BaseSkeleton";

import classes from "./WeekCard.module.scss";

type propsType = {
  day: string;
  imgSrc: string;
  temp: number;
  isWeatherLoading: boolean;
};

const WeekCard = ({ day, imgSrc, temp, isWeatherLoading }: propsType) => {
  return (
    <>
      {isWeatherLoading && (
        <article className={`${classes.week_card} ${classes.skeleton}`}>
          <BaseSkeleton type="rectangle" size="small" />
          <BaseSkeleton type="square" size="small" />
          <BaseSkeleton type="rectangle" size="small" />
        </article>
      )}

      {!isWeatherLoading && (
        <article className={classes.week_card}>
          <p>{day}</p>
          <img src={imgSrc} alt="icon" />
          <p>{temp}&#176;</p>
        </article>
      )}
    </>
  );
};

function mapStateToProps(state: any) {
  return {
    isWeatherLoading: selectors.isWeatherLoading(state),
  };
}

export default connect(mapStateToProps)(WeekCard);
