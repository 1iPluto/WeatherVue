const App = {
    init: () => {
        UI.init();
        App.setupEventListeners();
        App.tryGetLocationWeather();
    },
    setupEventListeners: () => {
        UI.elements.searchBtn.addEventListener('click', () => {
            const city = UI.elements.cityInput.value.trim();
            if (city) {
                App.searchWeather(city);
            }
        });
        
        UI.elements.cityInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                const city = UI.elements.cityInput.value.trim();
                if (city) {
                    App.searchWeather(city);
                }
            }
        });
        
        UI.elements.themeToggleBtn.addEventListener('click', UI.toggleTheme);
    },
    searchWeather: async (city) => {
        try {
            UI.showLoading();
            const data = await WeatherAPI.getWeatherByCity(city);
            UI.displayWeather(data);
        } catch (error) {
            console.error('Error searching weather:', error);
            UI.showError('City not found. Please try another city.');
        }
    },
    tryGetLocationWeather: async () => {
        try {
            const coords = await WeatherAPI.getCurrentLocation();
            UI.showLoading();
            const data = await WeatherAPI.getWeatherByCoords(coords.lat, coords.lon);
            UI.displayWeather(data);
        } catch (error) {
            console.log('Could not get location weather:', error);
        }
    }
};
document.addEventListener('DOMContentLoaded', App.init); 