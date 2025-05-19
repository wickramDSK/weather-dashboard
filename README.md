# Weather Dashboard

A modern, responsive weather dashboard built with React. Instantly view current weather, 15-hour interval forecasts, and 5-day predictions for any city worldwide.

## Features

- **City Search:** Find weather for any city with autocomplete suggestions.
- **Current Weather:** See temperature, conditions, humidity, and wind speed.
- **Today's Forecast:** Get weather predictions for 15 hours.
- **5-Day Forecast:** Extended outlook for the next 5 days.
- **Dynamic UI:** Weather-based themes and condition-specific styling.

## Screenshots

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [OpenWeather API](https://openweathermap.org/api)
- CSS3

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd weather-dashboard
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Add your OpenWeather API key:**

   - Open `src/components/WeatherDashboard.jsx` and `src/components/SearchBar.jsx`
   - Replace the placeholder with your API key:

     ```js
     const API_KEY = "YOUR_OPENWEATHER_API_KEY";
     ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
weather-dashboard/
├── public/
│   └── preview.png
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── SearchBar.jsx
│   │   ├── TodayForecast.jsx
│   │   ├── WeatherDashboard.jsx
│   │   ├── WeatherOverview.jsx
│   │   └── WeeklyForecast.jsx
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## API Integration

- Sign up at [OpenWeather](https://openweathermap.org/api) to get your API key.
- Replace the API key in the relevant files as described above.

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Push to your branch: `git push origin feature/your-feature`
5. Submit a pull request

## Contact

Created by [@wickramDSK](https://github.com/wickramDSK)

## Acknowledgments

- Weather data from [OpenWeather API](https://openweathermap.org/api)
- Icons from OpenWeather
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)
- UI powered by [Bootstrap](https://getbootstrap.com/)
