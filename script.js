const state = {
    weather: null,
    forecast: null,
    unit: 'C',
    lang: 'en',
    country: null,
    lat: null,
    lon: null,
    cityName: null,
    alerts: null,
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

        const geocodeUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json&limit=5`;
        const geoResp = await fetch(geocodeUrl, {
            headers: {
                'Accept-Language': overrideCountry ? 'en' : state.lang === 'en' ? 'en' : state.lang === 'pt' ? 'pt' : 'es',
                'User-Agent': 'WeatherApp/1.0',
            },
        });
        const geoData = await geoResp.json();

        if (!geoData || geoData.length === 0) {
            showError(i18n[state.lang].errorNotFound);
            showWelcome();
            return;
        }

        let best = geoData[0];

        const allowed = overrideCountry ? [overrideCountry] : null;

        if (overrideCountry) {
            const match = geoData.find(g => g.address && g.address.country_code && g.address.country_code.toUpperCase() === overrideCountry);
            if (match) best = match;
        } else if (geoData.length > 1) {
            const preferred = geoData.find(g => g.address && g.address.country_code && (g.address.country_code.toUpperCase() === 'US' || g.address.country_code.toUpperCase() === 'BR'));
            if (preferred) best = preferred;
        }

        state.lat = parseFloat(best.lat);
        state.lon = parseFloat(best.lon);

        const countryCode = best.address && best.address.country_code ? best.address.country_code.toUpperCase() : '';
        state.country = overrideCountry || countryCode;
        state.cityName = best.name || best.display_name.split(',')[0];

        const owmUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${state.lat}&lon=${state.lon}&appid=63f78c8434ee2b14d09731d0f5362f6b`;
        const owmResp = await fetch(owmUrl);
        if (!owmResp.ok) { showError(i18n[state.lang].errorGeneric); showWelcome(); return; }
        state.weather = await owmResp.json();

        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${state.lat}&lon=${state.lon}&appid=63f78c8434ee2b14d09731d0f5362f6b`;
        const forecastResp = await fetch(forecastUrl);
        if (forecastResp.ok) state.forecast = await forecastResp.json();

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

async function fetchAlerts(lat, lon, country, cityName) {
    state.alerts = null;

    if (country === 'BR') {
        try {
            const inmetUrl = 'https://apiprevmet3.inmet.gov.br/avisos/ativos';
            const resp = await fetch(inmetUrl);
            if (!resp.ok) throw new Error('INMET direct failed');
            const data = await resp.json();
            state.alerts = parseInmetAlerts(data, cityName);
        } catch (e) {
            const proxyUrls = [
                `https://corsproxy.io/?url=${encodeURIComponent('https://apiprevmet3.inmet.gov.br/avisos/ativos')}`,
                `https://api.allorigins.win/raw?url=${encodeURIComponent('https://apiprevmet3.inmet.gov.br/avisos/ativos')}`,
                `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent('https://apiprevmet3.inmet.gov.br/avisos/ativos')}`,
            ];
            for (const proxyUrl of proxyUrls) {
                try {
                    const resp = await fetch(proxyUrl);
                    if (!resp.ok) continue;
                    const data = await resp.json();
                    state.alerts = parseInmetAlerts(data, cityName);
                    break;
                } catch (e2) {}
            }
        }
    } else if (country === 'US') {
        try {
            const nwsUrl = `https://api.weather.gov/alerts/active?point=${lat},${lon}`;
            const resp = await fetch(nwsUrl, {
                headers: { 'User-Agent': 'WeatherApp/1.0', 'Accept': 'application/json' },
            });
            if (!resp.ok) throw new Error('NWS failed');
            const data = await resp.json();
            if (data && data.features) {
                state.alerts = data.features.map(f => f.properties).filter(a => a && a.event && a.headline);
            }
        } catch (e) {
            const proxyNws = `https://corsproxy.io/?url=${encodeURIComponent(`https://api.weather.gov/alerts/active?point=${lat},${lon}`)}`;
            try {
                const resp = await fetch(proxyNws, {
                    headers: { 'User-Agent': 'WeatherApp/1.0', 'Accept': 'application/json' },
                });
                if (resp.ok) {
                    const data = await resp.json();
                    if (data && data.features) {
                        state.alerts = data.features.map(f => f.properties).filter(a => a && a.event && a.headline);
                    }
                }
            } catch (e2) {}
        }
    }

    renderAlerts();
}

function parseInmetAlerts(data, cityName) {
    if (!data || typeof data !== 'object') return null;
    const alerts = [];
    for (const key in data) {
        const item = data[key];
        if (!item || !Array.isArray(item)) continue;
        item.forEach(a => {
            if (a && a.regiao) {
                const cidades = (a.regiao || '').toLowerCase();
                const cidadesAfetadas = (a.cidades_afetadas || '').toLowerCase();
                const searchStr = cidades + ' ' + cidadesAfetadas;
                if (!searchStr.includes(cityName ? cityName.toLowerCase() : '')) return;
            }
            const severity = mapInmetSeverity(a);
            alerts.push({
                event: a.descricao || a.titulo || 'Alerta',
                headline: a.titulo || a.descricao || 'Alerta Meteorológico',
                description: a.descricao || '',
                severity: severity,
                severityCode: severity,
                urgency: a.gravidade || a.severidade || 'Unknown',
            });
        });
    }
    return alerts.length > 0 ? alerts : null;
}

function mapInmetSeverity(alert) {
    const sev = (alert.gravidade || alert.severidade || '').toLowerCase();
    const desc = (alert.descricao || alert.titulo || '').toLowerCase();
    if (sev.includes('extreme') || sev.includes('grande') || desc.includes('grande perigo')) return 'Extreme';
    if (sev.includes('warning') || sev.includes('perigo') || desc.includes('perigo')) return 'Warning';
    if (sev.includes('watch') || sev.includes('monitoramento')) return 'Watch';
    return 'Advisory';
}

function getSeverityClass(severity) {
    const s = (severity || '').toLowerCase();
    if (s.includes('extreme')) return 'severity-extreme';
    if (s.includes('warning') || s.includes('perigo')) return 'severity-warning';
    if (s.includes('watch') || s.includes('monitoramento')) return 'severity-watch';
    return 'severity-advisory';
}

function renderAlerts() {
    const container = document.getElementById('alertsContainer');
    const display = document.getElementById('alertsDisplay');

    if (!state.alerts || state.alerts.length === 0) {
        container.innerHTML = `<div class="alert-none">${i18n[state.lang].alertsNone}</div>`;
        if (display.classList.contains('hidden')) return;
        return;
    }

    container.innerHTML = state.alerts.map(a => {
        const sevKey = a.severityCode ? a.severityCode.toLowerCase() : 'advisory';
        let sevLabel = a.severityCode || 'Advisory';
        if (sevKey.includes('extreme')) sevLabel = i18n[state.lang].severityExtreme;
        else if (sevKey.includes('warning') || sevKey.includes('perigo')) sevLabel = i18n[state.lang].severityWarning;
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
    if (!state.weather) return;

    const w = state.weather;
    document.getElementById('cityName').textContent = state.cityName || w.name;
    document.getElementById('country').textContent = state.country || (w.sys && w.sys.country) || '';

    const desc = w.weather && w.weather[0] ? w.weather[0].description : '';
    document.getElementById('weatherDesc').textContent = desc;

    const iconCode = w.weather && w.weather[0] ? w.weather[0].icon : '01d';
    document.getElementById('weatherIcon').innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="${desc}">`;

    const temp = w.main ? w.main.temp : 0;
    document.getElementById('temperature').textContent = formatTemp(temp);

    const tempMax = w.main ? w.main.temp_max : 0;
    const tempMin = w.main ? w.main.temp_min : 0;
    document.getElementById('tempMax').textContent = formatTemp(tempMax);
    document.getElementById('tempMin').textContent = formatTemp(tempMin);

    const feelsLike = w.main ? w.main.feels_like : 0;
    document.getElementById('feelsLike').textContent = formatTemp(feelsLike);

    const humidity = w.main ? w.main.humidity : 0;
    document.getElementById('humidity').textContent = humidity;

    const windSpeed = w.wind ? w.wind.speed : 0;
    const windEl = document.getElementById('wind');
    const windUnitEl = document.getElementById('windUnit');
    if (state.unit === 'C') {
        windEl.textContent = windSpeed;
        windUnitEl.textContent = 'm/s';
    } else {
        windEl.textContent = (windSpeed * 2.237).toFixed(1);
        windUnitEl.textContent = 'mph';
    }

    const pressure = w.main ? w.main.pressure : 0;
    document.getElementById('pressure').textContent = pressure;

    const timezone = (w.timezone || 0);
    if (w.sys && w.sys.sunrise) {
        document.getElementById('sunrise').textContent = formatTime(w.sys.sunrise, timezone);
    }
    if (w.sys && w.sys.sunset) {
        document.getElementById('sunset').textContent = formatTime(w.sys.sunset, timezone);
    }

    applyLanguage();
}

function renderForecast() {
    const container = document.getElementById('forecastContainer');
    container.innerHTML = '';

    if (!state.forecast || !state.forecast.list) return;

    const daily = {};
    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];

    state.forecast.list.forEach(item => {
        const dateStr = item.dt_txt.split(' ')[0];
        if (dateStr === todayStr) return;
        if (!daily[dateStr]) daily[dateStr] = [];
        daily[dateStr].push(item);
    });

    const dayNames = state.lang === 'pt'
        ? ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
        : state.lang === 'es'
        ? ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
        : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const entries = Object.entries(daily).slice(0, 5);
    entries.forEach(([dateStr, items]) => {
        const date = new Date(dateStr + 'T12:00:00');
        const dayName = dayNames[date.getDay()];

        const temps = items.map(i => i.main.temp);
        const high = Math.max(...temps);
        const low = Math.min(...temps);

        const midItem = items[Math.floor(items.length / 2)];
        const icon = midItem && midItem.weather ? midItem.weather[0].icon : '01d';

        const card = document.createElement('div');
        card.className = 'forecast-card';
        card.innerHTML = `
            <div class="day">${dayName}</div>
            <div class="icon"><img src="https://openweathermap.org/img/wn/${icon}.png" alt=""></div>
            <div class="temps">
                <span class="temp-high">${formatTemp(high)}</span>
                <span class="temp-low">${formatTemp(low)}</span>
            </div>
        `;
        container.appendChild(card);
    });
}

function formatTemp(kelvin) {
    if (state.unit === 'C') {
        return Math.round(kelvin - 273.15) + '°';
    } else {
        return Math.round((kelvin - 273.15) * 9/5 + 32) + '°';
    }
}

function formatTime(timestamp, timezone) {
    const date = new Date((timestamp + timezone) * 1000);
    const utc = date.getUTCHours() * 60 + date.getUTCMinutes();
    const hours = Math.floor(utc / 60);
    const minutes = utc % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
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

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                state.lat = pos.coords.latitude;
                state.lon = pos.coords.longitude;
                try {
                    const geoUrl = `https://nominatim.openstreetmap.org/reverse?lat=${state.lat}&lon=${state.lon}&format=json`;
                    const geoResp = await fetch(geoUrl, { headers: { 'User-Agent': 'WeatherApp/1.0' } });
                    const geoData = await geoResp.json();
                    if (geoData && geoData.address) {
                        const cc = geoData.address.country_code ? geoData.address.country_code.toUpperCase() : '';
                        state.country = cc;
                        state.cityName = geoData.address.city || geoData.address.town || geoData.address.village || geoData.address.county || '';
                    }
                } catch (e) {}

                const owmUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${state.lat}&lon=${state.lon}&appid=63f78c8434ee2b14d09731d0f5362f6b`;
                try {
                    const owmResp = await fetch(owmUrl);
                    if (owmResp.ok) state.weather = await owmResp.json();
                } catch (e) {}

                const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${state.lat}&lon=${state.lon}&appid=63f78c8434ee2b14d09731d0f5362f6b`;
                try {
                    const forecastResp = await fetch(forecastUrl);
                    if (forecastResp.ok) state.forecast = await forecastResp.json();
                } catch (e) {}

                hideWelcome();
                hideLoading();
                renderWeather();
                renderForecast();
                showWeather();
                showForecast();

                if (state.country) await fetchAlerts(state.lat, state.lon, state.country, state.cityName);

                setBackground();
            },
            () => {
                hideLoading();
                showWelcome();
                showError(i18n[state.lang].errorLocation);
            }
        );
    } else {
        hideLoading();
        showWelcome();
        showError(i18n[state.lang].errorLocation);
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
