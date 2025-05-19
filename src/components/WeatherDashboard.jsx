import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import WeatherOverview from "./WeatherOverview";
import TodayForecast from "./TodayForecast";
import WeeklyForecast from "./WeeklyForecast";
import "../styles/WeatherDashboard.css";
import Footer from "./Footer";

const API_KEY = "YOUR_OPENWEATHER_API_KEY";

function WeatherDashboard() {
  const [city, setCity] = useState("Colombo");
  const [weatherData, setWeatherData] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const fetchWeather = async (city) => {
    try {
      // fetch both endpoints at once
      const [forecastRes, currentRes] = await Promise.all([
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
        ),
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        ),
      ]);

      const forecastData = await forecastRes.json();
      const currentData = await currentRes.json();

      if (forecastData.cod !== "200") throw new Error(forecastData.message);
      if (currentData.cod !== 200) throw new Error(currentData.message);

      setWeatherData(forecastData);
      setCurrentWeather(currentData);
    } catch (err) {
      console.error("Weather fetch error:", err);
    }
  };

  return (
    <div className="weather-dashboard container-fluid text-white vh-100 d-flex flex-column p-3">
      <div className="row flex-grow-1">
        {/* Left Column: SearchBar, WeatherOverview, HourlyForecast */}
        <div className="col-md-8 d-flex flex-column">
          <SearchBar setCity={setCity} />
          {!weatherData || !currentWeather ? (
            <p>Loading weather data...</p>
          ) : (
            <>
              <WeatherOverview weatherData={currentWeather} />
              <TodayForecast forecast={weatherData.list.slice(0, 6)} />
            </>
          )}
        </div>

        {/* Right Column: WeeklyForecast */}
        <div className="col-md-4 overflow-auto">
          {!weatherData ? (
            <p>Loading weather data...</p>
          ) : (
            <WeeklyForecast forecast={weatherData.list} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WeatherDashboard;
