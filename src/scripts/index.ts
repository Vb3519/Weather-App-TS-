import '../styles/style.css';

import {
  API_KEY,
  fetchCurrentWeatherData,
  fetchForecastWeatherData,
} from './api/fetchWeatherData';

import curentWeatherApiResponse from './types/currentWeatherApiResponse';
import currentCoordsApiResponse from './types/currentCoordsApiResponse';
import weatherForecastApiResponse from './types/weatherForecastApiResponse';

let currentWeatherData: curentWeatherApiResponse | null = null;
let currentWeatherCoords: currentCoordsApiResponse | null = null;

let weatherForecastData: weatherForecastApiResponse | null = null;

// ПОЛУЧЕНИЕ ДАТЫ ТЕКУЩЕЙ ПОГОДЫ (в запрашиваемом городе):
const getCurrentWeatherData = async (): Promise<void> => {
  try {
    currentWeatherData = await fetchCurrentWeatherData('Moscow', API_KEY);
    currentWeatherCoords = currentWeatherData.coord;
    console.log(currentWeatherData);
  } catch (error) {
    console.log(
      'Ошибка в получении данных о погоде в запрашиваемом городе:',
      error
    );
  }
};

// ПОЛУЧЕНИЕ ДАТЫ ПРОГНОЗА ПОГОДЫ (на 5 дней):
const getForecastWeatherData = async () => {
  try {
    if (currentWeatherCoords) {
      weatherForecastData = await fetchForecastWeatherData(
        currentWeatherCoords.lat,
        currentWeatherCoords.lon,
        API_KEY
      );

      console.log(weatherForecastData);
    } else {
      console.log('Current weather coords data is empty');
    }
  } catch (error) {
    console.log(
      'Ошибка в получении данных о прогнозе погоды на ближайшие 5 дней',
      error
    );
  }
};

getCurrentWeatherData().then(() => {
  getForecastWeatherData();
});
