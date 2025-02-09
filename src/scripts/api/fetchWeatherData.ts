import currentWeatherApiResponse from '../types/currentWeatherApiResponse';
import weatherForecastApiResponse from '../types/weatherForecastApiResponse';

import renderLoadingLabel from '../render/renderLoadingLabel';
import renderRequestError from '../render/renderRequestError';
import { currentWeatherDataContainer } from '../index';

export const API_KEY = '0d7b538e37d8be8642a8f62cd18c61e3';

// ------------------------------------------------------------------------------------------------------------
// ПОЛУЧИТЬ ИНФОРМАЦИЮ О ТЕКУЩЕЙ ПОГОДЕ:
export const fetchCurrentWeatherData = async (
  cityName: string | null,
  api_key: string
) => {
  let currentWeatherData: currentWeatherApiResponse | null | undefined = null;

  try {
    renderLoadingLabel(currentWeatherDataContainer);

    // небольшой таймер для замедления функции и отображения анимации:
    await new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });

    const response: Response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=metric&lang=ru`
    ); // возвращает служебный объект промис (статусы, заголовки и т.д.)

    currentWeatherData = await response.json(); // возвращает объект с датой (без await также промис)

    return currentWeatherData;
  } catch (error) {
    renderRequestError(currentWeatherDataContainer); // рендер ошибки при неправильном вводе названия города
    console.log('Ошибка получения данных о текущей погоде', error);
  }
};

// ------------------------------------------------------------------------------------------------------------
// ПОЛУЧИТЬ ИНФОРМАЦИЮ О ПРОГНОЗЕ ПОГОДЫ (НА 5 ДНЕЙ):
export async function fetchForecastWeatherData(
  lat: string,
  lon: string,
  api_key: string
) {
  let weatherForecastData: weatherForecastApiResponse | null = null;

  try {
    const response: Response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric&lang=ru`
    );

    weatherForecastData = await response.json();

    return weatherForecastData;
  } catch (error) {
    console.log(
      'Ошибка получения данных о прогнозе погоды на ближайшие 5 дней',
      error
    );
  }
}
