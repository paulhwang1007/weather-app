import React from "react";
import "../styles/components/Main.scss";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import WeatherContext from "../context/weather.context";
import { useContext } from "react";
import Loader from "./Loader";

function Main() {
  const { loading, currentWeather, dailyForecast, hourlyForecast } =
    useContext(WeatherContext);

  return (
    <div className="Main">
      {loading ? (
        <Loader />
      ) : (
        <>
          <CurrentWeather data={currentWeather} />
          <Forecast
            type="hourly"
            title="HOURLY FORECAST"
            data={hourlyForecast}
          />
          <Forecast
            type="daily"
            title="21 DAYS FORECAST"
            data={dailyForecast}
          />
        </>
      )}
    </div>
  );
}

export default Main;
