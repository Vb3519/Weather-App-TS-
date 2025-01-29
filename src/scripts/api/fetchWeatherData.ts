import currentWeatherApiResponse from '../types/currentWeatherApiResponse';
import weatherForecastApiResponse from '../types/weatherForecastApiResponse';

export const API_KEY = '0d7b538e37d8be8642a8f62cd18c61e3';

// ------------------------------------------------------------------------------------------------------------
// ПОЛУЧИТЬ ИНФОРМАЦИЮ О ТЕКУЩЕЙ ПОГОДЕ:
export const fetchCurrentWeatherData = async (
  cityName: string,
  api_key_value: string
): Promise<currentWeatherApiResponse> => {
  const fetchResult: currentWeatherApiResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key_value}&units=metric`
  ).then((response) => response.json());
  // .then(() => { вытащить отсюда в переменной готовый объект с датой})
  return fetchResult;
};

// ------------------------------------------------------------------------------------------------------------
// ПОЛУЧИТЬ ИНФОРМАЦИЮ О ПРОГНОЗЕ ПОГОДЫ (НА 5 ДНЕЙ):
export async function fetchForecastWeatherData(
  lat: string,
  lon: string,
  api_key_value: string
): Promise<weatherForecastApiResponse> {
  const fetchResult = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key_value}`
  );

  // lat - latitude (широта); lot - longitude (долгота)
  if (fetchResult.ok) {
    // Вариант №1:
    const weatherForecastData: weatherForecastApiResponse =
      await fetchResult.json();

    // console.log(weatherForecastData);

    return weatherForecastData;

    // Вариант №2:
    // const weatherForecastData = await fetchResult.text();
    // console.log(JSON.parse(weatherForecastData));
  } else {
    throw new Error('Weather forecast fetch error...');
  }
}
