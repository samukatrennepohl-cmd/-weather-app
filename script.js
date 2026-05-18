const state = {
    weather: null,
    forecast: null,
    unit: 'C',
    lang: 'en',
    country: null,
    stateCode: null,
    lat: null,
    lon: null,
    cityName: null,
    alerts: null,
};

const wmoIcons = {
    0: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2220%22 fill=%22%23FFD700%22/%3E%3C/svg%3E" alt="Clear">',
    1: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2220%22 fill=%22%23FFD700%22/%3E%3Cpath d=%22M60 30 Q80 40 75 60 Q70 75 50 70%22 fill=%22%23ccc%22/%3E%3C/svg%3E" alt="Mainly Clear">',
    2: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ccircle cx=%2245%22 cy=%2245%22 r=%2218%22 fill=%22%23FFD700%22/%3E%3Cpath d=%22M55 30 Q75 35 72 55 Q68 70 50 68 Q35 72 30 55 Q25 40 40 32%22 fill=%22%23999%22/%3E%3C/svg%3E" alt="Partly Cloudy">',
    3: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M30 45 Q45 30 60 40 Q75 30 80 50 Q85 65 65 68 L35 68 Q20 65 20 50 Q18 40 30 45%22 fill=%22%23999%22/%3E%3C/svg%3E" alt="Overcast">',
    45: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M20 50 Q40 35 60 45 Q75 35 85 55%22 stroke=%22%23999%22 stroke-width=%228%22 fill=%22none%22 stroke-linecap=%22round%22 opacity=%220.5%22/%3E%3Cpath d=%22M15 60 Q35 45 55 55 Q70 45 80 65%22 stroke=%22%23999%22 stroke-width=%228%22 fill=%22none%22 stroke-linecap=%22round%22 opacity=%220.5%22/%3E%3C/svg%3E" alt="Foggy">',
    48: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M20 50 Q40 35 60 45 Q75 35 85 55%22 stroke=%22%23999%22 stroke-width=%228%22 fill=%22none%22 stroke-linecap=%22round%22 opacity=%220.5%22/%3E%3Cpath d=%22M15 60 Q35 45 55 55 Q70 45 80 65%22 stroke=%22%23999%22 stroke-width=%228%22 fill=%22none%22 stroke-linecap=%22round%22 opacity=%220.5%22/%3E%3C/svg%3E" alt="Fog">',
    51: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M30 40 Q50 30 65 40 Q80 30 85 50 Q88 65 65 68 L35 68 Q20 65 20 50%22 fill=%22%23999%22/%3E%3Cline x1=%2235%22 y1=%2275%22 x2=%2235%22 y2=%2285%22 stroke=%22%2369f%22 stroke-width=%222%22/%3E%3C/svg%3E" alt="Light Drizzle">',
    53: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M30 40 Q50 30 65 40 Q80 30 85 50 Q88 65 65 68 L35 68 Q20 65 20 50%22 fill=%22%23999%22/%3E%3Cline x1=%2230%22 y1=%2275%22 x2=%2230%22 y2=%2285%22 stroke=%22%2369f%22 stroke-width=%223%22/%3E%3Cline x1=%2240%22 y1=%2275%22 x2=%2240%22 y2=%2285%22 stroke=%22%2369f%22 stroke-width=%223%22/%3E%3C/svg%3E" alt="Moderate Drizzle">',
    55: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M30 40 Q50 30 65 40 Q80 30 85 50 Q88 65 65 68 L35 68 Q20 65 20 50%22 fill=%22%23999%22/%3E%3Cline x1=%2230%22 y1=%2275%22 x2=%2230%22 y2=%2288%22 stroke=%22%2339a%22 stroke-width=%223%22/%3E%3Cline x1=%2240%22 y1=%2275%22 x2=%2240%22 y2=%2288%22 stroke=%22%2339a%22 stroke-width=%223%22/%3E%3Cline x1=%2250%22 y1=%2275%22 x2=%2250%22 y2=%2288%22 stroke=%22%2339a%22 stroke-width=%223%22/%3E%3C/svg%3E" alt="Dense Drizzle">',
    56: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M30 40 Q50 30 65 40 Q80 30 85 50 Q88 65 65 68 L35 68 Q20 65 20 50%22 fill=%22%23999%22/%3E%3Cline x1=%2230%22 y1=%2275%22 x2=%2230%22 y2=%2285%22 stroke=%22%2369f%22 stroke-width=%222%22/%3E%3C/svg%3E" alt="Freezing Drizzle">',
    57: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M30 40 Q50 30 65 40 Q80 30 85 50 Q88 65 65 68 L35 68 Q20 65 20 50%22 fill=%22%23999%22/%3E%3Cline x1=%2230%22 y1=%2275%22 x2=%2230%22 y2=%2288%22 stroke=%22%2339a%22 stroke-width=%223%22/%3E%3Cline x1=%2240%22 y1=%2275%22 x2=%2240%22 y2=%2288%22 stroke=%22%2339a%22 stroke-width=%223%22/%3E%3C/svg%3E" alt="Freezing Drizzle">',
    61: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M30 35 Q50 25 65 35 Q80 25 85 45 Q88 60 65 63 L35 63 Q20 60 20 45%22 fill=%22%23999%22/%3E%3Cline x1=%2230%22 y1=%2270%22 x2=%2230%22 y2=%2285%22 stroke=%22%2369f%22 stroke-width=%222%22/%3E%3Cline x1=%2240%22 y1=%2270%22 x2=%2240%22 y2=%2285%22 stroke=%22%2369f%22 stroke-width=%222%22/%3E%3C/svg%3E" alt="Slight Rain">',
    63: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M30 35 Q50 25 65 35 Q80 25 85 45 Q88 60 65 63 L35 63 Q20 60 20 45%22 fill=%22%23999%22/%3E%3Cline x1=%2230%22 y1=%2270%22 x2=%2230%22 y2=%2285%22 stroke=%22%2339a%22 stroke-width=%223%22/%3E%3Cline x1=%2240%22 y1=%2270%22 x2=%2240%22 y2=%2285%22 stroke=%22%2339a%22 stroke-width=%223%22/%3E%3Cline x1=%2250%22 y1=%2270%22 x2=%2250%22 y2=%2285%22 stroke=%22%2339a%22 stroke-width=%223%22/%3E%3C/svg%3E" alt="Moderate Rain">',
    65: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M30 35 Q50 25 65 35 Q80 25 85 45 Q88 60 65 63 L35 63 Q20 60 20 45%22 fill=%22%23999%22/%3E%3Cline x1=%2230%22 y1=%2270%22 x2=%2230%22 y2=%2288%22 stroke=%22%2339a%22 stroke-width=%223%22/%3E%3Cline x1=%2240%22 y1=%2268%22 x2=%2240%22 y2=%2288%22 stroke=%22%2339a%22 stroke-width=%223%22/%3E%3Cline x1=%2250%22 y1=%2270%22 x2=%2250%22 y2=%2290%22 stroke=%22%2339a%22 stroke-width=%224%22/%3E%3Cline x1=%2260%22 y1=%2268%22 x2=%2260%22 y2=%2286%22 stroke=%22%2339a%22 stroke-width=%223%22/%3E%3C/svg%3E" alt="Heavy Rain">',
    66: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M30 35 Q50 25 65 35 Q80 25 85 45 Q88 60 65 63 L35 63 Q20 60 20 45%22 fill=%22%23999%22/%3E%3Cline x1=%2230%22 y1=%2270%22 x2=%2230%22 y2=%2285%22 stroke=%22%2369f%22 stroke-width=%222%22/%3E%3Cline x1=%2240%22 y1=%2270%22 x2=%2240%22 y2=%2285%22 stroke=%22%2369f%22 stroke-width=%222%22/%3E%3C/svg%3E" alt="Freezing Rain">',
    67: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M30 35 Q50 25 65 35 Q80 25 85 45 Q88 60 65 63 L35 63 Q20 60 20 45%22 fill=%22%23999%22/%3E%3Cline x1=%2230%22 y1=%2270%22 x2=%2230%22 y2=%2288%22 stroke=%22%2339a%22 stroke-width=%223%22/%3E%3Cline x1=%2240%22 y1=%2268%22 x2=%2240%22 y2=%2288%22 stroke=%22%2339a%22 stroke-width=%223%22/%3E%3Cline x1=%2250%22 y1=%2270%22 x2=%2250%22 y2=%2290%22 stroke=%22%2339a%22 stroke-width=%224%22/%3E%3C/svg%3E" alt="Freezing Rain">',
    71: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M30 40 Q50 30 65 40 Q80 30 85 50 Q88 65 65 68 L35 68 Q20 65 20 50%22 fill=%22%23999%22/%3E%3Ccircle cx=%2235%22 cy=%2278%22 r=%223%22 fill=%22%23fff%22/%3E%3Ccircle cx=%2245%22 cy=%2280%22 r=%223%22 fill=%22%23fff%22/%3E%3C/svg%3E" alt="Slight Snow">',
    73: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M30 40 Q50 30 65 40 Q80 30 85 50 Q88 65 65 68 L35 68 Q20 65 20 50%22 fill=%22%23999%22/%3E%3Ccircle cx=%2230%22 cy=%2275%22 r=%223%22 fill=%22%23fff%22/%3E%3Ccircle cx=%2240%22 cy=%2280%22 r=%223%22 fill=%22%23fff%22/%3E%3Ccircle cx=%2250%22 cy=%2275%22 r=%223%22 fill=%22%23fff%22/%3E%3C/svg%3E" alt="Moderate Snow">',
    75: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M30 40 Q50 30 65 40 Q80 30 85 50 Q88 65 65 68 L35 68 Q20 65 20 50%22 fill=%22%23999%22/%3E%3Ccircle cx=%2230%22 cy=%2275%22 r=%223%22 fill=%22%23fff%22/%3E%3Ccircle cx=%2240%22 cy=%2280%22 r=%224%22 fill=%22%23fff%22/%3E%3Ccircle cx=%2250%22 cy=%2273%22 r=%223%22 fill=%22%23fff%22/%3E%3Ccircle cx=%2260%22 cy=%2278%22 r=%224%22 fill=%22%23fff%22/%3E%3C/svg%3E" alt="Heavy Snow">',
    77: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M30 40 Q50 30 65 40 Q80 30 85 50 Q88 65 65 68 L35 68 Q20 65 20 50%22 fill=%22%23999%22/%3E%3Ccircle cx=%2235%22 cy=%2278%22 r=%222%22 fill=%22%23fff%22/%3E%3Ccircle cx=%2245%22 cy=%2280%22 r=%222%22 fill=%22%23fff%22/%3E%3C/svg%3E" alt="Snow Grains">',
    80: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M30 35 Q50 25 65 35 Q80 25 85 45 Q88 60 65 63 L35 63 Q20 60 20 45%22 fill=%22%23999%22/%3E%3Cline x1=%2230%22 y1=%2270%22 x2=%2230%22 y2=%2285%22 stroke=%22%2369f%22 stroke-width=%222%22/%3E%3Cline x1=%2240%22 y1=%2270%22 x2=%2240%22 y2=%2285%22 stroke=%22%2369f%22 stroke-width=%222%22/%3E%3C/svg%3E" alt="Rain Showers">',
    81: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M30 35 Q50 25 65 35 Q80 25 85 45 Q88 60 65 63 L35 63 Q20 60 20 45%22 fill=%22%23999%22/%3E%3Cline x1=%2230%22 y1=%2270%22 x2=%2230%22 y2=%2285%22 stroke=%22%2339a%22 stroke-width=%223%22/%3E%3Cline x1=%2240%22 y1=%2270%22 x2=%2240%22 y2=%2285%22 stroke=%22%2339a%22 stroke-width=%223%22/%3E%3C/svg%3E" alt="Rain Showers">',
    82: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M30 35 Q50 25 65 35 Q80 25 85 45 Q88 60 65 63 L35 63 Q20 60 20 45%22 fill=%22%23999%22/%3E%3Cline x1=%2230%22 y1=%2270%22 x2=%2230%22 y2=%2288%22 stroke=%22%2339a%22 stroke-width=%223%22/%3E%3Cline x1=%2240%22 y1=%2268%22 x2=%2240%22 y2=%2288%22 stroke=%22%2339a%22 stroke-width=%223%22/%3E%3Cline x1=%2250%22 y1=%2270%22 x2=%2250%22 y2=%2290%22 stroke=%22%2339a%22 stroke-width=%223%22/%3E%3C/svg%3E" alt="Violent Rain">',
    85: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M30 35 Q50 25 65 35 Q80 25 85 45 Q88 60 65 63 L35 63 Q20 60 20 45%22 fill=%22%23999%22/%3E%3Ccircle cx=%2230%22 cy=%2275%22 r=%223%22 fill=%22%23fff%22/%3E%3Ccircle cx=%2240%22 cy=%2280%22 r=%223%22 fill=%22%23fff%22/%3E%3C/svg%3E" alt="Snow Showers">',
    86: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M30 35 Q50 25 65 35 Q80 25 85 45 Q88 60 65 63 L35 63 Q20 60 20 45%22 fill=%22%23999%22/%3E%3Ccircle cx=%2230%22 cy=%2275%22 r=%224%22 fill=%22%23fff%22/%3E%3Ccircle cx=%2240%22 cy=%2280%22 r=%223%22 fill=%22%23fff%22/%3E%3C/svg%3E" alt="Snow Showers">',
    95: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M30 35 Q50 25 65 35 Q80 25 85 45 Q88 60 65 63 L35 63 Q20 60 20 45%22 fill=%22%23999%22/%3E%3Cpolyline points=%2240,50 45,65 55,55 60,70%22 stroke=%22%23FFD700%22 stroke-width=%222%22 fill=%22none%22/%3E%3C/svg%3E" alt="Thunderstorm">',
    96: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M30 35 Q50 25 65 35 Q80 25 85 45 Q88 60 65 63 L35 63 Q20 60 20 45%22 fill=%22%23999%22/%3E%3Cpolyline points=%2240,50 45,65 55,55 60,70%22 stroke=%22%23FFD700%22 stroke-width=%222%22 fill=%22none%22/%3E%3Ccircle cx=%2255%22 cy=%2255%22 r=%223%22 fill=%22%23fff%22/%3E%3C/svg%3E" alt="Hail Thunderstorm">',
    99: '<img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M30 35 Q50 25 65 35 Q80 25 85 45 Q88 60 65 63 L35 63 Q20 60 20 45%22 fill=%22%23999%22/%3E%3Cpolyline points=%2240,50 45,65 55,55 60,70%22 stroke=%22%23FFD700%22 stroke-width=%222%22 fill=%22none%22/%3E%3Ccircle cx=%2255%22 cy=%2255%22 r=%224%22 fill=%22%23fff%22/%3E%3Ccircle cx=%2245%22 cy=%2265%22 r=%224%22 fill=%22%23fff%22/%3E%3C/svg%3E" alt="Heavy Hail Thunderstorm">',
};

const wmoDescriptions = {
    0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
    45: 'Foggy', 48: 'Depositing rime fog',
    51: 'Light drizzle', 53: 'Moderate drizzle', 55: 'Dense drizzle',
    56: 'Light freezing drizzle', 57: 'Dense freezing drizzle',
    61: 'Slight rain', 63: 'Moderate rain', 65: 'Heavy rain',
    66: 'Light freezing rain', 67: 'Heavy freezing rain',
    71: 'Slight snow', 73: 'Moderate snow', 75: 'Heavy snow',
    77: 'Snow grains',
    80: 'Slight rain showers', 81: 'Moderate rain showers', 82: 'Violent rain showers',
    85: 'Slight snow showers', 86: 'Heavy snow showers',
    95: 'Thunderstorm', 96: 'Thunderstorm with slight hail', 99: 'Thunderstorm with heavy hail',
};

const wmoIconsSimple = {
    0: '&#x2600;&#xFE0F;', 1: '&#x1F324;&#xFE0F;', 2: '&#x26C5;', 3: '&#x2601;&#xFE0F;',
    45: '&#x1F32B;&#xFE0F;', 48: '&#x1F32B;&#xFE0F;',
    51: '&#x1F326;&#xFE0F;', 53: '&#x1F326;&#xFE0F;', 55: '&#x1F327;&#xFE0F;',
    56: '&#x1F327;&#xFE0F;', 57: '&#x1F327;&#xFE0F;',
    61: '&#x1F326;&#xFE0F;', 63: '&#x1F327;&#xFE0F;', 65: '&#x1F327;&#xFE0F;',
    66: '&#x1F327;&#xFE0F;', 67: '&#x1F327;&#xFE0F;',
    71: '&#x1F328;&#xFE0F;', 73: '&#x1F328;&#xFE0F;', 75: '&#x2744;&#xFE0F;',
    77: '&#x2744;&#xFE0F;',
    80: '&#x1F326;&#xFE0F;', 81: '&#x1F327;&#xFE0F;', 82: '&#x1F327;&#xFE0F;',
    85: '&#x1F328;&#xFE0F;', 86: '&#x1F328;&#xFE0F;',
    95: '&#x26C8;&#xFE0F;', 96: '&#x26C8;&#xFE0F;', 99: '&#x26C8;&#xFE0F;',
};

const i18n = {
    en: {
        feelsLike: 'Feels Like',
        humidity: 'Humidity',
        wind: 'Wind',
        pressure: 'Pressure',
        sunrise: 'Sunrise',
        sunset: 'Sunset',
        forecastTitle: '5-Day Forecast',
        searchPlaceholder: 'Search for a city...',
        welcomeTitle: 'Welcome to Weather App',
        welcomeDesc: 'Search for a city to get started, or allow location access.',
        loading: 'Loading...',
        alertsTitle: 'Weather Alerts',
        alertsNone: 'No active weather alerts',
        severityExtreme: 'Extreme',
        severityWarning: 'Warning',
        severityWatch: 'Watch',
        severityAdvisory: 'Advisory',
        errorNotFound: 'City not found. Please try again.',
        errorGeneric: 'Something went wrong. Please try again.',
        errorLocation: 'Unable to get your location. Please search for a city.',
        footer: 'Weather App',
    },
    pt: {
        feelsLike: 'Sensação',
        humidity: 'Umidade',
        wind: 'Vento',
        pressure: 'Pressão',
        sunrise: 'Nascer do Sol',
        sunset: 'Pôr do Sol',
        forecastTitle: 'Previsão de 5 Dias',
        searchPlaceholder: 'Buscar cidade...',
        welcomeTitle: 'Bem-vindo ao Weather App',
        welcomeDesc: 'Busque uma cidade para começar ou permita acesso à localização.',
        loading: 'Carregando...',
        alertsTitle: 'Alertas Meteorológicos',
        alertsNone: 'Nenhum alerta meteorológico ativo',
        severityExtreme: 'Extremo',
        severityWarning: 'Perigo',
        severityWatch: 'Monitoramento',
        severityAdvisory: 'Aviso',
        errorNotFound: 'Cidade não encontrada. Tente novamente.',
        errorGeneric: 'Algo deu errado. Tente novamente.',
        errorLocation: 'Não foi possível obter sua localização. Busque uma cidade.',
        footer: 'Weather App',
    },
    es: {
        feelsLike: 'Sensación',
        humidity: 'Humedad',
        wind: 'Viento',
        pressure: 'Presión',
        sunrise: 'Amanecer',
        sunset: 'Atardecer',
        forecastTitle: 'Pronóstico de 5 Días',
        searchPlaceholder: 'Buscar ciudad...',
        welcomeTitle: 'Bienvenido a Weather App',
        welcomeDesc: 'Busque una ciudad para comenzar o permita el acceso a la ubicación.',
        loading: 'Cargando...',
        alertsTitle: 'Alertas Meteorológicas',
        alertsNone: 'No hay alertas meteorológicas activas',
        severityExtreme: 'Extremo',
        severityWarning: 'Peligro',
        severityWatch: 'Vigilancia',
        severityAdvisory: 'Aviso',
        errorNotFound: 'Ciudad no encontrada. Intente de nuevo.',
        errorGeneric: 'Algo salió mal. Intente de nuevo.',
        errorLocation: 'No se pudo obtener su ubicación. Busque una ciudad.',
        footer: 'Weather App',
    },
};

const cityOverride = {
    'miami': 'US',
    'new york': 'US',
    'los angeles': 'US',
    'chicago': 'US',
    'sao paulo': 'BR',
    'são paulo': 'BR',
    'rio de janeiro': 'BR',
    'brasilia': 'BR',
    'salvador': 'BR',
    'fortaleza': 'BR',
    'curitiba': 'BR',
    'recife': 'BR',
    'porto alegre': 'BR',
    'belo horizonte': 'BR',
    'manaus': 'BR',
    'london': 'GB',
    'paris': 'FR',
    'tokyo': 'JP',
    'sydney': 'AU',
    'berlin': 'DE',
    'madrid': 'ES',
    'lisbon': 'PT',
    'buenos aires': 'AR',
    'mexico city': 'MX',
    'bogota': 'CO',
    'santiago': 'CL',
    'lima': 'PE',
};

async function fetchWeather(city) {
    showLoading();
    hideError();
    hideWelcome();
    hideWeather();
    hideForecast();
    hideAlerts();

    try {
        const overrideCountry = cityOverride[city.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')] || null;

        const geoLang = overrideCountry ? 'en' : state.lang;
        const geocodeUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=5&language=${geoLang}&format=json`;
        const geoResp = await fetch(geocodeUrl);
        const geoData = await geoResp.json();

        if (!geoData || !geoData.results || geoData.results.length === 0) {
            showError(i18n[state.lang].errorNotFound);
            showWelcome();
            return;
        }

        let results = geoData.results;
        let best = results[0];

        if (overrideCountry) {
            const match = results.find(r => r.country_code && r.country_code.toUpperCase() === overrideCountry);
            if (match) best = match;
        } else if (results.length > 1) {
            const preferred = results.find(r => r.country_code && (r.country_code.toUpperCase() === 'US' || r.country_code.toUpperCase() === 'BR'));
            if (preferred) best = preferred;
        }

        state.lat = best.latitude;
        state.lon = best.longitude;

        const countryCode = best.country_code ? best.country_code.toUpperCase() : '';
        state.country = overrideCountry || countryCode;
        state.cityName = best.name || city;

        const openMeteoUrl = `https://api.open-meteo.com/v1/forecast?latitude=${state.lat}&longitude=${state.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,pressure_msl&daily=temperature_2m_max,temperature_2m_min,weather_code,sunrise,sunset&timezone=auto&forecast_days=6`;
        const omResp = await fetch(openMeteoUrl);
        if (!omResp.ok) { showError(i18n[state.lang].errorGeneric); showWelcome(); return; }
        const data = await omResp.json();

        state.weather = data;
        state.forecast = data;

        renderWeather();
        renderForecast();

        await fetchAlerts(state.lat, state.lon, state.country, state.cityName);

        hideLoading();
        showWeather();
        showForecast();
    } catch (err) {
        console.error(err);
        showError(i18n[state.lang].errorGeneric);
        showWelcome();
        hideLoading();
    }
}

let alertCache = { br: null, us: null, eu: null, jp: null, my: null };

const jmaWarnings = {
    '33': { en: 'Extreme Heavy Rain Warning', severity: 'Extreme' },
    '35': { en: 'Extreme Storm Warning', severity: 'Extreme' },
    '36': { en: 'Extreme Heavy Snow Warning', severity: 'Extreme' },
    '37': { en: 'Extreme High Wave Warning', severity: 'Extreme' },
    '38': { en: 'Extreme Storm Surge Warning', severity: 'Extreme' },
    '03': { en: 'Heavy Rain Warning', severity: 'Warning' },
    '04': { en: 'Flood Warning', severity: 'Warning' },
    '05': { en: 'Storm Warning', severity: 'Warning' },
    '06': { en: 'Heavy Snow Warning', severity: 'Warning' },
    '07': { en: 'High Wave Warning', severity: 'Warning' },
    '08': { en: 'Storm Surge Warning', severity: 'Warning' },
    '32': { en: 'Blizzard Warning', severity: 'Warning' },
    '10': { en: 'Heavy Rain Advisory', severity: 'Advisory' },
    '12': { en: 'Heavy Snow Advisory', severity: 'Advisory' },
    '13': { en: 'Winter Storm Advisory', severity: 'Advisory' },
    '14': { en: 'Thunderstorm Advisory', severity: 'Advisory' },
    '15': { en: 'Strong Wind Advisory', severity: 'Advisory' },
    '16': { en: 'High Wave Advisory', severity: 'Advisory' },
    '17': { en: 'Snowmelt Advisory', severity: 'Advisory' },
    '18': { en: 'Flood Advisory', severity: 'Advisory' },
    '19': { en: 'Storm Surge Advisory', severity: 'Advisory' },
    '20': { en: 'Dense Fog Advisory', severity: 'Advisory' },
    '21': { en: 'Dry Air Advisory', severity: 'Advisory' },
    '22': { en: 'Avalanche Advisory', severity: 'Advisory' },
    '23': { en: 'Low Temperature Advisory', severity: 'Advisory' },
    '24': { en: 'Frost Advisory', severity: 'Advisory' },
    '25': { en: 'Icing Advisory', severity: 'Advisory' },
    '26': { en: 'Snow Accretion Advisory', severity: 'Advisory' },
};

const meteoalarmFeeds = {
    'FR': 'france', 'DE': 'germany', 'IT': 'italy', 'ES': 'spain',
    'GB': 'united-kingdom', 'AT': 'austria', 'BE': 'belgium',
    'BG': 'bulgaria', 'HR': 'croatia', 'CY': 'cyprus', 'CZ': 'czechia',
    'DK': 'denmark', 'EE': 'estonia', 'FI': 'finland', 'GR': 'greece',
    'HU': 'hungary', 'IS': 'iceland', 'IE': 'ireland', 'IL': 'israel',
    'LV': 'latvia', 'LT': 'lithuania', 'LU': 'luxembourg', 'MT': 'malta',
    'MD': 'moldova', 'ME': 'montenegro', 'NL': 'netherlands',
    'MK': 'republic-of-north-macedonia', 'NO': 'norway', 'PL': 'poland',
    'PT': 'portugal', 'RO': 'romania', 'RS': 'serbia', 'SK': 'slovakia',
    'SI': 'slovenia', 'SE': 'sweden', 'CH': 'switzerland', 'UA': 'ukraine',
    'BA': 'bosnia-herzegovina', 'AD': 'andorra',
};

async function fetchAlerts(lat, lon, country, cityName) {
    state.alerts = null;

    try {
        if (country === 'BR') {
            for (const url of [
                'https://apiprevmet3.inmet.gov.br/avisos/ativos',
                `https://corsproxy.io/?url=${encodeURIComponent('https://apiprevmet3.inmet.gov.br/avisos/ativos')}`,
            ]) {
                try {
                    const resp = await fetch(url);
                    if (!resp.ok) continue;
                    const text = await resp.text();
                    if (!text.startsWith('{')) continue;
                    const data = JSON.parse(text);
                    state.alerts = parseInmetAlerts(data, cityName);
                    if (state.alerts) alertCache.br = state.alerts;
                    break;
                } catch {}
            }
            if (!state.alerts) state.alerts = alertCache.br;
        } else if (country === 'US') {
            const sevMap = { 'Extreme': 'Extreme', 'Severe': 'Warning', 'Moderate': 'Advisory', 'Minor': 'Advisory' };
            const parseNws = (p) => ({ event: p.event, headline: p.headline, description: p.headline, severityCode: sevMap[p.severity] || 'Advisory', urgency: p.urgency || '' });
            const url = `https://api.weather.gov/alerts/active?point=${lat},${lon}`;
            const resp = await fetch(url, { headers: { 'User-Agent': 'WeatherApp/1.0', 'Accept': 'application/json' } });
            if (resp.ok) {
                const data = await resp.json();
                if (data && data.features) {
                    state.alerts = data.features.map(f => f.properties).filter(a => a && a.event && a.headline).map(parseNws);
                    alertCache.us = state.alerts;
                }
            }
            if (!state.alerts) state.alerts = alertCache.us;
        } else if (meteoalarmFeeds[country]) {
            const feed = meteoalarmFeeds[country];
            const url = `https://corsproxy.io/?url=${encodeURIComponent(`https://feeds.meteoalarm.org/feeds/meteoalarm-legacy-atom-${feed}`)}`;
            const resp = await fetch(url);
            if (resp.ok) {
                const text = await resp.text();
                state.alerts = parseAtomFeed(text);
                if (state.alerts) alertCache.eu = state.alerts;
            }
            if (!state.alerts) state.alerts = alertCache.eu;
        } else if (country === 'JP') {
            const resp = await fetch('https://www.jma.go.jp/bosai/warning/data/warning/map.json');
            if (resp.ok) {
                const data = await resp.json();
                state.alerts = parseJmaAlerts(data);
                if (state.alerts) alertCache.jp = state.alerts;
            }
            if (!state.alerts) state.alerts = alertCache.jp;
        } else if (country === 'MY') {
            const resp = await fetch('https://api.data.gov.my/weather/warning');
            if (resp.ok) {
                const data = await resp.json();
                state.alerts = parseMalaysiaAlerts(data);
                if (state.alerts) alertCache.my = state.alerts;
            }
            if (!state.alerts) state.alerts = alertCache.my;
        }
    } catch (e) {}

    renderAlerts();
}

function parseAtomFeed(xmlText) {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlText, 'text/xml');
    const entries = xml.getElementsByTagName('entry');
    if (!entries.length) return null;
    const capNS = 'urn:oasis:names:tc:emergency:cap:1.2';
    const get = (el, tag, ns) => {
        const els = ns ? el.getElementsByTagNameNS(ns, tag) : el.getElementsByTagName(tag);
        return els.length ? els[0].textContent : '';
    };
    const sevMap = { 'Extreme': 'Extreme', 'Severe': 'Warning', 'Moderate': 'Advisory', 'Minor': 'Advisory' };
    const alerts = [];
    for (const entry of entries) {
        const event = get(entry, 'event', capNS);
        if (!event) continue;
        const severity = get(entry, 'severity', capNS);
        const area = get(entry, 'areaDesc', capNS);
        const title = get(entry, 'title', null);
        const urgency = get(entry, 'urgency', capNS);
        const severityCode = sevMap[severity] || 'Advisory';
        alerts.push({
            event: event,
            headline: title || event,
            description: event + (area ? ' - ' + area : ''),
            severity: severityCode,
            severityCode: severityCode,
            urgency: urgency || '',
        });
    }
    return alerts.length ? alerts : null;
}

function parseJmaAlerts(data) {
    if (!Array.isArray(data)) return null;
    const byType = {};
    for (const pref of data) {
        if (!pref.areaTypes || !pref.areaTypes[0]) continue;
        const areas = pref.areaTypes[0].areas;
        if (!areas) continue;
        for (const area of areas) {
            if (!area.warnings) continue;
            for (const w of area.warnings) {
                const info = jmaWarnings[w.code];
                if (!info) continue;
                const key = w.code;
                if (!byType[key]) byType[key] = { info, affected: 0 };
                byType[key].affected++;
            }
        }
    }
    const keys = Object.keys(byType);
    if (!keys.length) return null;
    return keys.map(code => {
        const d = byType[code];
        return {
            event: d.info.en,
            headline: d.info.en,
            description: `${d.info.en} - ${d.affected} prefectures`,
            severity: d.info.severity,
            severityCode: d.info.severity,
            urgency: 'Expected',
        };
    });
}

function parseMalaysiaAlerts(data) {
    if (!Array.isArray(data)) return null;
    const alerts = [];
    for (const item of data) {
        const title = item.warning_issue?.title_en || '';
        if (!title || title === 'No Advisory') continue;
        const heading = item.heading_en || title;
        const text = item.text_en || '';
        const severity = title.toLowerCase().includes('warning') ? 'Warning' : 'Advisory';
        alerts.push({
            event: heading,
            headline: heading,
            description: text || heading,
            severity: severity,
            severityCode: severity,
            urgency: item.valid_to ? 'Future' : 'Expected',
        });
    }
    return alerts.length ? alerts : null;
}

function parseInmetAlerts(data, cityName) {
    if (!data || typeof data !== 'object') return null;
    const alerts = [];
    const stateAbbr = state.stateCode || '';
    for (const key in data) {
        const item = data[key];
        if (!item || !Array.isArray(item)) continue;
        item.forEach(a => {
            if (a.municipios) {
                const munList = a.municipios.toLowerCase();
                if (stateAbbr) {
                    if (!munList.includes(` - ${stateAbbr.toLowerCase()}`)) return;
                }
            }
            const severity = mapInmetSeverity(a);
            alerts.push({
                event: a.descricao || a.titulo || 'Alerta',
                headline: a.titulo || a.descricao || 'Alerta Meteorológico',
                description: a.descricao || '',
                severity: severity,
                severityCode: severity,
                urgency: a.severidade || 'Unknown',
            });
        });
    }
    return alerts.length > 0 ? alerts : null;
}

function mapInmetSeverity(alert) {
    const sev = (alert.severidade || alert.gravidade || '').toLowerCase();
    const desc = (alert.descricao || alert.titulo || '').toLowerCase();
    if (sev.includes('extreme') || desc.includes('grande perigo')) return 'Extreme';
    if (sev.includes('grande') && !sev.includes('potencial')) return 'Extreme';
    if (sev.includes('warning')) return 'Warning';
    if (sev === 'perigo') return 'Warning';
    if (sev.includes('perigo') && !sev.includes('potencial')) return 'Warning';
    if (sev.includes('watch') || sev.includes('monitoramento')) return 'Watch';
    return 'Advisory';
}

function getSeverityClass(severity) {
    const s = (severity || '').toLowerCase();
    if (s.includes('extreme')) return 'severity-extreme';
    if (s === 'warning' || (s.includes('warning') && !s.includes('advisory'))) return 'severity-warning';
    if (s === 'perigo') return 'severity-warning';
    if (s.includes('perigo') && !s.includes('potencial')) return 'severity-warning';
    if (s.includes('watch') || s.includes('monitoramento')) return 'severity-watch';
    return 'severity-advisory';
}

function renderAlerts() {
    const container = document.getElementById('alertsContainer');
    const display = document.getElementById('alertsDisplay');

    if (!state.alerts || state.alerts.length === 0) {
        container.innerHTML = `<div class="alert-none">${i18n[state.lang].alertsNone}</div>`;
        hideAlerts();
        return;
    }

    showAlerts();
    container.innerHTML = state.alerts.map(a => {
        const sevKey = a.severityCode ? a.severityCode.toLowerCase() : 'advisory';
        let sevLabel = a.severityCode || 'Advisory';
        if (sevKey.includes('extreme')) sevLabel = i18n[state.lang].severityExtreme;
        else if (sevKey === 'perigo' || (sevKey.includes('perigo') && !sevKey.includes('potencial'))) sevLabel = i18n[state.lang].severityWarning;
        else if (sevKey === 'warning' || sevKey.includes('warning')) sevLabel = i18n[state.lang].severityWarning;
        else if (sevKey.includes('watch') || sevKey.includes('monitoramento')) sevLabel = i18n[state.lang].severityWatch;
        else sevLabel = i18n[state.lang].severityAdvisory;

        return `<div class="alert-card ${getSeverityClass(a.severityCode)}">
            <div class="alert-head">
                <div class="alert-event">${a.event || 'Alert'}</div>
                <div class="alert-severity">${sevLabel}</div>
            </div>
            <div class="alert-urgency">${a.urgency || ''}</div>
            <div class="alert-desc">${a.description || a.headline || ''}</div>
        </div>`;
    }).join('');
}

function renderWeather() {
    if (!state.weather || !state.weather.current) return;

    const c = state.weather.current;
    const d = state.weather.daily;

    document.getElementById('cityName').textContent = state.cityName || '';
    document.getElementById('country').textContent = state.country || '';

    const code = c.weather_code != null ? c.weather_code : 0;
    const desc = wmoDescriptions[code] || '';
    document.getElementById('weatherDesc').textContent = desc;

    document.getElementById('weatherIcon').innerHTML = wmoIcons[code] || wmoIconsSimple[code] || '';

    document.getElementById('temperature').textContent = formatTemp(c.temperature_2m);

    if (d) {
        document.getElementById('tempMax').textContent = formatTemp(d.temperature_2m_max[0]);
        document.getElementById('tempMin').textContent = formatTemp(d.temperature_2m_min[0]);
        if (d.sunrise && d.sunrise[0]) {
            document.getElementById('sunrise').textContent = formatTimeStr(d.sunrise[0]);
        }
        if (d.sunset && d.sunset[0]) {
            document.getElementById('sunset').textContent = formatTimeStr(d.sunset[0]);
        }
    }

    document.getElementById('feelsLike').textContent = formatTemp(c.apparent_temperature);
    document.getElementById('humidity').textContent = c.relative_humidity_2m != null ? c.relative_humidity_2m : '--';

    const windSpeed = c.wind_speed_10m != null ? c.wind_speed_10m : 0;
    const windEl = document.getElementById('wind');
    const windUnitEl = document.getElementById('windUnit');
    if (state.unit === 'C') {
        windEl.textContent = windSpeed.toFixed(1);
        windUnitEl.textContent = 'm/s';
    } else {
        windEl.textContent = (windSpeed * 2.237).toFixed(1);
        windUnitEl.textContent = 'mph';
    }

    document.getElementById('pressure').textContent = c.pressure_msl != null ? Math.round(c.pressure_msl) : '--';

    applyLanguage();
}

function renderForecast() {
    const container = document.getElementById('forecastContainer');
    container.innerHTML = '';

    if (!state.forecast || !state.forecast.daily || !state.forecast.daily.time) return;

    const daily = state.forecast.daily;
    const dayNames = state.lang === 'pt'
        ? ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
        : state.lang === 'es'
        ? ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
        : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const todayStr = new Date().toISOString().split('T')[0];
    let startIdx = daily.time[0] === todayStr ? 1 : 0;

    for (let i = startIdx; i < Math.min(daily.time.length, startIdx + 5); i++) {
        const date = new Date(daily.time[i] + 'T12:00:00');
        const dayName = dayNames[date.getDay()];
        const code = daily.weather_code[i] != null ? daily.weather_code[i] : 0;

        const card = document.createElement('div');
        card.className = 'forecast-card';
        card.innerHTML = `
            <div class="day">${dayName}</div>
            <div class="icon">${wmoIconsSimple[code] || ''}</div>
            <div class="temps">
                <span class="temp-high">${formatTemp(daily.temperature_2m_max[i])}</span>
                <span class="temp-low">${formatTemp(daily.temperature_2m_min[i])}</span>
            </div>
        `;
        container.appendChild(card);
    }
}

function formatTemp(celsius) {
    if (celsius == null) return '--';
    if (state.unit === 'C') {
        return Math.round(celsius) + '°';
    } else {
        return Math.round(celsius * 9/5 + 32) + '°';
    }
}

function formatTimeStr(dateStr) {
    if (!dateStr) return '--';
    const d = new Date(dateStr);
    return d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0');
}

function applyLanguage() {
    document.getElementById('searchInput').placeholder = i18n[state.lang].searchPlaceholder;
    document.getElementById('lblFeelsLike').textContent = i18n[state.lang].feelsLike;
    document.getElementById('lblHumidity').textContent = i18n[state.lang].humidity;
    document.getElementById('lblWind').textContent = i18n[state.lang].wind;
    document.getElementById('lblPressure').textContent = i18n[state.lang].pressure;
    document.getElementById('lblSunrise').textContent = i18n[state.lang].sunrise;
    document.getElementById('lblSunset').textContent = i18n[state.lang].sunset;
    document.getElementById('forecastTitle').textContent = i18n[state.lang].forecastTitle;
    document.getElementById('alertsTitle').textContent = i18n[state.lang].alertsTitle;
    document.getElementById('footerPowered').textContent = i18n[state.lang].footer;

    if (state.weather) {
        renderAlerts();
    }
}

function setBackground() {
}

function showLoading() {
    document.getElementById('loading').classList.remove('hidden');
}

function hideLoading() {
    document.getElementById('loading').classList.add('hidden');
}

function showError(msg) {
    const el = document.getElementById('error');
    el.textContent = msg;
    el.classList.remove('hidden');
}

function hideError() {
    document.getElementById('error').classList.add('hidden');
}

function showWelcome() {
    document.getElementById('welcome').classList.remove('hidden');
}

function hideWelcome() {
    document.getElementById('welcome').classList.add('hidden');
}

function showWeather() {
    document.getElementById('weatherDisplay').classList.remove('hidden');
}

function hideWeather() {
    document.getElementById('weatherDisplay').classList.add('hidden');
}

function showForecast() {
    document.getElementById('forecastDisplay').classList.remove('hidden');
}

function hideForecast() {
    document.getElementById('forecastDisplay').classList.add('hidden');
}

function showAlerts() {
    document.getElementById('alertsDisplay').classList.remove('hidden');
}

function hideAlerts() {
    document.getElementById('alertsDisplay').classList.add('hidden');
}

async function reverseGeocode(lat, lon) {
    const nomUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
    const nomResp = await fetch(nomUrl, { headers: { 'User-Agent': 'WeatherApp/1.0' } });
    if (!nomResp.ok) throw new Error('Nominatim failed');
    const nomData = await nomResp.json();
    const addr = nomData.address || {};
    state.cityName = nomData.name || addr.city || addr.town || addr.village || addr.municipality || addr.county || `${lat.toFixed(4)}, ${lon.toFixed(4)}`;
    state.country = (addr.country_code || '').toUpperCase();
    const iso = addr['ISO3166-2-lvl4'];
    if (iso) state.stateCode = iso.split('-')[1] || null;
}

async function fetchWeatherByCoords(lat, lon) {
    state.lat = lat;
    state.lon = lon;

    try {
        await reverseGeocode(lat, lon);
    } catch (e) {
        try {
            const geoUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;
            const geoResp = await fetch(geoUrl);
            if (geoResp.ok) {
                const geoData = await geoResp.json();
                    state.country = (geoData.countryCode || '').toUpperCase();
                    state.cityName = geoData.city || geoData.locality || geoData.principalSubdivision || `${lat.toFixed(4)}, ${lon.toFixed(4)}`;
                    if (geoData.principalSubdivisionCode) state.stateCode = geoData.principalSubdivisionCode.split('-')[1] || null;
                }
            } catch (e2) {}
        }

        if (!state.cityName) state.cityName = `${lat.toFixed(4)}, ${lon.toFixed(4)}`;

    const openMeteoUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,pressure_msl&daily=temperature_2m_max,temperature_2m_min,weather_code,sunrise,sunset&timezone=auto&forecast_days=6`;
    try {
        const omResp = await fetch(openMeteoUrl);
        if (omResp.ok) {
            const data = await omResp.json();
            state.weather = data;
            state.forecast = data;
        }
    } catch (e) {}

    hideLoading();

    if (!state.weather || !state.weather.current) {
        showError(i18n[state.lang].errorGeneric);
        showWelcome();
        return;
    }

    hideWelcome();
    renderWeather();
    renderForecast();
    showWeather();
    showForecast();

    if (state.country) await fetchAlerts(lat, lon, state.country, state.cityName);
    setBackground();
}

async function fetchLocationByIP() {
    for (const url of [
        'https://ipapi.co/json/',
        'https://freegeoip.app/json/',
    ]) {
        try {
            const resp = await fetch(url);
            if (resp.ok) {
                const data = await resp.json();
                const lat = data.latitude ?? data.lat;
                const lon = data.longitude ?? data.lon;
                if (lat != null && lon != null) {
                    state.cityName = data.city || '';
                    state.country = (data.country_code || data.countryCode || '').toUpperCase();
                    state.stateCode = (data.region_code || '').toUpperCase() || null;
                    await fetchWeatherByCoords(lat, lon);
                    return true;
                }
            }
        } catch (e) {}
    }
    return false;
}

function getLocation() {
    const geoOptions = { enableHighAccuracy: false, timeout: 5000 };
    const onSuccess = (pos) => {
        fetchWeatherByCoords(pos.coords.latitude, pos.coords.longitude);
    };
    const onError = () => {
        hideLoading();
        fetchLocationByIP();
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError, geoOptions);
    } else {
        hideLoading();
        fetchLocationByIP();
    }
}

document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.trim();
    if (query) fetchWeather(query);
});

document.getElementById('searchInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const query = e.target.value.trim();
        if (query) fetchWeather(query);
    }
});

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.lang = btn.dataset.lang;
        applyLanguage();
    });
});

document.querySelectorAll('.unit-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.unit-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.unit = btn.dataset.unit;
        if (state.weather) {
            renderWeather();
            renderForecast();
        }
    });
});

showWelcome();
getLocation();
