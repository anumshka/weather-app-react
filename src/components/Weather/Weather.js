import React, { useState } from "react";
import classes from "./Weather.module.css";

const Weather = (props) => {
  //console.log(props.query);

  console.log(props.weather);

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof props.weather.main != "undefined"
          ? props.weather.main.temp > 16
            ? "app warm"
            : "app"
          : "start"
      }
    >
      <main>
        {typeof props.weather.main != "undefined" ? (
          <div className={classes.box}>
            <div className={classes.locationBox}>
              <div className={classes.location}>
                {props.weather.name}, {props.weather.sys.country}
              </div>
              <div className={classes.date}>{dateBuilder(new Date())}</div>
            </div>
            <div classname={classes.weatherBox}>
              <div className={classes.temp}>
                {Math.round(props.weather.main.temp)}°c
              </div>
              <div className={classes.weather}>
                {props.weather.weather[0].main}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
};

export default Weather;
