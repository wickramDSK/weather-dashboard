import React from "react";
import "../styles/WeeklyForecast.css";

function WeeklyForecast({ forecast }) {
  // Helper to get weekday name from timestamp
  const getWeekday = (dt_txt) => {
    const date = new Date(dt_txt);
    return date.toLocaleDateString(undefined, { weekday: "long" });
  };

  return (
    <div className="weekly-forecast mt-4 p-3 rounded shadow-sm">
      <h5 className="mb-4">5 - Day Forecast</h5>
      <div className="d-flex flex-column gap-4">
        {[...Array(7).keys()].map((day) => {
          const item = forecast[day * 8]; // 8 intervals per day

          if (!item || !item.main || !item.weather) return null;

          const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

          return (
            <div
              key={day}
              className="day-forecast d-flex align-items-center justify-content-between p-3 rounded"
              title={item.weather[0].description}
            >
              <div className="day-name fw-semibold">{getWeekday(item.dt_txt)}</div>

              <img
                src={iconUrl}
                alt={item.weather[0].description}
                className="weather-icon"
                width={50}
                height={50}
              />

              <div className="temp-info text-center">
                <span className="temp-high">{Math.round(item.main.temp_max)}°</span>
                <span className="temp-sep">/</span>
                <span className="temp-low">{Math.round(item.main.temp_min)}°</span>
              </div>

              <div className="weather-main text-capitalize">{item.weather[0].main}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WeeklyForecast;
