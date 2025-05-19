import React from "react";
import "../styles/TodayForecast.css";

function TodayForecast({ forecast }) {
  const formatTime = (dt_txt) => {
    const date = new Date(dt_txt);
    return `${date.getHours()}:00`;
  };

 const now = new Date();

  return (
    <div className="hourly-forecast mt-4 p-3 rounded shadow-sm">
      <h5 className="mb-3">Today's Forecast</h5>
      <div className="forecast-row">
        {forecast.map((item, index) => (
          <div key={index} className="forecast-item text-center">
            <div className="forecast-time">{formatTime(item.dt_txt)}</div>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
              className="forecast-icon"
            />
            <div className="forecast-temp">{Math.round(item.main.temp)}°C</div>
            <div className="forecast-main text-capitalize text-white">
              {item.weather[0].main}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodayForecast;
