import React, { useContext } from "react";
import WeatherContext from "../context/weather.context";

function Place() {
  const { place } = useContext(WeatherContext);
  return (
    <div className="Place">
      <i class="bi bi-geo-alt-fill"></i> <strong>{place.name}</strong>,{" "}
      {place.country}
    </div>
  );
}

export default Place;
