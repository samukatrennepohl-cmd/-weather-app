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
    timezone: null,
    utcOffset: null,
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

const wmoLocale = {
    en: {
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
    },
    pt: {
        0: 'Céu limpo', 1: 'Predominantemente limpo', 2: 'Parcialmente nublado', 3: 'Nublado',
        45: 'Neblinoso', 48: 'Neblina com geada',
        51: 'Garoa leve', 53: 'Garoa moderada', 55: 'Garoa intensa',
        56: 'Garoa congelante leve', 57: 'Garoa congelante intensa',
        61: 'Chuva fraca', 63: 'Chuva moderada', 65: 'Chuva forte',
        66: 'Chuva congelante leve', 67: 'Chuva congelante forte',
        71: 'Neve fraca', 73: 'Neve moderada', 75: 'Neve forte',
        77: 'Grãos de neve',
        80: 'Pancadas de chuva fracas', 81: 'Pancadas de chuva moderadas', 82: 'Pancadas de chuva violentas',
        85: 'Pancadas de neve fracas', 86: 'Pancadas de neve fortes',
        95: 'Tempestade', 96: 'Tempestade com granizo leve', 99: 'Tempestade com granizo forte',
    },
    es: {
        0: 'Cielo despejado', 1: 'Mayormente despejado', 2: 'Parcialmente nublado', 3: 'Nublado',
        45: 'Neblinoso', 48: 'Niebla con escarcha',
        51: 'Llovizna ligera', 53: 'Llovizna moderada', 55: 'Llovizna densa',
        56: 'Llovizna helada ligera', 57: 'Llovizna helada densa',
        61: 'Lluvia débil', 63: 'Lluvia moderada', 65: 'Lluvia fuerte',
        66: 'Lluvia helada ligera', 67: 'Lluvia helada fuerte',
        71: 'Nieve débil', 73: 'Nieve moderada', 75: 'Nieve fuerte',
        77: 'Granos de nieve',
        80: 'Chubascos débiles', 81: 'Chubascos moderados', 82: 'Chubascos violentos',
        85: 'Chubascos de nieve débiles', 86: 'Chubascos de nieve fuertes',
        95: 'Tormenta', 96: 'Tormenta con granizo débil', 99: 'Tormenta con granizo fuerte',
    },
    fr: {
        0: 'Ciel dégagé', 1: 'Principalement dégagé', 2: 'Partiellement nuageux', 3: 'Couvert',
        45: 'Brumeux', 48: 'Brouillard givrant',
        51: 'Légère bruine', 53: 'Bruine modérée', 55: 'Forte bruine',
        56: 'Légère bruine verglaçante', 57: 'Forte bruine verglaçante',
        61: 'Pluie faible', 63: 'Pluie modérée', 65: 'Pluie forte',
        66: 'Pluie verglaçante légère', 67: 'Pluie verglaçante forte',
        71: 'Neige faible', 73: 'Neige modérée', 75: 'Neige forte',
        77: 'Grains de neige',
        80: 'Faibles averses', 81: 'Averses modérées', 82: 'Forte averses',
        85: 'Faibles averses de neige', 86: 'Forte averses de neige',
        95: 'Orage', 96: 'Orage avec grêle légère', 99: 'Orage avec forte grêle',
    },
    de: {
        0: 'Klarer Himmel', 1: 'Überwiegend klar', 2: 'Teilweise bewölkt', 3: 'Bedeckt',
        45: 'Neblig', 48: 'Gefrierender Nebel',
        51: 'Leichter Nieselregen', 53: 'Mäßiger Nieselregen', 55: 'Dichter Nieselregen',
        56: 'Leichter gefrierender Nieselregen', 57: 'Dichter gefrierender Nieselregen',
        61: 'Leichter Regen', 63: 'Mäßiger Regen', 65: 'Starker Regen',
        66: 'Leichter gefrierender Regen', 67: 'Starker gefrierender Regen',
        71: 'Leichter Schneefall', 73: 'Mäßiger Schneefall', 75: 'Starker Schneefall',
        77: 'Schneekörner',
        80: 'Leichte Regenschauer', 81: 'Mäßige Regenschauer', 82: 'Starke Regenschauer',
        85: 'Leichte Schneeschauer', 86: 'Starke Schneeschauer',
        95: 'Gewitter', 96: 'Gewitter mit leichtem Hagel', 99: 'Gewitter mit starkem Hagel',
    },
    it: {
        0: 'Cielo sereno', 1: 'Prevalentemente sereno', 2: 'Parzialmente nuvoloso', 3: 'Coperto',
        45: 'Nebbioso', 48: 'Nebbia con ghiaccio',
        51: 'Pioviggine leggera', 53: 'Pioviggine moderata', 55: 'Pioviggine intensa',
        56: 'Pioviggine gelata leggera', 57: 'Pioviggine gelata intensa',
        61: 'Pioggia debole', 63: 'Pioggia moderata', 65: 'Pioggia forte',
        66: 'Pioggia gelata leggera', 67: 'Pioggia gelata forte',
        71: 'Neve debole', 73: 'Neve moderata', 75: 'Neve forte',
        77: 'Granelli di neve',
        80: 'Rovesci deboli', 81: 'Rovesci moderati', 82: 'Rovesci violenti',
        85: 'Rovesci di neve deboli', 86: 'Rovesci di neve forti',
        95: 'Temporale', 96: 'Temporale con grandine leggera', 99: 'Temporale con grandine forte',
    },
    nl: {
        0: 'Helder', 1: 'Overwegend helder', 2: 'Gedeeltelijk bewolkt', 3: 'Bewolkt',
        45: 'Mistig', 48: 'IJzel',
        51: 'Lichte motregen', 53: 'Matige motregen', 55: 'Dichte motregen',
        56: 'Lichte ijzelregen', 57: 'Dichte ijzelregen',
        61: 'Lichte regen', 63: 'Matige regen', 65: 'Zware regen',
        66: 'Lichte ijzel', 67: 'Zware ijzel',
        71: 'Lichte sneeuw', 73: 'Matige sneeuw', 75: 'Zware sneeuw',
        77: 'Sneeuwkorrels',
        80: 'Lichte regenbuien', 81: 'Matige regenbuien', 82: 'Zware regenbuien',
        85: 'Lichte sneeuwbuien', 86: 'Zware sneeuwbuien',
        95: 'Onweer', 96: 'Onweer met lichte hagel', 99: 'Onweer met zware hagel',
    },
    pl: {
        0: 'Bezchmurne niebo', 1: 'Przeważnie bezchmurnie', 2: 'Częściowe zachmurzenie', 3: 'Pochmurno',
        45: 'Mglisto', 48: 'Zamglenie z szronem',
        51: 'Słaba mżawka', 53: 'Umiarkowana mżawka', 55: 'Gęsta mżawka',
        56: 'Słaba marznąca mżawka', 57: 'Gęsta marznąca mżawka',
        61: 'Słaby deszcz', 63: 'Umiarkowany deszcz', 65: 'Silny deszcz',
        66: 'Słaby marznący deszcz', 67: 'Silny marznący deszcz',
        71: 'Słaby śnieg', 73: 'Umiarkowany śnieg', 75: 'Silny śnieg',
        77: 'Ziarna śniegu',
        80: 'Słabe przelotne opady', 81: 'Umiarkowane przelotne opady', 82: 'Silne przelotne opady',
        85: 'Słabe przelotne opady śniegu', 86: 'Silne przelotne opady śniegu',
        95: 'Burza', 96: 'Burza z lekkim gradem', 99: 'Burza z silnym gradem',
    },
    ru: {
        0: 'Ясно', 1: 'Преимущественно ясно', 2: 'Переменная облачность', 3: 'Пасмурно',
        45: 'Туманно', 48: 'Туман с изморозью',
        51: 'Легкая морось', 53: 'Умеренная морось', 55: 'Сильная морось',
        56: 'Легкая ледяная морось', 57: 'Сильная ледяная морось',
        61: 'Небольшой дождь', 63: 'Умеренный дождь', 65: 'Сильный дождь',
        66: 'Легкий ледяной дождь', 67: 'Сильный ледяной дождь',
        71: 'Небольшой снег', 73: 'Умеренный снег', 75: 'Сильный снег',
        77: 'Снежные зерна',
        80: 'Небольшие ливни', 81: 'Умеренные ливни', 82: 'Сильные ливни',
        85: 'Небольшие снегопады', 86: 'Сильные снегопады',
        95: 'Гроза', 96: 'Гроза с легким градом', 99: 'Гроза с сильным градом',
    },
    ja: {
        0: '快晴', 1: 'おおむね晴れ', 2: '一部曇り', 3: '曇り',
        45: '霧', 48: '着氷性の霧',
        51: '軽い霧雨', 53: '適度な霧雨', 55: '濃い霧雨',
        56: '軽い氷霧雨', 57: '濃い氷霧雨',
        61: '小雨', 63: '適度な雨', 65: '大雨',
        66: '軽い氷雨', 67: '強い氷雨',
        71: '小雪', 73: '適度な雪', 75: '大雪',
        77: '雪の粒',
        80: '弱い雨のシャワー', 81: '適度な雨のシャワー', 82: '激しい雨のシャワー',
        85: '弱い雪のシャワー', 86: '激しい雪のシャワー',
        95: '雷雨', 96: '弱いひょうを伴う雷雨', 99: '激しいひょうを伴う雷雨',
    },
    ko: {
        0: '맑음', 1: '대체로 맑음', 2: '부분적으로 흐림', 3: '흐림',
        45: '안개', 48: '서리 안개',
        51: '가벼운 이슬비', 53: '보통 이슬비', 55: '짙은 이슬비',
        56: '가벼운 어는 이슬비', 57: '짙은 어는 이슬비',
        61: '약한 비', 63: '보통 비', 65: '강한 비',
        66: '가벼운 어는 비', 67: '강한 어는 비',
        71: '약한 눈', 73: '보통 눈', 75: '강한 눈',
        77: '눈 알갱이',
        80: '약한 소나기', 81: '보통 소나기', 82: '강한 소나기',
        85: '약한 눈보라', 86: '강한 눈보라',
        95: '뇌우', 96: '약한 우박을 동반한 뇌우', 99: '강한 우박을 동반한 뇌우',
    },
    zh: {
        0: '晴天', 1: '大部晴朗', 2: '部分多云', 3: '阴天',
        45: '有雾', 48: '雾凇',
        51: '小毛毛雨', 53: '中毛毛雨', 55: '大毛毛雨',
        56: '小冻毛毛雨', 57: '大冻毛毛雨',
        61: '小雨', 63: '中雨', 65: '大雨',
        66: '小冻雨', 67: '大冻雨',
        71: '小雪', 73: '中雪', 75: '大雪',
        77: '雪粒',
        80: '小阵雨', 81: '中阵雨', 82: '大阵雨',
        85: '小阵雪', 86: '大阵雪',
        95: '雷暴', 96: '雷暴伴小冰雹', 99: '雷暴伴大冰雹',
    },
    ar: {
        0: 'سماء صافية', 1: 'صافية غالبًا', 2: 'غائم جزئيًا', 3: 'غائم',
        45: 'ضبابي', 48: 'ضباب متجمد',
        51: 'رذاذ خفيف', 53: 'رذاذ معتدل', 55: 'رذاذ كثيف',
        56: 'رذاذ متجمد خفيف', 57: 'رذاذ متجمد كثيف',
        61: 'مطر خفيف', 63: 'مطر معتدل', 65: 'مطر غزير',
        66: 'مطر متجمد خفيف', 67: 'مطر متجمد غزير',
        71: 'ثلج خفيف', 73: 'ثلج معتدل', 75: 'ثلج غزير',
        77: 'حبيبات ثلج',
        80: 'زخات مطر خفيفة', 81: 'زخات مطر معتدلة', 82: 'زخات مطر غزيرة',
        85: 'زخات ثلج خفيفة', 86: 'زخات ثلج غزيرة',
        95: 'عاصفة رعدية', 96: 'عاصفة رعدية مع برد خفيف', 99: 'عاصفة رعدية مع برد غزير',
    },
    hi: {
        0: 'साफ आसमान', 1: 'अधिकतर साफ', 2: 'आंशिक रूप से बादल', 3: 'बादल छाए',
        45: 'धुंधला', 48: 'पाले के साथ धुंध',
        51: 'हल्की बूंदाबांदी', 53: 'मध्यम बूंदाबांदी', 55: 'तेज बूंदाबांदी',
        56: 'हल्की जमा देने वाली बूंदाबांदी', 57: 'तेज जमा देने वाली बूंदाबांदी',
        61: 'हल्की बारिश', 63: 'मध्यम बारिश', 65: 'तेज बारिश',
        66: 'हल्की जमा देने वाली बारिश', 67: 'तेज जमा देने वाली बारिश',
        71: 'हल्की बर्फबारी', 73: 'मध्यम बर्फबारी', 75: 'तेज बर्फबारी',
        77: 'बर्फ के कण',
        80: 'हल्की बारिश की बौछारें', 81: 'मध्यम बारिश की बौछारें', 82: 'तेज बारिश की बौछारें',
        85: 'हल्की बर्फ की बौछारें', 86: 'तेज बर्फ की बौछारें',
        95: 'आंधी', 96: 'हल्के ओलों के साथ आंधी', 99: 'तेज ओलों के साथ आंधी',
    },
    tr: {
        0: 'Açık gökyüzü', 1: 'Çoğunlukla açık', 2: 'Parçalı bulutlu', 3: 'Kapalı',
        45: 'Sisli', 48: 'Kırağılı sis',
        51: 'Hafif çisenti', 53: 'Orta şiddette çisenti', 55: 'Yoğun çisenti',
        56: 'Hafif donan çisenti', 57: 'Yoğun donan çisenti',
        61: 'Hafif yağmur', 63: 'Orta şiddette yağmur', 65: 'Şiddetli yağmur',
        66: 'Hafif donan yağmur', 67: 'Şiddetli donan yağmur',
        71: 'Hafif kar', 73: 'Orta şiddette kar', 75: 'Yoğun kar',
        77: 'Kar taneleri',
        80: 'Hafif sağanak', 81: 'Orta şiddette sağanak', 82: 'Şiddetli sağanak',
        85: 'Hafif kar sağanağı', 86: 'Şiddetli kar sağanağı',
        95: 'Gök gürültülü fırtına', 96: 'Hafif dolu ile gök gürültülü fırtına', 99: 'Şiddetli dolu ile gök gürültülü fırtına',
    },
    sv: {
        0: 'Klart', 1: 'Mestadels klart', 2: 'Växlande molnighet', 3: 'Mulet',
        45: 'Dimma', 48: 'Dimma med is',
        51: 'Lätt duggregn', 53: 'Måttligt duggregn', 55: 'Tätt duggregn',
        56: 'Lätt underkylt duggregn', 57: 'Tätt underkylt duggregn',
        61: 'Lätt regn', 63: 'Måttligt regn', 65: 'Kraftigt regn',
        66: 'Lätt underkylt regn', 67: 'Kraftigt underkylt regn',
        71: 'Lätt snö', 73: 'Måttlig snö', 75: 'Kraftig snö',
        77: 'Snökorn',
        80: 'Lätta regnskurar', 81: 'Måttliga regnskurar', 82: 'Kraftiga regnskurar',
        85: 'Lätta snöbyar', 86: 'Kraftiga snöbyar',
        95: 'Åska', 96: 'Åska med lätt hagel', 99: 'Åska med kraftigt hagel',
    },
    da: {
        0: 'Klart', 1: 'Overvejende klart', 2: 'Delvist skyet', 3: 'Overskyet',
        45: 'Tåget', 48: 'Tåge med rimfrost',
        51: 'Let støvregn', 53: 'Moderat støvregn', 55: 'Tæt støvregn',
        56: 'Let underkølet støvregn', 57: 'Tæt underkølet støvregn',
        61: 'Let regn', 63: 'Moderat regn', 65: 'Kraftig regn',
        66: 'Let underkølet regn', 67: 'Kraftig underkølet regn',
        71: 'Let sne', 73: 'Moderat sne', 75: 'Kraftig sne',
        77: 'Snefnug',
        80: 'Lette regnbyger', 81: 'Moderate regnbyger', 82: 'Kraftige regnbyger',
        85: 'Lette snebyger', 86: 'Kraftige snebyger',
        95: 'Tordenvejr', 96: 'Tordenvejr med let hagl', 99: 'Tordenvejr med kraftigt hagl',
    },
    fi: {
        0: 'Selkeä', 1: 'Enimmäkseen selkeä', 2: 'Puolipilvinen', 3: 'Pilvinen',
        45: 'Sumuinen', 48: 'Jäätävä sumu',
        51: 'Heikko tihku', 53: 'Kohtalainen tihku', 55: 'Tiheä tihku',
        56: 'Heikko jäätävä tihku', 57: 'Tiheä jäätävä tihku',
        61: 'Heikko sade', 63: 'Kohtalainen sade', 65: 'Kova sade',
        66: 'Heikko jäätävä sade', 67: 'Kova jäätävä sade',
        71: 'Heikko lumisade', 73: 'Kohtalainen lumisade', 75: 'Kova lumisade',
        77: 'Lumirakeet',
        80: 'Heikkoja sadekuuroja', 81: 'Kohtalaisia sadekuuroja', 82: 'Kovia sadekuuroja',
        85: 'Heikkoja lumikuuroja', 86: 'Kovia lumikuuroja',
        95: 'Ukkonen', 96: 'Ukkosta heikon rakeiden kera', 99: 'Ukkosta kovan rakeiden kera',
    },
    no: {
        0: 'Klart', 1: 'For det meste klart', 2: 'Delvis skyet', 3: 'Overskyet',
        45: 'Tåkete', 48: 'Tåke med rim',
        51: 'Lett yr', 53: 'Moderat yr', 55: 'Tett yr',
        56: 'Lett underkjølt yr', 57: 'Tett underkjølt yr',
        61: 'Lett regn', 63: 'Moderat regn', 65: 'Kraftig regn',
        66: 'Lett underkjølt regn', 67: 'Kraftig underkjølt regn',
        71: 'Lett snø', 73: 'Moderat snø', 75: 'Kraftig snø',
        77: 'Snøkorn',
        80: 'Lette regnbyger', 81: 'Moderate regnbyger', 82: 'Kraftige regnbyger',
        85: 'Lette snøbyger', 86: 'Kraftige snøbyger',
        95: 'Torden', 96: 'Torden med lett hagl', 99: 'Torden med kraftig hagl',
    },
    cs: {
        0: 'Jasno', 1: 'Převážně jasno', 2: 'Polojasno', 3: 'Zataženo',
        45: 'Mlhavo', 48: 'Mlha s jinovatkou',
        51: 'Slabé mrholení', 53: 'Mírné mrholení', 55: 'Husté mrholení',
        56: 'Slabé mrznoucí mrholení', 57: 'Husté mrznoucí mrholení',
        61: 'Slabý déšť', 63: 'Mírný déšť', 65: 'Silný déšť',
        66: 'Slabý mrznoucí déšť', 67: 'Silný mrznoucí déšť',
        71: 'Slabé sněžení', 73: 'Mírné sněžení', 75: 'Silné sněžení',
        77: 'Sněhové krupky',
        80: 'Slabé přeháňky', 81: 'Mírné přeháňky', 82: 'Silné přeháňky',
        85: 'Slabé sněhové přeháňky', 86: 'Silné sněhové přeháňky',
        95: 'Bouřka', 96: 'Bouřka s lehkými kroupami', 99: 'Bouřka se silnými kroupami',
    },
    ro: {
        0: 'Cer senin', 1: 'Predominant senin', 2: 'Parțial noros', 3: 'Acoperit',
        45: 'Cețos', 48: 'Ceață cu chiciură',
        51: 'Burniță ușoară', 53: 'Burniță moderată', 55: 'Burniță densă',
        56: 'Burniță înghețată ușoară', 57: 'Burniță înghețată densă',
        61: 'Ploaie slabă', 63: 'Ploaie moderată', 65: 'Ploaie puternică',
        66: 'Ploaie înghețată ușoară', 67: 'Ploaie înghețată puternică',
        71: 'Ninsoare slabă', 73: 'Ninsoare moderată', 75: 'Ninsoare puternică',
        77: 'Granule de zăpadă',
        80: 'Averse slabe', 81: 'Averse moderate', 82: 'Averse violente',
        85: 'Averse de zăpadă slabe', 86: 'Averse de zăpadă puternice',
        95: 'Furtună', 96: 'Furtună cu grindină ușoară', 99: 'Furtună cu grindină puternică',
    },
    el: {
        0: 'Αίθριος', 1: 'Κυρίως αίθριος', 2: 'Μερικώς συννεφιασμένος', 3: 'Συννεφιασμένος',
        45: 'Ομιχλώδης', 48: 'Ομίχλη με πάχνη',
        51: 'Ελαφρό ψιλόβροχο', 53: 'Μέτριο ψιλόβροχο', 55: 'Πυκνό ψιλόβροχο',
        56: 'Ελαφριά παγωμένη ψιχάλα', 57: 'Πυκνή παγωμένη ψιχάλα',
        61: 'Ασθενής βροχή', 63: 'Μέτρια βροχή', 65: 'Ισχυρή βροχή',
        66: 'Ελαφριά παγωμένη βροχή', 67: 'Ισχυρή παγωμένη βροχή',
        71: 'Ασθενής χιονόπτωση', 73: 'Μέτρια χιονόπτωση', 75: 'Ισχυρή χιονόπτωση',
        77: 'Κόκκοι χιονιού',
        80: 'Ασθενείς μπόρες', 81: 'Μέτριες μπόρες', 82: 'Ισχυρές μπόρες',
        85: 'Ασθενείς χιονοπτώσεις', 86: 'Ισχυρές χιονοπτώσεις',
        95: 'Καταιγίδα', 96: 'Καταιγίδα με ελαφρό χαλάζι', 99: 'Καταιγίδα με ισχυρό χαλάζι',
    },
    th: {
        0: 'ท้องฟ้าแจ่มใส', 1: 'แจ่มใสเป็นส่วนใหญ่', 2: 'มีเมฆบางส่วน', 3: 'มีเมฆมาก',
        45: 'มีหมอก', 48: 'หมอกน้ำค้างแข็ง',
        51: 'ฝนปรอยเล็กน้อย', 53: 'ฝนปรอยปานกลาง', 55: 'ฝนปรอยหนัก',
        56: 'ฝนปรอยเยือกแข็งเล็กน้อย', 57: 'ฝนปรอยเยือกแข็งหนัก',
        61: 'ฝนเล็กน้อย', 63: 'ฝนปานกลาง', 65: 'ฝนหนัก',
        66: 'ฝนเยือกแข็งเล็กน้อย', 67: 'ฝนเยือกแข็งหนัก',
        71: 'หิมะเล็กน้อย', 73: 'หิมะปานกลาง', 75: 'หิมะหนัก',
        77: 'เม็ดหิมะ',
        80: 'ฝนโปรยปรายเล็กน้อย', 81: 'ฝนโปรยปรายปานกลาง', 82: 'ฝนโปรยปรายหนัก',
        85: 'หิมะโปรยปรายเล็กน้อย', 86: 'หิมะโปรยปรายหนัก',
        95: 'พายุฟ้าคะนอง', 96: 'พายุฟ้าคะนองกับลูกเห็บเล็กน้อย', 99: 'พายุฟ้าคะนองกับลูกเห็บหนัก',
    },
    vi: {
        0: 'Trời quang', 1: 'Trời quang chủ yếu', 2: 'Có mây rải rác', 3: 'U ám',
        45: 'Có sương mù', 48: 'Sương muối',
        51: 'Mưa phùn nhẹ', 53: 'Mưa phùn vừa', 55: 'Mưa phùn dày',
        56: 'Mưa phùn đóng băng nhẹ', 57: 'Mưa phùn đóng băng dày',
        61: 'Mưa nhẹ', 63: 'Mưa vừa', 65: 'Mưa lớn',
        66: 'Mưa đóng băng nhẹ', 67: 'Mưa đóng băng lớn',
        71: 'Tuyết nhẹ', 73: 'Tuyết vừa', 75: 'Tuyết lớn',
        77: 'Hạt tuyết',
        80: 'Mưa rào nhẹ', 81: 'Mưa rào vừa', 82: 'Mưa rào lớn',
        85: 'Tuyết rơi rải rác nhẹ', 86: 'Tuyết rơi rải rác lớn',
        95: 'Dông', 96: 'Dông kèm mưa đá nhẹ', 99: 'Dông kèm mưa đá lớn',
    },
    he: {
        0: 'שמים בהירים', 1: 'בהיר ברובו', 2: 'מעונן חלקית', 3: 'מעונן',
        45: 'ערפילי', 48: 'ערפל מקפיא',
        51: 'טפטוף קל', 53: 'טפטוף בינוני', 55: 'טפטוף כבד',
        56: 'טפטוף מקפיא קל', 57: 'טפטוף מקפיא כבד',
        61: 'גשם קל', 63: 'גשם בינוני', 65: 'גשם כבד',
        66: 'גשם מקפיא קל', 67: 'גשם מקפיא כבד',
        71: 'שלג קל', 73: 'שלג בינוני', 75: 'שלג כבד',
        77: 'גרגירי שלג',
        80: 'ממטרי גשם קלים', 81: 'ממטרי גשם בינוניים', 82: 'ממטרי גשם כבדים',
        85: 'ממטרי שלג קלים', 86: 'ממטרי שלג כבדים',
        95: 'סופת רעמים', 96: 'סופת רעמים עם ברד קל', 99: 'סופת רעמים עם ברד כבד',
    },
};

function getWmoDesc(code) {
    const langDesc = wmoLocale[state.lang];
    if (langDesc && langDesc[code] !== undefined) return langDesc[code];
    return wmoLocale.en[code] || '';
}

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

const i18nBase = {
    feelsLike: 'Feels Like',
    humidity: 'Humidity',
    wind: 'Wind',
    pressure: 'Pressure',
    sunrise: 'Sunrise',
    sunset: 'Sunset',
    rain: 'Rain',
    windGusts: 'Wind Gusts',
    forecastTitle: '15-Day Forecast',
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
    forecastNote: 'Forecasts beyond 2-3 days are subject to change.',
    radarTitle: 'Radar',
};

const i18nTranslations = {
    pt: {
        feelsLike: 'Sensação', humidity: 'Umidade', wind: 'Vento',
        pressure: 'Pressão', sunrise: 'Nascer do Sol', sunset: 'Pôr do Sol',
        forecastTitle: 'Previsão de 15 Dias', searchPlaceholder: 'Buscar cidade...',
        welcomeTitle: 'Bem-vindo ao Weather App', welcomeDesc: 'Busque uma cidade para começar ou permita acesso à localização.',
        loading: 'Carregando...', alertsTitle: 'Alertas Meteorológicos',
        alertsNone: 'Nenhum alerta meteorológico ativo', severityExtreme: 'Extremo',
        severityWarning: 'Perigo', severityWatch: 'Monitoramento', severityAdvisory: 'Aviso',
        errorNotFound: 'Cidade não encontrada. Tente novamente.',
        errorGeneric: 'Algo deu errado. Tente novamente.',
        errorLocation: 'Não foi possível obter sua localização. Busque uma cidade.',
        footer: 'Weather App', forecastNote: 'Previsões além de 2-3 dias estão sujeitas a alterações.',
    },
    es: {
        feelsLike: 'Sensación', humidity: 'Humedad', wind: 'Viento',
        pressure: 'Presión', sunrise: 'Amanecer', sunset: 'Atardecer',
        forecastTitle: 'Pronóstico de 15 Días', searchPlaceholder: 'Buscar ciudad...',
        welcomeTitle: 'Bienvenido a Weather App', welcomeDesc: 'Busque una ciudad para comenzar o permita el acceso a la ubicación.',
        loading: 'Cargando...', alertsTitle: 'Alertas Meteorológicas',
        alertsNone: 'No hay alertas meteorológicas activas', severityExtreme: 'Extremo',
        severityWarning: 'Peligro', severityWatch: 'Vigilancia', severityAdvisory: 'Aviso',
        errorNotFound: 'Ciudad no encontrada. Intente de nuevo.',
        errorGeneric: 'Algo salió mal. Intente de nuevo.',
        errorLocation: 'No se pudo obtener su ubicación. Busque una ciudad.',
        footer: 'Weather App', forecastNote: 'Los pronósticos más allá de 2-3 días están sujetos a cambios.',
    },
    fr: {
        feelsLike: 'Ressenti', humidity: 'Humidité', wind: 'Vent',
        pressure: 'Pression', sunrise: 'Lever du soleil', sunset: 'Coucher du soleil',
        forecastTitle: 'Prévisions 15 Jours', searchPlaceholder: 'Rechercher une ville...',
        welcomeTitle: 'Bienvenue sur Weather App', welcomeDesc: 'Recherchez une ville ou autorisez l\'accès à votre position.',
        loading: 'Chargement...', alertsTitle: 'Alertes Météo',
        alertsNone: 'Aucune alerte météo active', severityExtreme: 'Extrême',
        severityWarning: 'Avertissement', severityWatch: 'Surveillance', severityAdvisory: 'Avis',
        errorNotFound: 'Ville introuvable. Veuillez réessayer.',
        errorGeneric: 'Une erreur est survenue. Veuillez réessayer.',
        errorLocation: 'Impossible d\'obtenir votre position. Recherchez une ville.',
        footer: 'Weather App', forecastNote: 'Les prévisions au-delà de 2-3 jours sont susceptibles de changer.',
    },
    de: {
        feelsLike: 'Gefühlt', humidity: 'Luftfeuchtigkeit', wind: 'Wind',
        pressure: 'Luftdruck', sunrise: 'Sonnenaufgang', sunset: 'Sonnenuntergang',
        forecastTitle: '15-Tage-Vorhersage', searchPlaceholder: 'Stadt suchen...',
        welcomeTitle: 'Willkommen bei Weather App', welcomeDesc: 'Suchen Sie eine Stadt oder erlauben Sie den Standortzugriff.',
        loading: 'Lädt...', alertsTitle: 'Wetterwarnungen',
        alertsNone: 'Keine aktiven Wetterwarnungen', severityExtreme: 'Extrem',
        severityWarning: 'Warnung', severityWatch: 'Beobachtung', severityAdvisory: 'Hinweis',
        errorNotFound: 'Stadt nicht gefunden. Bitte versuchen Sie es erneut.',
        errorGeneric: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
        errorLocation: 'Standort konnte nicht ermittelt werden. Suchen Sie eine Stadt.',
        footer: 'Weather App', forecastNote: 'Vorhersagen über 2-3 Tage hinaus können sich ändern.',
    },
    it: {
        feelsLike: 'Percepito', humidity: 'Umidità', wind: 'Vento',
        pressure: 'Pressione', sunrise: 'Alba', sunset: 'Tramonto',
        forecastTitle: 'Previsioni 15 Giorni', searchPlaceholder: 'Cerca città...',
        welcomeTitle: 'Benvenuto su Weather App', welcomeDesc: 'Cerca una città o autorizza l\'accesso alla posizione.',
        loading: 'Caricamento...', alertsTitle: 'Allerte Meteo',
        alertsNone: 'Nessuna allerta meteo attiva', severityExtreme: 'Estrema',
        severityWarning: 'Pericolo', severityWatch: 'Monitoraggio', severityAdvisory: 'Avviso',
        errorNotFound: 'Città non trovata. Riprova.',
        errorGeneric: 'Qualcosa è andato storto. Riprova.',
        errorLocation: 'Impossibile ottenere la posizione. Cerca una città.',
        footer: 'Weather App', forecastNote: 'Le previsioni oltre 2-3 giorni sono soggette a cambiamenti.',
    },
    nl: {
        feelsLike: 'Gevoelstemperatuur', humidity: 'Luchtvochtigheid', wind: 'Wind',
        pressure: 'Luchtdruk', sunrise: 'Zonsopgang', sunset: 'Zonsondergang',
        forecastTitle: '15-Dagen Verwachting', searchPlaceholder: 'Zoek een stad...',
        welcomeTitle: 'Welkom bij Weather App', welcomeDesc: 'Zoek een stad of sta locatietoegang toe.',
        loading: 'Laden...', alertsTitle: 'Weeralarmen',
        alertsNone: 'Geen actieve weeralarmen', severityExtreme: 'Extreem',
        severityWarning: 'Waarschuwing', severityWatch: 'Alert', severityAdvisory: 'Advies',
        errorNotFound: 'Stad niet gevonden. Probeer het opnieuw.',
        errorGeneric: 'Er is iets misgegaan. Probeer het opnieuw.',
        errorLocation: 'Kan uw locatie niet bepalen. Zoek een stad.',
        footer: 'Weather App', forecastNote: 'Verwachtingen voorbij 2-3 dagen kunnen veranderen.',
    },
    pl: {
        feelsLike: 'Odczuwalna', humidity: 'Wilgotność', wind: 'Wiatr',
        pressure: 'Ciśnienie', sunrise: 'Wschód słońca', sunset: 'Zachód słońca',
        forecastTitle: 'Prognoza 15-Dniowa', searchPlaceholder: 'Szukaj miasta...',
        welcomeTitle: 'Witaj w Weather App', welcomeDesc: 'Wyszukaj miasto lub zezwól na dostęp do lokalizacji.',
        loading: 'Ładowanie...', alertsTitle: 'Alerty Pogodowe',
        alertsNone: 'Brak aktywnych alertów pogodowych', severityExtreme: 'Ekstremalny',
        severityWarning: 'Ostrzeżenie', severityWatch: 'Monitorowanie', severityAdvisory: 'Zalecenie',
        errorNotFound: 'Nie znaleziono miasta. Spróbuj ponownie.',
        errorGeneric: 'Coś poszło nie tak. Spróbuj ponownie.',
        errorLocation: 'Nie można uzyskać lokalizacji. Wyszukaj miasto.',
        footer: 'Weather App', forecastNote: 'Prognozy powyżej 2-3 dni mogą ulec zmianie.',
    },
    ru: {
        feelsLike: 'Ощущается', humidity: 'Влажность', wind: 'Ветер',
        pressure: 'Давление', sunrise: 'Восход', sunset: 'Закат',
        forecastTitle: 'Прогноз на 15 Дней', searchPlaceholder: 'Поиск города...',
        welcomeTitle: 'Добро пожаловать в Weather App', welcomeDesc: 'Найдите город или разрешите доступ к местоположению.',
        loading: 'Загрузка...', alertsTitle: 'Погодные Предупреждения',
        alertsNone: 'Нет активных предупреждений', severityExtreme: 'Экстремальный',
        severityWarning: 'Предупреждение', severityWatch: 'Наблюдение', severityAdvisory: 'Уведомление',
        errorNotFound: 'Город не найден. Попробуйте снова.',
        errorGeneric: 'Что-то пошло не так. Попробуйте снова.',
        errorLocation: 'Не удалось определить местоположение. Найдите город.',
        footer: 'Weather App', forecastNote: 'Прогнозы на 2-3 дня могут измениться.',
    },
    ja: {
        feelsLike: '体感温度', humidity: '湿度', wind: '風',
        pressure: '気圧', sunrise: '日の出', sunset: '日の入り',
        forecastTitle: '15日間予報', searchPlaceholder: '都市を検索...',
        welcomeTitle: 'Weather Appへようこそ', welcomeDesc: '都市を検索するか、位置情報へのアクセスを許可してください。',
        loading: '読み込み中...', alertsTitle: '気象警報',
        alertsNone: 'アクティブな気象警報はありません', severityExtreme: '極端',
        severityWarning: '警報', severityWatch: '注意', severityAdvisory: 'アドバイザリー',
        errorNotFound: '都市が見つかりませんでした。もう一度お試しください。',
        errorGeneric: 'エラーが発生しました。もう一度お試しください。',
        errorLocation: '位置情報を取得できませんでした。都市を検索してください。',
        footer: 'Weather App', forecastNote: '2-3日以上の予報は変更される可能性があります。',
    },
    ko: {
        feelsLike: '체감온도', humidity: '습도', wind: '바람',
        pressure: '기압', sunrise: '일출', sunset: '일몰',
        forecastTitle: '15일 예보', searchPlaceholder: '도시 검색...',
        welcomeTitle: 'Weather App에 오신 것을 환영합니다', welcomeDesc: '도시를 검색하거나 위치 접근을 허용하세요.',
        loading: '로딩 중...', alertsTitle: '기상 특보',
        alertsNone: '활성 기상 특보 없음', severityExtreme: '극한',
        severityWarning: '경고', severityWatch: '주의', severityAdvisory: '권고',
        errorNotFound: '도시를 찾을 수 없습니다. 다시 시도하세요.',
        errorGeneric: '문제가 발생했습니다. 다시 시도하세요.',
        errorLocation: '위치를 가져올 수 없습니다. 도시를 검색하세요.',
        footer: 'Weather App', forecastNote: '2-3일 이후의 예보는 변경될 수 있습니다.',
    },
    zh: {
        feelsLike: '体感温度', humidity: '湿度', wind: '风',
        pressure: '气压', sunrise: '日出', sunset: '日落',
        forecastTitle: '15天预报', searchPlaceholder: '搜索城市...',
        welcomeTitle: '欢迎使用天气应用', welcomeDesc: '搜索城市或允许位置访问。',
        loading: '加载中...', alertsTitle: '天气警报',
        alertsNone: '暂无活跃天气警报', severityExtreme: '极端',
        severityWarning: '警告', severityWatch: '注意', severityAdvisory: '建议',
        errorNotFound: '未找到城市。请重试。',
        errorGeneric: '出错了。请重试。',
        errorLocation: '无法获取您的位置。请搜索城市。',
        footer: '天气应用', forecastNote: '超过2-3天的预报可能会发生变化。',
    },
    ar: {
        feelsLike: 'الإحساس', humidity: 'الرطوبة', wind: 'الرياح',
        pressure: 'الضغط', sunrise: 'الشروق', sunset: 'الغروب',
        forecastTitle: 'توقعات 15 يوم', searchPlaceholder: 'ابحث عن مدينة...',
        welcomeTitle: 'مرحبًا بك في تطبيق الطقس', welcomeDesc: 'ابحث عن مدينة أو اسمح بالوصول إلى الموقع.',
        loading: 'جارٍ التحميل...', alertsTitle: 'تنبيهات الطقس',
        alertsNone: 'لا توجد تنبيهات طقس نشطة', severityExtreme: 'شديد',
        severityWarning: 'تحذير', severityWatch: 'مراقبة', severityAdvisory: 'إرشاد',
        errorNotFound: 'المدينة غير موجودة. حاول مرة أخرى.',
        errorGeneric: 'حدث خطأ ما. حاول مرة أخرى.',
        errorLocation: 'تعذر الحصول على موقعك. ابحث عن مدينة.',
        footer: 'تطبيق الطقس', forecastNote: 'التوقعات لأكثر من 2-3 أيام قابلة للتغيير.',
    },
    hi: {
        feelsLike: 'अनुभूति', humidity: 'आर्द्रता', wind: 'हवा',
        pressure: 'दबाव', sunrise: 'सूर्योदय', sunset: 'सूर्यास्त',
        forecastTitle: '15 दिन का पूर्वानुमान', searchPlaceholder: 'शहर खोजें...',
        welcomeTitle: 'Weather App में आपका स्वागत है', welcomeDesc: 'शहर खोजें या स्थान एक्सेस की अनुमति दें।',
        loading: 'लोड हो रहा है...', alertsTitle: 'मौसम अलर्ट',
        alertsNone: 'कोई सक्रिय मौसम अलर्ट नहीं', severityExtreme: 'गंभीर',
        severityWarning: 'चेतावनी', severityWatch: 'निगरानी', severityAdvisory: 'सलाह',
        errorNotFound: 'शहर नहीं मिला। कृपया पुनः प्रयास करें।',
        errorGeneric: 'कुछ गलत हो गया। कृपया पुनः प्रयास करें।',
        errorLocation: 'आपका स्थान प्राप्त नहीं हो सका। कृपया शहर खोजें।',
        footer: 'Weather App', forecastNote: '2-3 दिनों से अधिक के पूर्वानुमान बदल सकते हैं।',
    },
    tr: {
        feelsLike: 'Hissedilen', humidity: 'Nem', wind: 'Rüzgar',
        pressure: 'Basınç', sunrise: 'Gün Doğumu', sunset: 'Gün Batımı',
        forecastTitle: '15 Günlük Tahmin', searchPlaceholder: 'Şehir ara...',
        welcomeTitle: 'Weather App\'a Hoş Geldiniz', welcomeDesc: 'Bir şehir arayın veya konum erişimine izin verin.',
        loading: 'Yükleniyor...', alertsTitle: 'Hava Uyarıları',
        alertsNone: 'Aktif hava uyarısı yok', severityExtreme: 'Aşırı',
        severityWarning: 'Uyarı', severityWatch: 'İzleme', severityAdvisory: 'Tavsiye',
        errorNotFound: 'Şehir bulunamadı. Lütfen tekrar deneyin.',
        errorGeneric: 'Bir şeyler yanlış gitti. Lütfen tekrar deneyin.',
        errorLocation: 'Konumunuz alınamadı. Lütfen bir şehir arayın.',
        footer: 'Weather App', forecastNote: '2-3 gün ötesindeki tahminler değişebilir.',
    },
    sv: {
        feelsLike: 'Känns som', humidity: 'Luftfuktighet', wind: 'Vind',
        pressure: 'Tryck', sunrise: 'Soluppgång', sunset: 'Solnedgång',
        forecastTitle: '15-Dagars Prognos', searchPlaceholder: 'Sök stad...',
        welcomeTitle: 'Välkommen till Weather App', welcomeDesc: 'Sök efter en stad eller tillåt platsåtkomst.',
        loading: 'Laddar...', alertsTitle: 'Vädervarningar',
        alertsNone: 'Inga aktiva vädervarningar', severityExtreme: 'Extrem',
        severityWarning: 'Varning', severityWatch: 'Bevakning', severityAdvisory: 'Rådgivning',
        errorNotFound: 'Staden hittades inte. Försök igen.',
        errorGeneric: 'Något gick fel. Försök igen.',
        errorLocation: 'Kunde inte hitta din plats. Sök efter en stad.',
        footer: 'Weather App', forecastNote: 'Prognoser längre än 2-3 dagar kan ändras.',
    },
    da: {
        feelsLike: 'Føles som', humidity: 'Luftfugtighed', wind: 'Vind',
        pressure: 'Tryk', sunrise: 'Solopgang', sunset: 'Solnedgang',
        forecastTitle: '15-Dages Prognose', searchPlaceholder: 'Søg by...',
        welcomeTitle: 'Velkommen til Weather App', welcomeDesc: 'Søg efter en by eller tillad placering.',
        loading: 'Indlæser...', alertsTitle: 'Vejradvarsler',
        alertsNone: 'Ingen aktive vejradvarsler', severityExtreme: 'Ekstrem',
        severityWarning: 'Advarsel', severityWatch: 'Overvågning', severityAdvisory: 'Anbefaling',
        errorNotFound: 'By ikke fundet. Prøv igen.',
        errorGeneric: 'Noget gik galt. Prøv igen.',
        errorLocation: 'Kunne ikke få din placering. Søg efter en by.',
        footer: 'Weather App', forecastNote: 'Prognoser ud over 2-3 dage kan ændre sig.',
    },
    fi: {
        feelsLike: 'Tuntuu kuin', humidity: 'Kosteus', wind: 'Tuuli',
        pressure: 'Paine', sunrise: 'Auringonnousu', sunset: 'Auringonlasku',
        forecastTitle: '15 Päivän Ennuste', searchPlaceholder: 'Hae kaupunkia...',
        welcomeTitle: 'Tervetuloa Weather Appiin', welcomeDesc: 'Hae kaupunkia tai salli sijaintisi.',
        loading: 'Ladataan...', alertsTitle: 'Säävaroitukset',
        alertsNone: 'Ei aktiivisia säävaroituksia', severityExtreme: 'Äärimmäinen',
        severityWarning: 'Varoitus', severityWatch: 'Seuranta', severityAdvisory: 'Ohje',
        errorNotFound: 'Kaupunkia ei löytynyt. Yritä uudelleen.',
        errorGeneric: 'Jokin meni pieleen. Yritä uudelleen.',
        errorLocation: 'Sijaintiasi ei voitu hakea. Hae kaupunkia.',
        footer: 'Weather App', forecastNote: 'Yli 2-3 päivän ennusteet voivat muuttua.',
    },
    no: {
        feelsLike: 'Føles som', humidity: 'Luftfuktighet', wind: 'Vind',
        pressure: 'Trykk', sunrise: 'Soloppgang', sunset: 'Solnedgang',
        forecastTitle: '15-Dagers Varsel', searchPlaceholder: 'Søk by...',
        welcomeTitle: 'Velkommen til Weather App', welcomeDesc: 'Søk etter en by eller tillat stedstilgang.',
        loading: 'Laster...', alertsTitle: 'Værvarsler',
        alertsNone: 'Ingen aktive værvarsler', severityExtreme: 'Ekstrem',
        severityWarning: 'Advarsel', severityWatch: 'Overvåking', severityAdvisory: 'Råd',
        errorNotFound: 'By ikke funnet. Prøv igjen.',
        errorGeneric: 'Noe gikk galt. Prøv igjen.',
        errorLocation: 'Kunne ikke få posisjonen din. Søk etter en by.',
        footer: 'Weather App', forecastNote: 'Varsler utover 2-3 dager kan endres.',
    },
    cs: {
        feelsLike: 'Pocitová teplota', humidity: 'Vlhkost', wind: 'Vítr',
        pressure: 'Tlak', sunrise: 'Východ slunce', sunset: 'Západ slunce',
        forecastTitle: '15denní Předpověď', searchPlaceholder: 'Hledat město...',
        welcomeTitle: 'Vítejte v Weather App', welcomeDesc: 'Vyhledejte město nebo povolte přístup k poloze.',
        loading: 'Načítání...', alertsTitle: 'Výstrahy Počasí',
        alertsNone: 'Žádné aktivní výstrahy', severityExtreme: 'Extrémní',
        severityWarning: 'Varování', severityWatch: 'Sledování', severityAdvisory: 'Doporučení',
        errorNotFound: 'Město nenalezeno. Zkuste to znovu.',
        errorGeneric: 'Něco se pokazilo. Zkuste to znovu.',
        errorLocation: 'Nelze získat vaši polohu. Vyhledejte město.',
        footer: 'Weather App', forecastNote: 'Předpovědi na více než 2-3 dny se mohou změnit.',
    },
    ro: {
        feelsLike: 'Perceput', humidity: 'Umiditate', wind: 'Vânt',
        pressure: 'Presiune', sunrise: 'Răsărit', sunset: 'Apus',
        forecastTitle: 'Prognoză 15 Zile', searchPlaceholder: 'Caută oraș...',
        welcomeTitle: 'Bun venit la Weather App', welcomeDesc: 'Căutați un oraș sau permiteți accesul la locație.',
        loading: 'Se încarcă...', alertsTitle: 'Alerte Meteo',
        alertsNone: 'Nicio alertă meteo activă', severityExtreme: 'Extrem',
        severityWarning: 'Pericol', severityWatch: 'Monitorizare', severityAdvisory: 'Aviz',
        errorNotFound: 'Orașul nu a fost găsit. Încercați din nou.',
        errorGeneric: 'Ceva a mers greșit. Încercați din nou.',
        errorLocation: 'Nu s-a putut obține locația. Căutați un oraș.',
        footer: 'Weather App', forecastNote: 'Prognozele peste 2-3 zile se pot modifica.',
    },
    el: {
        feelsLike: 'Αίσθηση', humidity: 'Υγρασία', wind: 'Άνεμος',
        pressure: 'Πίεση', sunrise: 'Ανατολή', sunset: 'Δύση',
        forecastTitle: 'Πρόβλεψη 15 Ημερών', searchPlaceholder: 'Αναζήτηση πόλης...',
        welcomeTitle: 'Καλώς ήρθατε στο Weather App', welcomeDesc: 'Αναζητήστε μια πόλη ή επιτρέψτε την πρόσβαση τοποθεσίας.',
        loading: 'Φόρτωση...', alertsTitle: 'Μετεωρολογικές Προειδοποιήσεις',
        alertsNone: 'Καμία ενεργή προειδοποίηση', severityExtreme: 'Ακραίο',
        severityWarning: 'Προειδοποίηση', severityWatch: 'Παρακολούθηση', severityAdvisory: 'Συμβουλή',
        errorNotFound: 'Η πόλη δεν βρέθηκε. Δοκιμάστε ξανά.',
        errorGeneric: 'Κάτι πήγε στραβά. Δοκιμάστε ξανά.',
        errorLocation: 'Δεν ήταν δυνατή η λήψη της τοποθεσίας σας. Αναζητήστε μια πόλη.',
        footer: 'Weather App', forecastNote: 'Οι προβλέψεις πέραν των 2-3 ημερών υπόκεινται σε αλλαγές.',
    },
    th: {
        feelsLike: 'รู้สึกเหมือน', humidity: 'ความชื้น', wind: 'ลม',
        pressure: 'ความดัน', sunrise: 'พระอาทิตย์ขึ้น', sunset: 'พระอาทิตย์ตก',
        forecastTitle: 'พยากรณ์ 15 วัน', searchPlaceholder: 'ค้นหาเมือง...',
        welcomeTitle: 'ยินดีต้อนรับสู่ Weather App', welcomeDesc: 'ค้นหาเมืองหรืออนุญาตการเข้าถึงตำแหน่งที่ตั้ง',
        loading: 'กำลังโหลด...', alertsTitle: 'การแจ้งเตือนสภาพอากาศ',
        alertsNone: 'ไม่มีการแจ้งเตือนสภาพอากาศที่ใช้งานอยู่', severityExtreme: 'รุนแรงมาก',
        severityWarning: 'เตือนภัย', severityWatch: 'เฝ้าระวัง', severityAdvisory: 'แนะนำ',
        errorNotFound: 'ไม่พบเมือง กรุณาลองอีกครั้ง',
        errorGeneric: 'เกิดข้อผิดพลาด กรุณาลองอีกครั้ง',
        errorLocation: 'ไม่สามารถรับตำแหน่งของคุณได้ กรุณาค้นหาเมือง',
        footer: 'Weather App', forecastNote: 'การพยากรณ์เกิน 2-3 วันอาจมีการเปลี่ยนแปลง',
    },
    vi: {
        feelsLike: 'Cảm giác như', humidity: 'Độ ẩm', wind: 'Gió',
        pressure: 'Áp suất', sunrise: 'Bình minh', sunset: 'Hoàng hôn',
        forecastTitle: 'Dự báo 15 Ngày', searchPlaceholder: 'Tìm kiếm thành phố...',
        welcomeTitle: 'Chào mừng đến với Weather App', welcomeDesc: 'Tìm kiếm thành phố hoặc cho phép truy cập vị trí.',
        loading: 'Đang tải...', alertsTitle: 'Cảnh báo Thời tiết',
        alertsNone: 'Không có cảnh báo thời tiết nào đang hoạt động', severityExtreme: 'Cực kỳ',
        severityWarning: 'Nguy hiểm', severityWatch: 'Theo dõi', severityAdvisory: 'Khuyến cáo',
        errorNotFound: 'Không tìm thấy thành phố. Vui lòng thử lại.',
        errorGeneric: 'Đã xảy ra lỗi. Vui lòng thử lại.',
        errorLocation: 'Không thể lấy vị trí của bạn. Vui lòng tìm kiếm thành phố.',
        footer: 'Weather App', forecastNote: 'Dự báo sau 2-3 ngày có thể thay đổi.',
    },
    he: {
        feelsLike: 'מרגיש כמו', humidity: 'לחות', wind: 'רוח',
        pressure: 'לחץ', sunrise: 'זריחה', sunset: 'שקיעה',
        forecastTitle: 'תחזית 15 יום', searchPlaceholder: 'חפש עיר...',
        welcomeTitle: 'ברוכים הבאים ל-Weather App', welcomeDesc: 'חפש עיר או אפשר גישה למיקום.',
        loading: 'טוען...', alertsTitle: 'התראות מזג אוויר',
        alertsNone: 'אין התראות מזג אוויר פעילות', severityExtreme: 'קיצוני',
        severityWarning: 'אזהרה', severityWatch: 'מעקב', severityAdvisory: 'ייעוץ',
        errorNotFound: 'העיר לא נמצאה. נסה שוב.',
        errorGeneric: 'משהו השתבש. נסה שוב.',
        errorLocation: 'לא ניתן לקבל את מיקומך. חפש עיר.',
        footer: 'Weather App', forecastNote: 'תחזיות מעבר ל-2-3 ימים עשויות להשתנות.',
    },
};

const i18nWeatherLabels = {
    pt: { rain: 'Chuva', windGusts: 'Rajadas' },
    es: { rain: 'Lluvia', windGusts: 'Ráfagas' },
    fr: { rain: 'Pluie', windGusts: 'Rafales' },
    de: { rain: 'Regen', windGusts: 'Böen' },
    it: { rain: 'Pioggia', windGusts: 'Raffiche' },
    nl: { rain: 'Regen', windGusts: 'Windstoten' },
    pl: { rain: 'Deszcz', windGusts: 'Porywy' },
    ru: { rain: 'Дождь', windGusts: 'Порывы' },
    ja: { rain: '雨', windGusts: '突風' },
    ko: { rain: '비', windGusts: '돌풍' },
    zh: { rain: '雨', windGusts: '阵风' },
    ar: { rain: 'مطر', windGusts: 'هبات رياح' },
    hi: { rain: 'बारिश', windGusts: 'झोंके' },
    tr: { rain: 'Yağmur', windGusts: 'Rüzgar Hamleleri' },
    sv: { rain: 'Regn', windGusts: 'Vindbyar' },
    da: { rain: 'Regn', windGusts: 'Vindstød' },
    fi: { rain: 'Sade', windGusts: 'Puuskat' },
    no: { rain: 'Regn', windGusts: 'Vindkast' },
    cs: { rain: 'Déšť', windGusts: 'Nárazový vítr' },
    ro: { rain: 'Ploaie', windGusts: 'Rafale' },
    el: { rain: 'Βροχή', windGusts: 'Ριπές' },
    th: { rain: 'ฝน', windGusts: 'ลมกระโชก' },
    vi: { rain: 'Mưa', windGusts: 'Gió giật' },
    he: { rain: 'גשם', windGusts: 'משבי רוח' },
};

const i18n = {};
for (const code of ['en', ...Object.keys(i18nTranslations)]) {
    i18n[code] = { ...i18nBase, ...i18nWeatherLabels[code], ...i18nTranslations[code] };
}

const alertEventTranslations = {
    en: {
        'geada': 'Frost',
        'chuvas intensas': 'Heavy Rain',
        'tempestade': 'Thunderstorm',
        'onda de calor': 'Heat Wave',
        'vendaval': 'Gale',
        'alagamento': 'Flooding',
        'granizo': 'Hail',
        'baixa umidade': 'Low Humidity',
        'onda de frio': 'Cold Snap',
        'nevoeiro': 'Dense Fog',
        'seca': 'Drought',
        'perigo potencial': 'Potential Danger',
    },
    pt: {
        'geada': 'Geada',
        'chuvas intensas': 'Chuvas Intensas',
        'tempestade': 'Tempestade',
        'onda de calor': 'Onda de Calor',
        'vendaval': 'Vendaval',
        'alagamento': 'Alagamento',
        'granizo': 'Granizo',
        'baixa umidade': 'Baixa Umidade',
        'onda de frio': 'Onda de Frio',
        'nevoeiro': 'Nevoeiro',
        'seca': 'Seca',
        'perigo potencial': 'Perigo Potencial',
    },
    es: {
        'geada': 'Helada',
        'chuvas intensas': 'Lluvias Intensas',
        'tempestade': 'Tormenta',
        'onda de calor': 'Ola de Calor',
        'vendaval': 'Vendaval',
        'alagamento': 'Inundación',
        'granizo': 'Granizo',
        'baixa umidade': 'Baja Humedad',
        'onda de frio': 'Ola de Frío',
        'nevoeiro': 'Niebla Densa',
        'seca': 'Sequía',
        'perigo potencial': 'Peligro Potencial',
    },
    fr: { 'geada': 'Gel', 'chuvas intensas': 'Pluies Intenses', 'tempestade': 'Orage', 'onda de calor': 'Canicule', 'vendaval': 'Coup de Vent', 'alagamento': 'Inondation', 'granizo': 'Grêle', 'baixa umidade': 'Faible Humidité', 'onda de frio': 'Vague de Froid', 'nevoeiro': 'Brouillard Dense', 'seca': 'Sécheresse', 'perigo potencial': 'Danger Potentiel' },
    de: { 'geada': 'Frost', 'chuvas intensas': 'Starkregen', 'tempestade': 'Gewitter', 'onda de calor': 'Hitzewelle', 'vendaval': 'Sturm', 'alagamento': 'Überschwemmung', 'granizo': 'Hagel', 'baixa umidade': 'Niedrige Luftfeuchtigkeit', 'onda de frio': 'Kältewelle', 'nevoeiro': 'Dichter Nebel', 'seca': 'Dürre', 'perigo potencial': 'Potenzielle Gefahr' },
    it: { 'geada': 'Gelata', 'chuvas intensas': 'Piogge Intense', 'tempestade': 'Tempesta', 'onda de calor': 'Ondata di Calore', 'vendaval': 'Burrasca', 'alagamento': 'Allagamento', 'granizo': 'Grandine', 'baixa umidade': 'Bassa Umidità', 'onda de frio': 'Ondata di Freddo', 'nevoeiro': 'Nebbia Fitta', 'seca': 'Siccità', 'perigo potencial': 'Pericolo Potenziale' },
    nl: { 'geada': 'Vorst', 'chuvas intensas': 'Zware Regen', 'tempestade': 'Onweer', 'onda de calor': 'Hittegolf', 'vendaval': 'Storm', 'alagamento': 'Overstroming', 'granizo': 'Hagel', 'baixa umidade': 'Lage Luchtvochtigheid', 'onda de frio': 'Koudegolf', 'nevoeiro': 'Dichte Mist', 'seca': 'Droogte', 'perigo potencial': 'Potentieel Gevaar' },
    pl: { 'geada': 'Mróz', 'chuvas intensas': 'Intensywne Opady', 'tempestade': 'Burza', 'onda de calor': 'Fala Upałów', 'vendaval': 'Sztorm', 'alagamento': 'Powódź', 'granizo': 'Grad', 'baixa umidade': 'Niska Wilgotność', 'onda de frio': 'Fala Chłodu', 'nevoeiro': 'Gęsta Mgła', 'seca': 'Susza', 'perigo potencial': 'Potencjalne Zagrożenie' },
    ru: { 'geada': 'Мороз', 'chuvas intensas': 'Сильные Дожди', 'tempestade': 'Гроза', 'onda de calor': 'Жара', 'vendaval': 'Шторм', 'alagamento': 'Наводнение', 'granizo': 'Град', 'baixa umidade': 'Низкая Влажность', 'onda de frio': 'Холодная Волна', 'nevoeiro': 'Густой Туман', 'seca': 'Засуха', 'perigo potencial': 'Потенциальная Опасность' },
    ja: { 'geada': '霜', 'chuvas intensas': '大雨', 'tempestade': '雷雨', 'onda de calor': '熱波', 'vendaval': '強風', 'alagamento': '洪水', 'granizo': '雹', 'baixa umidade': '低湿度', 'onda de frio': '寒波', 'nevoeiro': '濃霧', 'seca': '干ばつ', 'perigo potencial': '潜在的な危険' },
    ko: { 'geada': '서리', 'chuvas intensas': '폭우', 'tempestade': '뇌우', 'onda de calor': '폭염', 'vendaval': '강풍', 'alagamento': '홍수', 'granizo': '우박', 'baixa umidade': '낮은 습도', 'onda de frio': '한파', 'nevoeiro': '짙은 안개', 'seca': '가뭄', 'perigo potencial': '잠재적 위험' },
    zh: { 'geada': '霜冻', 'chuvas intensas': '强降雨', 'tempestade': '雷暴', 'onda de calor': '热浪', 'vendaval': '大风', 'alagamento': '洪水', 'granizo': '冰雹', 'baixa umidade': '低湿度', 'onda de frio': '寒潮', 'nevoeiro': '浓雾', 'seca': '干旱', 'perigo potencial': '潜在危险' },
    ar: { 'geada': 'صقيع', 'chuvas intensas': 'أمطار غزيرة', 'tempestade': 'عاصفة رعدية', 'onda de calor': 'موجة حر', 'vendaval': 'رياح عاتية', 'alagamento': 'فيضان', 'granizo': 'برد', 'baixa umidade': 'رطوبة منخفضة', 'onda de frio': 'موجة برد', 'nevoeiro': 'ضباب كثيف', 'seca': 'جفاف', 'perigo potencial': 'خطر محتمل' },
    hi: { 'geada': 'पाला', 'chuvas intensas': 'भारी वर्षा', 'tempestade': 'तूफान', 'onda de calor': 'गर्मी की लहर', 'vendaval': 'आंधी', 'alagamento': 'बाढ़', 'granizo': 'ओला', 'baixa umidade': 'कम नमी', 'onda de frio': 'शीत लहर', 'nevoeiro': 'घना कोहरा', 'seca': 'सूखा', 'perigo potencial': 'संभावित खतरा' },
    tr: { 'geada': 'Don', 'chuvas intensas': 'Şiddetli Yağmur', 'tempestade': 'Fırtına', 'onda de calor': 'Sıcak Dalgası', 'vendaval': 'Fırtına', 'alagamento': 'Sel', 'granizo': 'Dolu', 'baixa umidade': 'Düşük Nem', 'onda de frio': 'Soğuk Dalgası', 'nevoeiro': 'Yoğun Sis', 'seca': 'Kuraklık', 'perigo potencial': 'Potansiyel Tehlike' },
    sv: { 'geada': 'Frost', 'chuvas intensas': 'Kraftigt Regn', 'tempestade': 'Åska', 'onda de calor': 'Värmebölja', 'vendaval': 'Storm', 'alagamento': 'Översvämning', 'granizo': 'Hagel', 'baixa umidade': 'Låg Fuktighet', 'onda de frio': 'Köldknäpp', 'nevoeiro': 'Tät Dimma', 'seca': 'Torka', 'perigo potencial': 'Potentiell Fara' },
    da: { 'geada': 'Frost', 'chuvas intensas': 'Kraftig Regn', 'tempestade': 'Tordenvejr', 'onda de calor': 'Hedebølge', 'vendaval': 'Storm', 'alagamento': 'Oversvømmelse', 'granizo': 'Hagl', 'baixa umidade': 'Lav Fugtighed', 'onda de frio': 'Kuldebølge', 'nevoeiro': 'Tæt Tåge', 'seca': 'Tørke', 'perigo potencial': 'Potentiel Fare' },
    fi: { 'geada': 'Hallaa', 'chuvas intensas': 'Rankka Sade', 'tempestade': 'Ukkonen', 'onda de calor': 'Lämpöaalto', 'vendaval': 'Myrsky', 'alagamento': 'Tulva', 'granizo': 'Raekuuro', 'baixa umidade': 'Alhainen Kosteus', 'onda de frio': 'Kylmäaalto', 'nevoeiro': 'Tiheä Sumu', 'seca': 'Kuivuus', 'perigo potencial': 'Mahdollinen Vaara' },
    no: { 'geada': 'Frost', 'chuvas intensas': 'Kraftig Regn', 'tempestade': 'Tordenvær', 'onda de calor': 'Hetebølge', 'vendaval': 'Storm', 'alagamento': 'Oversvømmelse', 'granizo': 'Hagl', 'baixa umidade': 'Lav Fuktighet', 'onda de frio': 'Kuldebølge', 'nevoeiro': 'Tett Tåke', 'seca': 'Tørke', 'perigo potencial': 'Potensiell Fare' },
    cs: { 'geada': 'Mráz', 'chuvas intensas': 'Silný Déšť', 'tempestade': 'Bouřka', 'onda de calor': 'Vlna Veder', 'vendaval': 'Vichřice', 'alagamento': 'Záplava', 'granizo': 'Kroupy', 'baixa umidade': 'Nízká Vlhkost', 'onda de frio': 'Studená Vlna', 'nevoeiro': 'Hustá Mlha', 'seca': 'Sucho', 'perigo potencial': 'Potenciální Nebezpečí' },
    ro: { 'geada': 'Îngheț', 'chuvas intensas': 'Ploi Torențiale', 'tempestade': 'Furtună', 'onda de calor': 'Val de Căldură', 'vendaval': 'Vijelie', 'alagamento': 'Inundație', 'granizo': 'Grindină', 'baixa umidade': 'Umiditate Scăzută', 'onda de frio': 'Val de Frig', 'nevoeiro': 'Ceață Densă', 'seca': 'Secetă', 'perigo potencial': 'Pericol Potențial' },
    el: { 'geada': 'Παγετός', 'chuvas intensas': 'Έντονες Βροχές', 'tempestade': 'Καταιγίδα', 'onda de calor': 'Καύσωνας', 'vendaval': 'Θύελλα', 'alagamento': 'Πλημμύρα', 'granizo': 'Χαλάζι', 'baixa umidade': 'Χαμηλή Υγρασία', 'onda de frio': 'Ψύχος', 'nevoeiro': 'Πυκνή Ομίχλη', 'seca': 'Ξηρασία', 'perigo potencial': 'Πιθανός Κίνδυνος' },
    th: { 'geada': 'น้ำค้างแข็ง', 'chuvas intensas': 'ฝนตกหนัก', 'tempestade': 'พายุฝนฟ้าคะนอง', 'onda de calor': 'คลื่นความร้อน', 'vendaval': 'พายุลมแรง', 'alagamento': 'น้ำท่วม', 'granizo': 'ลูกเห็บ', 'baixa umidade': 'ความชื้นต่ำ', 'onda de frio': 'คลื่นความหนาว', 'nevoeiro': 'หมอกหนา', 'seca': 'ภัยแล้ง', 'perigo potencial': 'อันตรายที่อาจเกิดขึ้น' },
    vi: { 'geada': 'Sương Giá', 'chuvas intensas': 'Mưa Lớn', 'tempestade': 'Dông Bão', 'onda de calor': 'Đợt Nắng Nóng', 'vendaval': 'Gió Mạnh', 'alagamento': 'Ngập Lụt', 'granizo': 'Mưa Đá', 'baixa umidade': 'Độ Ẩm Thấp', 'onda de frio': 'Đợt Lạnh', 'nevoeiro': 'Sương Mù Dày Đặc', 'seca': 'Hạn Hán', 'perigo potencial': 'Nguy Hiểm Tiềm Ẩn' },
    he: { 'geada': 'כפור', 'chuvas intensas': 'גשמים עזים', 'tempestade': 'סופת רעמים', 'onda de calor': 'גל חום', 'vendaval': 'רוח חזקה', 'alagamento': 'שיטפון', 'granizo': 'ברד', 'baixa umidade': 'לחות נמוכה', 'onda de frio': 'גל קור', 'nevoeiro': 'ערפל כבד', 'seca': 'בצורת', 'perigo potencial': 'סכנה פוטנציאלית' },
};

function translateAlertText(text) {
    const lang = state.lang || 'en';
    const translations = alertEventTranslations[lang] || alertEventTranslations.en;
    const lower = text.toLowerCase().trim();
    for (const [ptPhrase, translated] of Object.entries(translations)) {
        if (lower.includes(ptPhrase)) {
            return text.replace(new RegExp(ptPhrase, 'gi'), translated);
        }
    }
    return text;
}

const brStates = {
    'acre': 'AC', 'alagoas': 'AL', 'amapá': 'AP', 'amazonas': 'AM', 'bahia': 'BA',
    'ceará': 'CE', 'distrito federal': 'DF', 'espírito santo': 'ES', 'goiás': 'GO',
    'maranhão': 'MA', 'mato grosso': 'MT', 'mato grosso do sul': 'MS', 'minas gerais': 'MG',
    'pará': 'PA', 'paraíba': 'PB', 'paraná': 'PR', 'pernambuco': 'PE', 'piauí': 'PI',
    'rio de janeiro': 'RJ', 'rio grande do norte': 'RN', 'rio grande do sul': 'RS',
    'rondônia': 'RO', 'roraima': 'RR', 'santa catarina': 'SC', 'são paulo': 'SP',
    'sergipe': 'SE', 'tocantins': 'TO',
};

const usStates = {
    'alabama': 'AL', 'alaska': 'AK', 'arizona': 'AZ', 'arkansas': 'AR', 'california': 'CA',
    'colorado': 'CO', 'connecticut': 'CT', 'delaware': 'DE', 'florida': 'FL', 'georgia': 'GA',
    'hawaii': 'HI', 'idaho': 'ID', 'illinois': 'IL', 'indiana': 'IN', 'iowa': 'IA',
    'kansas': 'KS', 'kentucky': 'KY', 'louisiana': 'LA', 'maine': 'ME', 'maryland': 'MD',
    'massachusetts': 'MA', 'michigan': 'MI', 'minnesota': 'MN', 'mississippi': 'MS',
    'missouri': 'MO', 'montana': 'MT', 'nebraska': 'NE', 'nevada': 'NV', 'new hampshire': 'NH',
    'new jersey': 'NJ', 'new mexico': 'NM', 'new york': 'NY', 'north carolina': 'NC',
    'north dakota': 'ND', 'ohio': 'OH', 'oklahoma': 'OK', 'oregon': 'OR', 'pennsylvania': 'PA',
    'rhode island': 'RI', 'south carolina': 'SC', 'south dakota': 'SD', 'tennessee': 'TN',
    'texas': 'TX', 'utah': 'UT', 'vermont': 'VT', 'virginia': 'VA', 'washington': 'WA',
    'west virginia': 'WV', 'wisconsin': 'WI', 'wyoming': 'WY',
};

function extractStateCode(country, admin1) {
    if (!admin1) return null;
    const key = admin1.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (country === 'BR') return brStates[key] || null;
    if (country === 'US') return usStates[key] || null;
    return null;
}

const cityOverride = {
    'miami': 'US',
    'new york': 'US',
    'los angeles': 'US',
    'chicago': 'US',
    'houston': 'US',
    'phoenix': 'US',
    'philadelphia': 'US',
    'san antonio': 'US',
    'san diego': 'US',
    'dallas': 'US',
    'austin': 'US',
    'san jose': 'US',
    'jacksonville': 'US',
    'san francisco': 'US',
    'indianapolis': 'US',
    'columbus': 'US',
    'charlotte': 'US',
    'detroit': 'US',
    'el paso': 'US',
    'seattle': 'US',
    'denver': 'US',
    'nashville': 'US',
    'baltimore': 'US',
    'boston': 'US',
    'portland': 'US',
    'las vegas': 'US',
    'milwaukee': 'US',
    'albuquerque': 'US',
    'tucson': 'US',
    'fresno': 'US',
    'sacramento': 'US',
    'atlanta': 'US',
    'kansas city': 'US',
    'omaha': 'US',
    'raleigh': 'US',
    'minneapolis': 'US',
    'tampa': 'US',
    'new orleans': 'US',
    'cleveland': 'US',
    'honolulu': 'US',
    'virginia beach': 'US',
    'oakland': 'US',
    'orlando': 'US',
    'cincinnati': 'US',
    'pittsburgh': 'US',
    'st louis': 'US',
    'st. louis': 'US',
    'richmond': 'US',
    'salt lake city': 'US',
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
    'santa rosa': 'BR',
    'london': 'GB',
    'manchester': 'GB',
    'birmingham': 'GB',
    'liverpool': 'GB',
    'glasgow': 'GB',
    'paris': 'FR',
    'marseille': 'FR',
    'lyon': 'FR',
    'toulouse': 'FR',
    'tokyo': 'JP',
    'osaka': 'JP',
    'kyoto': 'JP',
    'sydney': 'AU',
    'melbourne': 'AU',
    'brisbane': 'AU',
    'perth': 'AU',
    'berlin': 'DE',
    'hamburg': 'DE',
    'munich': 'DE',
    'cologne': 'DE',
    'frankfurt': 'DE',
    'madrid': 'ES',
    'barcelona': 'ES',
    'valencia': 'ES',
    'seville': 'ES',
    'lisbon': 'PT',
    'porto': 'PT',
    'rome': 'IT',
    'milan': 'IT',
    'naples': 'IT',
    'turin': 'IT',
    'amsterdam': 'NL',
    'rotterdam': 'NL',
    'brussels': 'BE',
    'vienna': 'AT',
    'prague': 'CZ',
    'dublin': 'IE',
    'stockholm': 'SE',
    'copenhagen': 'DK',
    'oslo': 'NO',
    'helsinki': 'FI',
    'warsaw': 'PL',
    'budapest': 'HU',
    'athens': 'GR',
    'istanbul': 'TR',
    'moscow': 'RU',
    'st petersburg': 'RU',
    'beijing': 'CN',
    'shanghai': 'CN',
    'hong kong': 'HK',
    'seoul': 'KR',
    'bangkok': 'TH',
    'singapore': 'SG',
    'mumbai': 'IN',
    'delhi': 'IN',
    'bangalore': 'IN',
    'dubai': 'AE',
    'abu dhabi': 'AE',
    'cairo': 'EG',
    'capetown': 'ZA',
    'cape town': 'ZA',
    'johannesburg': 'ZA',
    'toronto': 'CA',
    'vancouver': 'CA',
    'montreal': 'CA',
    'buenos aires': 'AR',
    'mexico city': 'MX',
    'bogota': 'CO',
    'santiago': 'CL',
    'lima': 'PE',
    'pequim': 'CN',
    'pequin': 'CN',
};

const coordOverride = {
    'santa rosa': { lat: -27.87083, lon: -54.48139, stateCode: 'RS' },
    'pequim': { lat: 39.9042, lon: 116.4074 },
    'pequin': { lat: 39.9042, lon: 116.4074 },
};

console.log('coordOverride loaded, keys:', Object.keys(coordOverride));

async function fetchWeather(city) {
    showLoading();
    hideError();
    hideWelcome();
    hideWeather();
    hideForecast();
    hideAlerts();

    try {
        let searchCity = city.trim();
        searchCity = searchCity.split(',')[0].trim();
        searchCity = searchCity.replace(/\s+[A-Z]{2,3}$/i, '').trim();

        const normalized = searchCity.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const overrideCountry = cityOverride[normalized] || null;

        const fixed = coordOverride[normalized];
        if (fixed) {
            state.lat = fixed.lat;
            state.lon = fixed.lon;
            state.country = overrideCountry || 'BR';
            state.cityName = searchCity.replace(/\b\w/g, c => c.toUpperCase());
            if (fixed.stateCode) state.stateCode = fixed.stateCode;
        } else {
            const geoLang = overrideCountry ? 'en' : state.lang;
            const geocodeUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(searchCity)}&count=5&language=${geoLang}&format=json`;
            const geoResp = await fetch(geocodeUrl);
            const geoData = await geoResp.json();

            if (!geoData || !geoData.results || geoData.results.length === 0) {
                hideLoading();
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
            state.stateCode = extractStateCode(state.country, best.admin1);
        }

        const openMeteoUrl = `https://api.open-meteo.com/v1/forecast?latitude=${state.lat}&longitude=${state.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,pressure_msl&daily=temperature_2m_max,temperature_2m_min,weather_code,sunrise,sunset,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max&timezone=auto&forecast_days=16`;
        const omResp = await fetch(openMeteoUrl);
        if (!omResp.ok) { hideLoading(); showError(i18n[state.lang].errorGeneric); showWelcome(); return; }
        const data = await omResp.json();

        state.weather = data;
        state.forecast = data;
        state.timezone = data.timezone;
        state.utcOffset = data.utc_offset_seconds;
        console.log('API data timezone:', data.timezone, 'utcOffset:', data.utc_offset_seconds);

        renderWeather();
        renderForecast();

        hideLoading();
        showWeather();
        showForecast();
        saveCityToStorage(searchCity);

        fetchAlerts(state.lat, state.lon, state.country, state.cityName);
        fetchRadar(state.lat, state.lon);
    } catch (err) {
        console.error(err);
        showError(i18n[state.lang].errorGeneric);
        showWelcome();
        hideLoading();
        hideSplash();
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
    const cityLower = (cityName || '').toLowerCase().trim();
    for (const key in data) {
        const item = data[key];
        if (!item || !Array.isArray(item)) continue;
        item.forEach(a => {
            if (a.municipios) {
                const munList = a.municipios.toLowerCase();
                if (stateAbbr) {
                    if (!munList.includes(` - ${stateAbbr.toLowerCase()}`)) return;
                }
                if (cityLower && stateAbbr) {
                    if (!munList.includes(cityLower)) return;
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

        const eventName = translateAlertText(a.event || 'Alert');
        const descText = translateAlertText(a.description || a.headline || '');
        const urgText = translateAlertText(a.urgency || '');
        return `<div class="alert-card ${getSeverityClass(a.severityCode)}">
            <div class="alert-head">
                <div class="alert-event">${eventName}</div>
                <div class="alert-severity">${sevLabel}</div>
            </div>
            <div class="alert-urgency">${urgText}</div>
            <div class="alert-desc">${descText}</div>
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
    const desc = getWmoDesc(code);
    document.getElementById('weatherDesc').textContent = desc;

    const night = isNight();
    const nightClear = [0, 1];
    if (night && nightClear.includes(code)) {
        document.getElementById('weatherIcon').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80" height="80"><path d="M60 15 Q85 35 80 60 Q75 85 50 80 Q35 88 20 78 Q10 65 15 50 Q18 30 40 22 Q50 12 60 15" fill="#E0E0F0"/><circle cx="65" cy="35" r="8" fill="#D0D0E8" opacity="0.3"/></svg>';
    } else {
        document.getElementById('weatherIcon').innerHTML = wmoIcons[code] || wmoIconsSimple[code] || '';
    }

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

    const precip = c.precipitation != null ? c.precipitation : (d?.precipitation_sum?.[0] ?? null);
    setText('rain', precip != null ? precip.toFixed(1) : '--');
    if (d && d.precipitation_probability_max && d.precipitation_probability_max[0] != null) {
        setText('rainProb', `${d.precipitation_probability_max[0]}%`);
    } else {
        setText('rainProb', '');
    }

    const gustSpeed = c.wind_gusts_10m != null ? c.wind_gusts_10m : 0;
    const gustVal = state.unit === 'C' ? gustSpeed.toFixed(1) : (gustSpeed * 2.237).toFixed(1);
    const gustUnit = state.unit === 'C' ? 'm/s' : 'mph';
    setText('windGusts', gustVal);
    setText('windGustsUnit', gustUnit);

    const dirDeg = c.wind_direction_10m;
    if (dirDeg != null) {
        const dirs = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
        const dirIdx = Math.round(dirDeg / 22.5) % 16;
        const arrow = getWindArrow(dirDeg);
        setText('windDir', `${arrow} ${dirs[dirIdx]} ${dirDeg}°`);
    } else {
        setText('windDir', '');
    }

    updateWeatherBackground();
    updateClock();
    applyLanguage();
}

function renderForecast() {
    const container = document.getElementById('forecastContainer');
    container.innerHTML = '';

    if (!state.forecast || !state.forecast.daily || !state.forecast.daily.time) return;

    const daily = state.forecast.daily;
    const dayNamesMap = {
        en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        pt: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        es: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
        fr: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
        de: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
        it: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
        nl: ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'],
        pl: ['Nd', 'Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb'],
        ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        ja: ['日', '月', '火', '水', '木', '金', '土'],
        ko: ['일', '월', '화', '수', '목', '금', '토'],
        zh: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        ar: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
        hi: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
        tr: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
        sv: ['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör'],
        da: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
        fi: ['Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La'],
        no: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
        cs: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'],
        ro: ['Du', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ'],
        el: ['Κυρ', 'Δευ', 'Τρί', 'Τετ', 'Πέμ', 'Παρ', 'Σάβ'],
        th: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
        vi: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
        he: ['א\'', 'ב\'', 'ג\'', 'ד\'', 'ה\'', 'ו\'', 'ש\''],
    };
    const dayNames = dayNamesMap[state.lang] || dayNamesMap.en;

    const todayStr = new Date().toISOString().split('T')[0];
    let startIdx = daily.time[0] === todayStr ? 1 : 0;

    for (let i = startIdx; i < Math.min(daily.time.length, startIdx + 15); i++) {
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

function isNight() {
    const d = state.weather?.daily;
    if (!d?.sunrise?.[0] || !d?.sunset?.[0] || !state.weather?.current?.time) return false;
    const now = state.weather.current.time;
    const rise = d.sunrise[0];
    const set = d.sunset[0];
    const getH = s => parseInt((s.split('T')[1] || s).split(':')[0]);
    const h = getH(now), rh = getH(rise), sh = getH(set);
    if (isNaN(h) || isNaN(rh) || isNaN(sh)) return false;
    return h < rh || h >= sh;
}

function formatTimeStr(dateStr) {
    if (!dateStr) return '--';
    const d = new Date(dateStr);
    return d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0');
}

function getWindArrow(deg) {
    if (deg == null) return '';
    const arrows = ['↓', '↙', '←', '↖', '↑', '↗', '→', '↘'];
    const idx = Math.round(deg / 45) % 8;
    return arrows[idx];
}

function updateClock() {
    const el = document.getElementById('localTime');
    if (!el) return;
    const now = new Date();
    const tz = state.timezone;
    if (tz) {
        try {
            const fmt = new Intl.DateTimeFormat('en', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
            el.textContent = fmt.format(now);
            return;
        } catch (e) {}
    }
    const offset = state.utcOffset;
    if (offset != null) {
        const d = new Date(now.getTime() + offset * 1000);
        const h = d.getUTCHours().toString().padStart(2, '0');
        const m = d.getUTCMinutes().toString().padStart(2, '0');
        const s = d.getUTCSeconds().toString().padStart(2, '0');
        el.textContent = `${h}:${m}:${s}`;
        return;
    }
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    const s = now.getSeconds().toString().padStart(2, '0');
    el.textContent = `${h}:${m}:${s}`;
}

// Radar state
let radarFrames = [];
let radarCurrentFrame = 0;
let radarInterval = null;
let radarPlaying = false;
let radarLoaded = false;
let radarBounds = 7;
let radarTileX = 0;
let radarTileY = 0;

async function fetchRadar(lat, lon) {
    const radarDisplay = document.getElementById('radarDisplay');
    if (!radarDisplay) return;
    try {
        const resp = await fetch(`https://api.rainviewer.com/public/weather-maps.json`);
        if (!resp.ok) return;
        const data = await resp.json();
        if (!data?.radar?.past?.length) return;
        const frames = data.radar.past.slice(-30);
        radarBounds = 7;
        radarTileX = Math.floor((lon + 180) / 360 * Math.pow(2, radarBounds));
        radarTileY = Math.floor((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, radarBounds));
        radarFrames = frames.map(f => ({
            time: f.time,
            url: `https://tilecache.rainviewer.com${f.path}/256/${radarBounds}/${radarTileX}/${radarTileY}/5/1_1.png`
        }));
        radarLoaded = true;
        const canvas = document.getElementById('radarCanvas');
        if (!canvas) return;
        radarDisplay.classList.remove('hidden');
        canvas.width = canvas.offsetWidth || canvas.clientWidth || 600;
        canvas.height = canvas.offsetHeight || canvas.clientHeight || 300;
        radarCurrentFrame = radarFrames.length - 1;
        loadRadarFrame(radarCurrentFrame);
    } catch (e) {
        const radarDisplay2 = document.getElementById('radarDisplay');
        if (radarDisplay2) radarDisplay2.classList.add('hidden');
    }
}

function loadRadarFrame(index) {
    if (!radarFrames.length || index < 0 || index >= radarFrames.length) return;
    const canvas = document.getElementById('radarCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const cx = canvas.width / 2, cy = canvas.height / 2;
    const s = Math.min(canvas.width, canvas.height) / 256;

    // Draw base map first
    const baseImg = new Image();
    baseImg.crossOrigin = 'anonymous';
    baseImg.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.6;
        ctx.drawImage(baseImg, cx - 128 * s, cy - 128 * s, 256 * s, 256 * s);
        ctx.globalAlpha = 1;

        // Then draw radar overlay
        const radarImg = new Image();
        radarImg.crossOrigin = 'anonymous';
        radarImg.onload = () => {
            ctx.drawImage(radarImg, cx - 128 * s, cy - 128 * s, 256 * s, 256 * s);
            const ts = document.getElementById('radarTimestamp');
            if (ts && radarFrames[index]) {
                const d = new Date(radarFrames[index].time * 1000);
                ts.textContent = d.toLocaleString(state.lang);
            }
        };
        radarImg.onerror = () => {};
        radarImg.src = radarFrames[index].url;
    };
    baseImg.onerror = () => {
        // Still draw radar even if base map fails
        const radarImg = new Image();
        radarImg.crossOrigin = 'anonymous';
        radarImg.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(radarImg, cx - 128 * s, cy - 128 * s, 256 * s, 256 * s);
            const ts = document.getElementById('radarTimestamp');
            if (ts && radarFrames[index]) {
                const d = new Date(radarFrames[index].time * 1000);
                ts.textContent = d.toLocaleString(state.lang);
            }
        };
        radarImg.onerror = () => {};
        radarImg.src = radarFrames[index].url;
    };
    baseImg.src = `https://a.basemaps.cartocdn.com/light_all/${radarBounds}/${radarTileX}/${radarTileY}.png`;
}

function toggleRadarAnimation() {
    const btn = document.getElementById('radarPlayBtn');
    if (radarPlaying) {
        clearInterval(radarInterval);
        radarPlaying = false;
        if (btn) btn.innerHTML = '&#9654;';
    } else {
        radarPlaying = true;
        if (btn) btn.innerHTML = '&#10074;&#10074;';
        radarInterval = setInterval(() => {
            radarCurrentFrame = (radarCurrentFrame + 1) % radarFrames.length;
            loadRadarFrame(radarCurrentFrame);
        }, 200);
    }
}

function updateWeatherBackground() {
    const bg = document.getElementById('weatherBg');
    if (!bg) return;
    const code = state.weather?.current?.weather_code;
    if (code == null) { bg.className = 'weather-bg'; return; }
    const night = isNight();
    if (night) { bg.className = 'weather-bg night'; return; }
    if (code >= 95) { bg.className = 'weather-bg thunderstorm'; return; }
    if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) { bg.className = 'weather-bg rainy'; return; }
    if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) { bg.className = 'weather-bg snowy'; return; }
    if (code === 45 || code === 48) { bg.className = 'weather-bg foggy'; return; }
    if (code >= 2) { bg.className = 'weather-bg cloudy'; return; }
    bg.className = 'weather-bg sunny';
}

function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 50; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.bottom = '-10px';
        p.style.animationDuration = (15 + Math.random() * 25) + 's';
        p.style.animationDelay = Math.random() * 20 + 's';
        const size = 1 + Math.random() * 2;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.opacity = 0.1 + Math.random() * 0.2;
        container.appendChild(p);
    }
}

function applyLanguage() {
    const t = i18n[state.lang];
    setPlaceholder('searchInput', t.searchPlaceholder);
    setText('lblFeelsLike', t.feelsLike);
    setText('lblHumidity', t.humidity);
    setText('lblWind', t.wind);
    setText('lblPressure', t.pressure);
    setText('lblSunrise', t.sunrise);
    setText('lblSunset', t.sunset);
    setText('forecastTitle', t.forecastTitle);
    setText('forecastNote', t.forecastNote);
    setText('lblRain', t.rain);
    setText('lblWindGusts', t.windGusts);
    setText('alertsTitle', t.alertsTitle);
    setText('radarTitle', t.radarTitle);
    setText('footerPowered', t.footer);

    if (state.weather) {
        const code = state.weather.current?.weather_code;
        if (code != null) {
            document.getElementById('weatherDesc').textContent = getWmoDesc(code);
        }
        renderAlerts();
    }
}

function setText(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
}

function setPlaceholder(id, val) {
    const el = document.getElementById(id);
    if (el) el.placeholder = val;
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
    state.cityName = addr.city || addr.town || addr.village || addr.municipality || addr.county || `${lat.toFixed(4)}, ${lon.toFixed(4)}`;
    state.country = (addr.country_code || '').toUpperCase();
    const iso = addr['ISO3166-2-lvl4'];
    if (iso) state.stateCode = iso.split('-')[1] || null;
}

async function fetchWeatherByCoords(lat, lon, silent) {
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

    const openMeteoUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,pressure_msl&daily=temperature_2m_max,temperature_2m_min,weather_code,sunrise,sunset,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max&timezone=auto&forecast_days=16`;
    try {
        const omResp = await fetch(openMeteoUrl);
        if (omResp.ok) {
            const data = await omResp.json();
            state.weather = data;
            state.forecast = data;
            state.timezone = data.timezone;
            state.utcOffset = data.utc_offset_seconds;
        }
    } catch (e) {}

    hideLoading();

    if (!state.weather || !state.weather.current) {
        hideSplash();
        if (!silent) showError(i18n[state.lang].errorGeneric);
        showWelcome();
        return;
    }

    hideSplash();
    hideWelcome();
    renderWeather();
    renderForecast();
    showWeather();
    showForecast();
    saveCityToStorage(state.cityName + ', ' + state.country);

    if (state.country) await fetchAlerts(lat, lon, state.country, state.cityName);
    await fetchRadar(state.lat, state.lon);
    updateWeatherBackground();
}

async function fetchLocationByIP() {
    for (const url of [
        'https://ipinfo.io/json',
        'https://ipapi.co/json/',
    ]) {
        try {
            const resp = await fetch(url);
            if (resp.ok) {
                const data = await resp.json();
                let lat, lon;
                if (data.loc) {
                    const parts = data.loc.split(',');
                    lat = parseFloat(parts[0]);
                    lon = parseFloat(parts[1]);
                } else {
                    lat = data.latitude ?? data.lat;
                    lon = data.longitude ?? data.lon;
                }
                if (lat != null && lon != null && !isNaN(lat) && !isNaN(lon)) {
                    state.cityName = data.city || '';
                    state.country = (data.country || data.country_code || data.countryCode || '').toUpperCase();
                    state.stateCode = (data.region_code || data.region || '').toUpperCase() || null;
                    await fetchWeatherByCoords(lat, lon, true);
                    return true;
                }
            }
        } catch (e) {}
    }
    hideSplash();
    showWelcome();
    return false;
}

function getLocation() {
    const geoOptions = { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 };
    const onSuccess = (pos) => {
        fetchWeatherByCoords(pos.coords.latitude, pos.coords.longitude, true);
    };
    const onError = () => {
        hideLoading();
        hideSplash();
        fetchLocationByIP();
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError, geoOptions);
    } else {
        hideLoading();
        hideSplash();
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

document.getElementById('langSelect').addEventListener('change', (e) => {
    state.lang = e.target.value;
    applyLanguage();
});

const radarBtn = document.getElementById('radarPlayBtn');
if (radarBtn) radarBtn.addEventListener('click', toggleRadarAnimation);

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

function hideSplash() {
    const el = document.getElementById('splashLoading');
    if (el) el.classList.add('hidden');
}

function showSplash() {
    const el = document.getElementById('splashLoading');
    if (el) el.classList.remove('hidden');
}

function setSplashStatus(msg) {
    const el = document.getElementById('splashStatus');
    if (el) el.textContent = msg;
}

function saveCityToStorage(city) {
    if (!city) return;
    try {
        localStorage.setItem('weatherAppCity', city);
        localStorage.setItem('weatherAppUnit', state.unit);
        localStorage.setItem('weatherAppLang', state.lang);
    } catch (e) {}
}

function loadCityFromStorage() {
    try {
        const city = localStorage.getItem('weatherAppCity');
        const unit = localStorage.getItem('weatherAppUnit');
        const lang = localStorage.getItem('weatherAppLang');
        if (unit) state.unit = unit;
        if (lang) state.lang = lang;
        return city;
    } catch (e) {
        return null;
    }
}

createParticles();
updateClock();
setInterval(updateClock, 1000);

const savedCity = loadCityFromStorage();
if (savedCity) {
    document.getElementById('searchInput').value = savedCity;
    if (state.lang) document.getElementById('langSelect').value = state.lang;
    const activeUnit = document.querySelector(`.unit-btn[data-unit="${state.unit}"]`);
    if (activeUnit) {
        document.querySelectorAll('.unit-btn').forEach(b => b.classList.remove('active'));
        activeUnit.classList.add('active');
    }
    setSplashStatus(`Loading weather for ${savedCity}...`);
    fetchWeather(savedCity).finally(hideSplash);
} else {
    setSplashStatus('Detecting your location...');
    getLocation();
}
