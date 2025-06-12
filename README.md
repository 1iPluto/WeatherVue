# ☁️ WeatherVue

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/OpenWeatherMap-API-orange?style=for-the-badge" alt="OpenWeatherMap API">
  <br>
  <a href="https://github.com/1iPluto/WeatherVue"><img src="https://img.shields.io/github/stars/1iPluto/WeatherVue?style=social" alt="GitHub stars"></a>
</div>

<p align="center">
  A modern, responsive weather application built with vanilla JavaScript that provides real-time weather information for any city worldwide.
</p>

<div align="center">
  <a href="https://1ipluto.github.io/WeatherVue/" target="_blank">
    <img src="https://img.shields.io/badge/View_Demo-Live_Site-blue?style=for-the-badge" alt="View Demo">
  </a>
</div>

## ✨ Features

- **🌍 Real-time Weather Data** - Current conditions for any city worldwide
- **📱 Responsive Design** - Optimized for all devices from mobile to desktop
- **🌓 Dark/Light Mode** - Toggle between themes with system preference detection
- **📍 Geolocation Support** - Automatically detect user's location weather
- **🕒 Recent Searches** - Quick access to previously searched cities
- **⏰ Local Time Display** - Shows the local time of the searched city

## 📊 Detailed Weather Information

- Temperature with "feels like" reading
- Weather description with icons
- Humidity and wind speed
- Atmospheric pressure
- Visibility
- Sunrise and sunset times

## 🛠️ Built With

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with variables, flexbox, and grid
- **JavaScript** - ES6+ features, no frameworks
- **OpenWeatherMap API** - Weather data source
- **Local Storage API** - Saving preferences and search history
- **Geolocation API** - Location detection

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/1iPluto/WeatherVue.git
   ```

2. Navigate to the project directory:
   ```bash
   cd WeatherVue
   ```

3. Open `js/config.js` and replace the API key:
   ```javascript
   API_KEY: 'YOUR_OPENWEATHERMAP_API_KEY'
   ```

4. Open `index.html` in your browser or use a local server

## 🔑 API Key

This application uses the OpenWeatherMap API:

1. Sign up at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up)
2. Generate an API key
3. Replace the placeholder in `js/config.js`

## 📂 Project Structure

```
WeatherVue/
├── index.html              # Main HTML file
├── css/
│   ├── normalize.css       # CSS reset
│   └── styles.css          # Custom styles
├── js/
│   ├── config.js           # Configuration and API keys
│   ├── utils.js            # Utility functions
│   ├── api.js              # API service
│   ├── ui.js               # UI handling
│   └── app.js              # Main application logic
└── assets/
    └── favicon.png         # Application favicon
```

## 🔮 Future Enhancements

- 5-day weather forecast
- Weather maps integration
- Multiple unit system options
- Weather alerts and notifications
- Air quality and UV index data

## 📄 License

MIT License - Feel free to use, modify, and distribute this code.

## 👤 Author

**Marwan Saeed**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/marwan-saeed-73a557224)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/1iPluto)