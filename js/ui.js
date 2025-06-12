const UI = {
    elements: {
        cityInput: document.getElementById('city-input'),
        searchBtn: document.getElementById('search-btn'),
        recentSearches: document.getElementById('recent-searches'),
        weatherCard: document.getElementById('weather-card'),
        loadingIndicator: document.getElementById('loading-indicator'),
        errorContainer: document.getElementById('error-container'),
        errorMessage: document.getElementById('error-message'),
        initialState: document.getElementById('initial-state'),
        themeToggleBtn: document.getElementById('theme-toggle-btn'),
        city: document.getElementById('city'),
        dateTime: document.getElementById('date-time'),
        weatherIcon: document.getElementById('weather-icon'),
        temperature: document.getElementById('temperature'),
        feelsLike: document.getElementById('feels-like'),
        description: document.getElementById('description'),
        humidity: document.getElementById('humidity'),
        windSpeed: document.getElementById('wind-speed'),
        pressure: document.getElementById('pressure'),
        visibility: document.getElementById('visibility'),
        sunrise: document.getElementById('sunrise'),
        sunset: document.getElementById('sunset')
    },
    init: () => {
        UI.initTheme();
        UI.loadRecentSearches();
    },
    initTheme: () => {
        const savedTheme = Utils.getThemePreference();
        const systemPrefersDark = Utils.prefersDarkMode();
        if (savedTheme === 'dark' || (savedTheme === null && systemPrefersDark)) {
            document.documentElement.setAttribute('data-theme', 'dark');
            UI.elements.themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            UI.elements.themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    },
    toggleTheme: () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Update theme attribute
        document.documentElement.setAttribute('data-theme', newTheme);
        
        // Update button icon
        UI.elements.themeToggleBtn.innerHTML = newTheme === 'light' 
            ? '<i class="fas fa-moon"></i>' 
            : '<i class="fas fa-sun"></i>';
        
        // Save preference
        Utils.saveThemePreference(newTheme);
    },
    
    /**
     * Load recent searches from local storage and display them
     */
    loadRecentSearches: () => {
        const recentSearches = Utils.getRecentSearches();
        UI.displayRecentSearches(recentSearches);
    },
    
    /**
     * Display recent searches in the UI
     * @param {Array} searches - Array of recent searches
     */
    displayRecentSearches: (searches) => {
        UI.elements.recentSearches.innerHTML = '';
        
        if (searches.length === 0) {
            return;
        }
        
        searches.forEach(city => {
            const searchItem = document.createElement('div');
            searchItem.className = 'recent-search-item';
            searchItem.textContent = city;
            searchItem.addEventListener('click', () => {
                UI.elements.cityInput.value = city;
                App.searchWeather(city);
            });
            
            UI.elements.recentSearches.appendChild(searchItem);
        });
    },
    
    /**
     * Show loading indicator
     */
    showLoading: () => {
        UI.elements.initialState.classList.add('hidden');
        UI.elements.weatherCard.classList.add('hidden');
        UI.elements.errorContainer.classList.add('hidden');
        UI.elements.loadingIndicator.classList.remove('hidden');
    },
    
    /**
     * Hide loading indicator
     */
    hideLoading: () => {
        UI.elements.loadingIndicator.classList.add('hidden');
    },
    
    /**
     * Show error message
     * @param {string} message - Error message
     */
    showError: (message) => {
        UI.hideLoading();
        UI.elements.initialState.classList.add('hidden');
        UI.elements.weatherCard.classList.add('hidden');
        UI.elements.errorMessage.textContent = message;
        UI.elements.errorContainer.classList.remove('hidden');
    },
    
    /**
     * Display weather data in the UI
     * @param {Object} data - Weather data
     */
    displayWeather: (data) => {
        UI.hideLoading();
        UI.elements.initialState.classList.add('hidden');
        UI.elements.errorContainer.classList.add('hidden');
        
        // Update city name
        UI.elements.city.textContent = `${data.name}, ${data.sys.country}`;
        
        // Update date and time
        UI.elements.dateTime.textContent = Utils.formatDateTime(data.timezone);
        
        // Update weather icon
        const iconCode = data.weather[0].icon;
        UI.elements.weatherIcon.src = Utils.getIconUrl(iconCode);
        UI.elements.weatherIcon.alt = data.weather[0].description;
        
        // Update temperature
        UI.elements.temperature.textContent = Utils.formatTemperature(data.main.temp);
        UI.elements.feelsLike.textContent = `Feels like: ${Utils.formatTemperature(data.main.feels_like)}`;
        
        // Update weather description
        UI.elements.description.textContent = data.weather[0].description;
        
        // Update additional info
        UI.elements.humidity.textContent = `${data.main.humidity}%`;
        UI.elements.windSpeed.textContent = Utils.formatWindSpeed(data.wind.speed);
        UI.elements.pressure.textContent = `${data.main.pressure} hPa`;
        UI.elements.visibility.textContent = Utils.formatVisibility(data.visibility);
        
        // Update sunrise and sunset times
        UI.elements.sunrise.textContent = Utils.formatTime(data.sys.sunrise, data.timezone);
        UI.elements.sunset.textContent = Utils.formatTime(data.sys.sunset, data.timezone);
        
        // Show weather card
        UI.elements.weatherCard.classList.remove('hidden');
        
        // Add to recent searches
        const updatedSearches = Utils.addToRecentSearches(data.name);
        UI.displayRecentSearches(updatedSearches);
    }
}; 