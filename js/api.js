const WeatherAPI = {
    getWeatherByCity: async (city) => {
        try {
            const url = `${CONFIG.BASE_URL}/weather?q=${encodeURIComponent(city)}&units=${CONFIG.UNITS}&appid=${CONFIG.API_KEY}`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Error fetching weather data:', error);
            throw error;
        }
    },
    getWeatherByCoords: async (lat, lon) => {
        try {
            const url = `${CONFIG.BASE_URL}/weather?lat=${lat}&lon=${lon}&units=${CONFIG.UNITS}&appid=${CONFIG.API_KEY}`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Error fetching weather data:', error);
            throw error;
        }
    },
    getCurrentLocation: () => {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error('Geolocation is not supported by your browser'));
                return;
            }
            
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude
                    });
                },
                (error) => {
                    reject(error);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                }
            );
        });
    }
}; 