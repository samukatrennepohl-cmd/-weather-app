const i18n = {
    en: {
        searchPlaceholder: 'Search for a city...',
        search: 'Search',
        loading: 'Loading...',
        errorNotFound: 'City not found. Please check the name and try again.',
        errorNetwork: 'Network error. Please check your connection.',

        feelsLike: 'Feels Like',
        humidity: 'Humidity',
        wind: 'Wind',
        pressure: 'Pressure',
        sunrise: 'Sunrise',
        sunset: 'Sunset',
        windUnit: 'm/s',
        today: 'Today',
        forecastTitle: '5-Day Forecast',
        footerPowered: 'Weather App',
        welcomeTitle: 'Welcome to Weather App',
        welcomeText: 'Search for a city to get started, or allow location access.',
        weatherCodes: {
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
    },
    pt: {
        searchPlaceholder: 'Busque por uma cidade...',
        search: 'Buscar',
        loading: 'Carregando...',
        errorNotFound: 'Cidade não encontrada. Verifique o nome e tente novamente.',
        errorNetwork: 'Erro de rede. Verifique sua conexão.',
        feelsLike: 'Sensação Térmica',
        humidity: 'Umidade',
        wind: 'Vento',
        pressure: 'Pressão',
        sunrise: 'Nascer do Sol',
        sunset: 'Pôr do Sol',
        windUnit: 'm/s',
        today: 'Hoje',
        forecastTitle: 'Previsão para 5 Dias',
        footerPowered: 'Weather App',
        welcomeTitle: 'Bem-vindo ao Weather App',
        welcomeText: 'Busque por uma cidade para começar, ou permita o acesso à localização.',
        weatherCodes: {
            0: 'Céu limpo', 1: 'Principalmente limpo', 2: 'Parcialmente nublado', 3: 'Nublado',
            45: 'Nevoeiro', 48: 'Nevoeiro congelante',
            51: 'Garoa leve', 53: 'Garoa moderada', 55: 'Garoa densa',
            56: 'Garoa congelante leve', 57: 'Garoa congelante densa',
            61: 'Chuva leve', 63: 'Chuva moderada', 65: 'Chuva forte',
            66: 'Chuva congelante leve', 67: 'Chuva congelante forte',
            71: 'Neve leve', 73: 'Neve moderada', 75: 'Neve forte',
            77: 'Grãos de neve',
            80: 'Pancadas de chuva leves', 81: 'Pancadas de chuva moderadas', 82: 'Pancadas de chuva fortes',
            85: 'Pancadas de neve leves', 86: 'Pancadas de neve fortes',
            95: 'Tempestade', 96: 'Tempestade com granizo leve', 99: 'Tempestade com granizo forte',
        },
    },
    es: {
        searchPlaceholder: 'Busque una ciudad...',
        search: 'Buscar',
        loading: 'Cargando...',
        errorNotFound: 'Ciudad no encontrada. Verifique el nombre e intente de nuevo.',
        errorNetwork: 'Error de red. Verifique su conexión.',
        feelsLike: 'Sensación Térmica',
        humidity: 'Humedad',
        wind: 'Viento',
        pressure: 'Presión',
        sunrise: 'Amanecer',
        sunset: 'Atardecer',
        windUnit: 'm/s',
        today: 'Hoy',
        forecastTitle: 'Pronóstico de 5 Días',
        footerPowered: 'Weather App',
        welcomeTitle: 'Bienvenido a Weather App',
        welcomeText: 'Busque una ciudad para comenzar, o permita el acceso a la ubicación.',
        weatherCodes: {
            0: 'Cielo despejado', 1: 'Mayormente despejado', 2: 'Parcialmente nublado', 3: 'Nublado',
            45: 'Niebla', 48: 'Niebla helada',
            51: 'Llovizna ligera', 53: 'Llovizna moderada', 55: 'Llovizna densa',
            56: 'Llovizna helada ligera', 57: 'Llovizna helada densa',
            61: 'Lluvia ligera', 63: 'Lluvia moderada', 65: 'Lluvia fuerte',
            66: 'Lluvia helada ligera', 67: 'Lluvia helada fuerte',
            71: 'Nieve ligera', 73: 'Nieve moderada', 75: 'Nieve fuerte',
            77: 'Granos de nieve',
            80: 'Chubascos ligeros', 81: 'Chubascos moderados', 82: 'Chubascos violentos',
            85: 'Chubascos de nieve ligeros', 86: 'Chubascos de nieve fuertes',
            95: 'Tormenta', 96: 'Tormenta con granizo ligero', 99: 'Tormenta con granizo fuerte',
        },
    },
};

const iconPaths = {
    sun: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
    moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    cloudSun: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/><circle cx="12" cy="7" r="4"/><line x1="12" y1="1" x2="12" y2="2"/><line x1="16" y1="3" x2="15.3" y2="3.7"/><line x1="20" y1="7" x2="19" y2="7"/>',
    cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/>',
    fog: '<line x1="3" y1="10" x2="21" y2="10"/><line x1="5" y1="14" x2="19" y2="14"/><line x1="7" y1="18" x2="17" y2="18"/>',
    drizzle: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/><line x1="8" y1="21" x2="8" y2="23"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="16" y1="21" x2="16" y2="23"/>',
    rain: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/><line x1="7" y1="21" x2="7" y2="24"/><line x1="12" y1="21" x2="12" y2="24"/><line x1="17" y1="21" x2="17" y2="24"/><line x1="10" y1="23" x2="10" y2="26"/><line x1="14" y1="23" x2="14" y2="26"/>',
    snow: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/><circle cx="8" cy="22" r="0.8"/><circle cx="12" cy="24" r="0.8"/><circle cx="16" cy="22" r="0.8"/><circle cx="10" cy="26" r="0.8"/><circle cx="14" cy="26" r="0.8"/>',
    thunderstorm: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/><polyline points="13 20 11 24 14 24 11 29"/><line x1="9" y1="20" x2="9" y2="22"/><line x1="16" y1="20" x2="16" y2="22"/>',
};

function getWeatherIconType(code) {
    if (code === 0) return 'sun';
    if (code === 1 || code === 2) return 'cloudSun';
    if (code === 3) return 'cloud';
    if (code >= 45 && code <= 48) return 'fog';
    if (code >= 51 && code <= 57) return 'drizzle';
    if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) return 'rain';
    if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) return 'snow';
    if (code >= 95 && code <= 99) return 'thunderstorm';
    return 'cloud';
}

function getWeatherSVG(code, isDay, size) {
    let type = getWeatherIconType(code);
    if (type === 'sun' && !isDay) type = 'moon';
    const paths = iconPaths[type] || iconPaths.cloud;
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="${size}" height="${size}">${paths}</svg>`;
}

const weatherBgConditions = {
    sun: 'clear-day', moon: 'clear-night',
    cloudSun: 'clouds', cloud: 'clouds',
    fog: 'mist', drizzle: 'rain', rain: 'rain',
    snow: 'snow', thunderstorm: 'thunderstorm',
};

const state = { unit: 'C', lang: 'en', weather: null, forecast: null };

const $ = (id) => document.getElementById(id);
const searchInput = $('searchInput');
const searchBtn = $('searchBtn');
const weatherDisplay = $('weatherDisplay');
const forecastDisplay = $('forecastDisplay');
const forecastContainer = $('forecastContainer');
const loading = $('loading');
const error = $('error');
const welcome = $('welcome');
const weatherBg = $('weatherBg');

function t(key) {
    return i18n[state.lang][key] || i18n['en'][key] || key;
}

function weatherDesc(code) {
    const codes = i18n[state.lang].weatherCodes || i18n['en'].weatherCodes;
    return codes[code] || 'Unknown';
}

function applyTranslations() {
    searchInput.placeholder = t('searchPlaceholder');
    searchBtn.textContent = t('search');
    $('footerPowered').textContent = t('footerPowered');
    $('lblFeelsLike').textContent = t('feelsLike');
    $('lblHumidity').textContent = t('humidity');
    $('lblWind').textContent = t('wind');
    $('lblPressure').textContent = t('pressure');
    $('lblSunrise').textContent = t('sunrise');
    $('lblSunset').textContent = t('sunset');
    $('forecastTitle').textContent = t('forecastTitle');

    const welcomeTitle = welcome.querySelector('h2');
    const welcomeText = welcome.querySelector('p');
    if (welcomeTitle) welcomeTitle.textContent = t('welcomeTitle');
    if (welcomeText) welcomeText.textContent = t('welcomeText');
}

function showLoading(show) {
    loading.classList.toggle('hidden', !show);
    if (show) loading.querySelector('p').textContent = t('loading');
}

function showError(msg) {
    error.textContent = msg;
    error.classList.remove('hidden');
    weatherDisplay.classList.add('hidden');
    forecastDisplay.classList.add('hidden');
}

function hideError() {
    error.classList.add('hidden');
}

function showWelcome(show) {
    welcome.classList.toggle('hidden', !show);
}

function setBackground(code, isDay) {
    const type = getWeatherIconType(code);
    let iconType = type;
    if (type === 'sun' && !isDay) iconType = 'moon';
    const cls = weatherBgConditions[iconType] || 'clear-day';
    weatherBg.className = 'weather-bg ' + cls;
    document.body.className = 'bg-' + cls;
    const snow = 'snow';
    if (cls === snow) {
        document.documentElement.style.setProperty('--text-primary', '#1a1a2e');
    } else {
        document.documentElement.style.setProperty('--text-primary', '#ffffff');
    }
}

function formatTemp(celsius) {
    if (celsius == null) return '--';
    if (state.unit === 'F') return Math.round(celsius * 9 / 5 + 32) + '°F';
    return Math.round(celsius) + '°C';
}

function degToCompass(deg) {
    const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    return dirs[Math.round(deg / 45) % 8];
}

function formatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString(state.lang === 'en' ? 'en-US' : state.lang === 'pt' ? 'pt-BR' : 'es-ES', { hour: '2-digit', minute: '2-digit' });
}

function isDayTime(sunrise, sunset) {
    const now = Math.floor(Date.now() / 1000);
    return now >= sunrise && now <= sunset;
}

function formatDay(dt) {
    const date = new Date(dt * 1000);
    const today = new Date();
    if (date.toDateString() === today.toDateString()) return t('today');
    return date.toLocaleDateString(state.lang === 'en' ? 'en-US' : state.lang === 'pt' ? 'pt-BR' : 'es-ES', { weekday: 'short' });
}

const countryMap = {
    'brasil': 'BR', 'brazil': 'BR', 'argentina': 'AR', 'españa': 'ES', 'spain': 'ES',
    'méxico': 'MX', 'mexico': 'MX', 'estados unidos': 'US', 'united states': 'US',
    'reino unido': 'GB', 'united kingdom': 'GB', 'francia': 'FR', 'france': 'FR',
    'alemania': 'DE', 'germany': 'DE', 'italia': 'IT', 'italy': 'IT',
    'portugal': 'PT', 'canadá': 'CA', 'canada': 'CA', 'australia': 'AU',
    'japón': 'JP', 'japan': 'JP', 'china': 'CN', 'india': 'IN',
};

const validCountryCodes = new Set([
    'AD','AE','AF','AG','AI','AL','AM','AO','AQ','AR','AS','AT','AU','AW','AX','AZ',
    'BA','BB','BD','BE','BF','BG','BH','BI','BJ','BL','BM','BN','BO','BQ','BR','BS','BT','BV','BW','BY','BZ',
    'CA','CC','CD','CF','CG','CH','CI','CK','CL','CM','CN','CO','CR','CU','CV','CW','CX','CY','CZ',
    'DE','DJ','DK','DM','DO','DZ',
    'EC','EE','EG','EH','ER','ES','ET',
    'FI','FJ','FK','FM','FO','FR',
    'GA','GB','GD','GE','GF','GG','GH','GI','GL','GM','GN','GP','GQ','GR','GS','GT','GU','GW','GY',
    'HK','HM','HN','HR','HT','HU',
    'ID','IE','IL','IM','IN','IO','IQ','IR','IS','IT',
    'JE','JM','JO','JP',
    'KE','KG','KH','KI','KM','KN','KP','KR','KW','KY','KZ',
    'LA','LB','LC','LI','LK','LR','LS','LT','LU','LV','LY',
    'MA','MC','MD','ME','MF','MG','MH','MK','ML','MM','MN','MO','MP','MQ','MR','MS','MT','MU','MV','MW','MX','MY','MZ',
    'NA','NC','NE','NF','NG','NI','NL','NO','NP','NR','NU','NZ',
    'OM',
    'PA','PE','PF','PG','PH','PK','PL','PM','PN','PR','PS','PT','PW','PY',
    'QA',
    'RE','RO','RS','RU','RW',
    'SA','SB','SC','SD','SE','SG','SH','SI','SJ','SK','SL','SM','SN','SO','SR','SS','ST','SV','SX','SY','SZ',
    'TC','TD','TF','TG','TH','TJ','TK','TL','TM','TN','TO','TR','TT','TV','TW','TZ',
    'UA','UG','UM','US','UY','UZ',
    'VA','VC','VE','VG','VI','VN','VU',
    'WF','WS',
    'YE','YT',
    'ZA','ZM','ZW',
]);

function extractCountryCode(displayName) {
    const parts = displayName.split(', ');
    const last = parts[parts.length - 1]?.trim().toLowerCase() || '';
    if (last.length === 2) return last.toUpperCase();
    return countryMap[last] || last.toUpperCase() || '';
}

async function geocode(city) {
    const trimmed = city.trim();
    const words = trimmed.split(/\s+/);
    const lastWord = words[words.length - 1];
    let query = trimmed;
    let countryFilter = '';
    if (/^[A-Za-z]{2}$/.test(lastWord) && validCountryCodes.has(lastWord.toUpperCase())) {
        countryFilter = `&countrycodes=${lastWord.toUpperCase()}`;
        query = words.slice(0, -1).join(' ');
    } else if (state.lang === 'pt') {
        countryFilter = '&countrycodes=BR,PT';
    } else if (state.lang === 'es') {
        countryFilter = '&countrycodes=ES,AR,MX,CO,CL,PE';
    }
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1&accept-language=${state.lang}${countryFilter}`;
    const res = await fetch(url, { headers: { 'User-Agent': 'WeatherApp/1.0' } });
    if (!res.ok) throw new Error('NETWORK');
    const data = await res.json();
    if (!data || data.length === 0) {
        if (countryFilter) {
            const fallbackUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(trimmed)}&format=json&limit=1&accept-language=${state.lang}`;
            const fallbackRes = await fetch(fallbackUrl, { headers: { 'User-Agent': 'WeatherApp/1.0' } });
            if (fallbackRes.ok) {
                const fallbackData = await fallbackRes.json();
                if (fallbackData && fallbackData.length > 0) {
                    return formatGeoResult(fallbackData[0]);
                }
            }
        }
        throw new Error('NOT_FOUND');
    }
    return formatGeoResult(data[0]);
}

function formatGeoResult(result) {
    return {
        name: result.name,
        country_code: extractCountryCode(result.display_name),
        latitude: parseFloat(result.lat),
        longitude: parseFloat(result.lon),
    };
}

async function reverseGeocode(lat, lon) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&zoom=10&accept-language=${state.lang}`;
    const res = await fetch(url, { headers: { 'User-Agent': 'WeatherApp/1.0' } });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data || !data.address) return null;
    const addr = data.address;
    const cityName = addr.city || addr.town || addr.municipality || addr.village || addr.county || '';
    const region = addr.state || '';
    const country = addr.country_code || '';
    return {
        name: cityName + (region ? ', ' + region : ''),
        country_code: country.toUpperCase(),
    };
}

async function fetchWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
        `&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m` +
        `&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset` +
        `&timezone=auto&wind_speed_unit=ms`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('NETWORK');
    return await res.json();
}

function processForecast(data) {
    const daily = data.daily;
    const result = [];
    for (let i = 0; i < daily.time.length; i++) {
        result.push({
            dt: Math.floor(new Date(daily.time[i] + 'T12:00:00').getTime() / 1000),
            tempMin: daily.temperature_2m_min[i],
            tempMax: daily.temperature_2m_max[i],
            weatherCode: daily.weather_code[i],
        });
    }
    return result;
}

function renderWeather(data, geoData) {
    state.weather = data;
    hideError();
    showWelcome(false);
    showLoading(false);
    weatherDisplay.classList.remove('hidden');

    const current = data.current;
    const daily = data.daily;
    const code = current.weather_code;

    const sunrise = new Date(daily.sunrise[0]).getTime() / 1000;
    const sunset = new Date(daily.sunset[0]).getTime() / 1000;
    const day = isDayTime(sunrise, sunset);

    $('cityName').textContent = geoData ? geoData.name : '--';
    $('country').textContent = geoData ? geoData.country_code : '--';
    $('weatherDesc').textContent = weatherDesc(code);

    const iconSize = Math.min(window.innerWidth * 0.2, 100);
    $('weatherIcon').innerHTML = getWeatherSVG(code, day, iconSize);

    $('temperature').textContent = formatTemp(current.temperature_2m);

    $('tempMax').textContent = formatTemp(daily.temperature_2m_max[0]);
    $('tempMin').textContent = formatTemp(daily.temperature_2m_min[0]);
    $('feelsLike').textContent = formatTemp(current.apparent_temperature);
    $('humidity').textContent = current.relative_humidity_2m;
    $('wind').textContent = Math.round(current.wind_speed_10m) + ' ' + t('windUnit') + ' ' + degToCompass(current.wind_direction_10m || 0);
    $('pressure').textContent = current.surface_pressure;
    $('sunrise').textContent = formatTime(sunrise);
    $('sunset').textContent = formatTime(sunset);

    setBackground(code, day);
    applyTranslations();
}

function renderForecast(data) {
    state.forecast = data;
    const days = processForecast(data);
    forecastDisplay.classList.remove('hidden');
    forecastContainer.innerHTML = '';

    for (const day of days) {
        const card = document.createElement('div');
        card.className = 'forecast-card';
        const iconSize = Math.min(window.innerWidth * 0.1, 40);
        card.innerHTML = `
            <div class="forecast-day">${formatDay(day.dt)}</div>
            <div class="forecast-icon">${getWeatherSVG(day.weatherCode, true, iconSize)}</div>
            <div class="forecast-desc">${weatherDesc(day.weatherCode)}</div>
            <div class="forecast-temps">
                <span class="forecast-temp-max">${formatTemp(day.tempMax)}</span>
                <span class="forecast-temp-min">${formatTemp(day.tempMin)}</span>
            </div>
        `;
        forecastContainer.appendChild(card);
    }
}

async function searchCity(city) {
    if (!city.trim()) return;
    showLoading(true);
    hideError();
    weatherDisplay.classList.add('hidden');
    forecastDisplay.classList.add('hidden');
    showWelcome(false);

    try {
        const geo = await geocode(city);
        const weatherData = await fetchWeather(geo.latitude, geo.longitude);
        renderWeather(weatherData, geo);
        renderForecast(weatherData);
    } catch (err) {
        showLoading(false);
        if (err.message === 'NOT_FOUND') {
            showError(t('errorNotFound'));
        } else {
            showError('Erro: ' + err.message);
        }
        showWelcome(true);
    }
}

function setUnit(unit) {
    state.unit = unit;
    document.querySelectorAll('.unit-btn').forEach((btn) => btn.classList.toggle('active', btn.dataset.unit === unit));
    if (state.weather) {
        const current = state.weather.current;
        const daily = state.weather.daily;
        const code = current.weather_code;
        const sunrise = new Date(daily.sunrise[0]).getTime() / 1000;
        const sunset = new Date(daily.sunset[0]).getTime() / 1000;
        const day = isDayTime(sunrise, sunset);
        $('temperature').textContent = formatTemp(current.temperature_2m);
        $('tempMax').textContent = formatTemp(daily.temperature_2m_max[0]);
        $('tempMin').textContent = formatTemp(daily.temperature_2m_min[0]);
        $('feelsLike').textContent = formatTemp(current.apparent_temperature);
        if (!forecastDisplay.classList.contains('hidden')) renderForecast(state.forecast);
    }
}

function setLang(lang) {
    state.lang = lang;
    document.querySelectorAll('.lang-btn').forEach((btn) => btn.classList.toggle('active', btn.dataset.lang === lang));
    applyTranslations();
    if (state.weather) {
        const code = state.weather.current.weather_code;
        $('weatherDesc').textContent = weatherDesc(code);
    }
}

async function startByIP() {
    try {
        const res = await fetch('https://ip-api.com/json/?fields=status,countryCode,city,lat,lon', { signal: AbortSignal.timeout(5000) });
        if (!res.ok) throw new Error('fail');
        const data = await res.json();
        if (data.status !== 'success') throw new Error('fail');

        const cc = data.countryCode;
        if (cc === 'BR' || cc === 'PT') setLang('pt');
        else if (['ES','AR','MX','CO','CL','PE'].includes(cc)) setLang('es');
        else setLang('en');

        const geo = { name: data.city, country_code: cc, latitude: data.lat, longitude: data.lon };
        const weatherData = await fetchWeather(data.lat, data.lon);
        renderWeather(weatherData, geo);
        renderForecast(weatherData);
        return true;
    } catch {
        return false;
    }
}

function init() {
    document.querySelectorAll('.unit-btn').forEach((btn) => {
        btn.addEventListener('click', () => setUnit(btn.dataset.unit));
    });
    document.querySelectorAll('.lang-btn').forEach((btn) => {
        btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
    searchBtn.addEventListener('click', () => searchCity(searchInput.value));
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') searchCity(searchInput.value);
    });
    applyTranslations();

    startByIP().then((ok) => {
        if (!ok) showWelcome(true);
    });
}

document.addEventListener('DOMContentLoaded', init);
