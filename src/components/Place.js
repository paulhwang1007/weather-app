import React, { useContext } from "react";
import WeatherContext from "../context/weather.context";

function Place() {
  const { place } = useContext(WeatherContext);
  return (
    <div className="Place">
      <i className="bi bi-geo-alt-fill"></i> <strong>{place.name}</strong>,{" "}
      {place.country}
    </div>
  );
}

export default Place;
