import React, { useState, useEffect } from "react";
import "../styles/SearchBar.css";

function SearchBar({ setCity }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const API_KEY = "YOUR_OPENWEATHER_API_KEY";

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length < 2) {
        setSuggestions([]);
        return;
      }

      try {
        const response = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`
        );
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error("Error fetching city suggestions:", error);
      }
    };

    const debounce = setTimeout(() => {
      fetchSuggestions();
    }, 400); // debounce typing

    return () => clearTimeout(debounce);
  }, [query]);

  const handleSelect = (city) => {
    setCity(city.name);
    setQuery(city.name);
    setSuggestions([]);
  };

  return (
    <div className="search-bar position-relative mb-4">
      <input
        type="text"
        className="form-control my-3"
        placeholder="Search for cities"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {suggestions.length > 0 && (
        <ul className="list-group position-absolute w-100 z-index-10">
          {suggestions.map((city, index) => (
            <li
              key={index}
              className="list-group-item list-group-item-action"
              onClick={() => handleSelect(city)}
            >
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
