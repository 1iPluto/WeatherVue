const Utils = {
    formatTemperature: (temp) => {
        const unit = CONFIG.UNITS === 'metric' ? '°C' : '°F';
        return `${Math.round(temp)}${unit}`;
    },
    formatWindSpeed: (speed) => {
        const unit = CONFIG.UNITS === 'metric' ? 'km/h' : 'mph';
        const convertedSpeed = CONFIG.UNITS === 'metric' ? speed * 3.6 : speed;
        return `${Math.round(convertedSpeed)} ${unit}`;
    },
    formatVisibility: (visibility) => {
        if (CONFIG.UNITS === 'metric') {
            return `${(visibility / 1000).toFixed(1)} km`;
        } else {
            return `${(visibility / 1609.34).toFixed(1)} mi`;
        }
    },
    formatTime: (timestamp, timezone) => {
        const date = new Date((timestamp + timezone) * 1000);
        const hours = date.getUTCHours().toString().padStart(2, '0');
        const minutes = date.getUTCMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    },
    formatDateTime: (timezone) => {
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        
        const date = new Date();
        const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
        const localTime = new Date(utc + (1000 * timezone));
        
        return localTime.toLocaleDateString('en-US', options);
    },
    getIconUrl: (iconCode) => {
        return `${CONFIG.ICON_URL}${iconCode}@2x.png`;
    },
    saveRecentSearches: (searches) => {
        localStorage.setItem(
            CONFIG.STORAGE_KEYS.RECENT_SEARCHES, 
            JSON.stringify(searches)
        );
    },
    getRecentSearches: () => {
        const searches = localStorage.getItem(CONFIG.STORAGE_KEYS.RECENT_SEARCHES);
        return searches ? JSON.parse(searches) : [];
    },
    addToRecentSearches: (city) => {
        const recentSearches = Utils.getRecentSearches();
        
        const filteredSearches = recentSearches.filter(
            search => search.toLowerCase() !== city.toLowerCase()
        );
        
        filteredSearches.unshift(city);
        
        const limitedSearches = filteredSearches.slice(0, CONFIG.MAX_RECENT_SEARCHES);
        
        Utils.saveRecentSearches(limitedSearches);
        
        return limitedSearches;
    },
    saveThemePreference: (theme) => {
        localStorage.setItem(CONFIG.STORAGE_KEYS.THEME, theme);
    },
    getThemePreference: () => {
        return localStorage.getItem(CONFIG.STORAGE_KEYS.THEME) || 'light';
    },
    prefersDarkMode: () => {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    },
    debounce: (func, delay) => {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }
}; 