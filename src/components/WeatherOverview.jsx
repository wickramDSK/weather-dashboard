import React from "react";
import "../styles/WeatherOverview.css";

function WeatherOverview({ weatherData }) {
  const windSpeedKmh = (weatherData.wind.speed * 3.6).toFixed(1); // convert to km/h
  const condition = weatherData.weather[0].main;

  const getWeatherEmoji = (condition) => {
    switch (condition.toLowerCase()) {
      case "clear":
        return "☀️";
      case "clouds":
        return "☁️";
      case "rain":
        return "🌧️";
      case "thunderstorm":
        return "⛈️";
      case "snow":
        return "❄️";
      case "mist":
      case "fog":
        return "🌫️";
      case "drizzle":
        return "🌦️";
      default:
        return "🌈";
    }
  };

  const now = new Date();
  const dayName = now.toLocaleDateString(undefined, { weekday: "long" });
  const dateStr = now.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const timeStr = now.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

 return (
    <div className="weather-overview p-4 rounded shadow-sm mb-4 d-flex justify-content-between align-items-start flex-wrap">
      <div className="weather-left">
        <h1 className="city-name">{weatherData.name}</h1>
        <div className="d-flex align-items-center gap-3">
          <h2 className="temperature">{Math.round(weatherData.main.temp)}°C</h2>
          <span className="weather-emoji">{getWeatherEmoji(condition)}</span>
        </div>
        <span className={`condition-badge ${condition.toLowerCase()}`}>
          {getWeatherEmoji(condition)} {condition}
        </span>
        <div className="weather-metrics d-flex gap-2 flex-wrap mt-2">
          <span className="metric-badge humidity-badge">
            💧 Humidity: {weatherData.main.humidity}%
          </span>
          <span className="metric-badge wind-badge">
            💨 Wind: {windSpeedKmh} km/h
          </span>
        </div>
      </div>

      {/* Right-aligned date & time */}
      <div className="weather-date-time text-end text-light mt-2 ms-auto">
        <div className="fs fw-semibold">{timeStr}</div>
        <div className="small">{dateStr}</div>
        <div className="small">{dayName}</div>
      </div>
    </div>
  );
}
export default WeatherOverview;
