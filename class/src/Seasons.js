import "./Seasons.css";
import React from "react";

const Seasonconfig = {
  summer: {
    text: "Beach time",
    iconName: "sun",
  },
  winter: {
    text: "It is chilly",
    iconName: "snowflake",
  },
};
const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude > 0 ? "winter" : "summer";
  }
};

const Seasons = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const { text, iconName } = Seasonconfig[season];
  return (
    <div className={`seasons-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default Seasons;
