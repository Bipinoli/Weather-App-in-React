import React from "react";
import classes from "./BaseSkeleton.module.scss";

const BaseSkeleton = ({
  type,
  size = "small",
}: {
  type: "square" | "rectangle";
  size: "big" | "small";
}) => {
  let styleClass = classes.skeleton;
  styleClass +=
    type === "square" ? ` ${classes.square}` : ` ${classes.rectangle}`;
  styleClass += size === "big" ? ` ${classes.big}` : ` ${classes.small}`;

  return (
    <div className={styleClass}>
      <div className={classes.shimmer}></div>
    </div>
  );
};

export default BaseSkeleton;
