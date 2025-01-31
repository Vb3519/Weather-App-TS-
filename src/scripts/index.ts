import '../styles/style.css';

import {
  API_KEY,
  fetchCurrentWeatherData,
  fetchForecastWeatherData,
} from './api/fetchWeatherData';

import currentWeatherApiResponse from './types/currentWeatherApiResponse';
import extracted_CurrentWeatherData from './types/extractedCurrentWeatherData';
import currentCoordsApiResponse from './types/currentCoordsApiResponse';
import weatherForecastApiResponse from './types/weatherForecastApiResponse';

import { createCurrentDateString } from './utils/currentDateAndTime';

// HTML-элементы:
const inputElem: HTMLInputElement | null = document.querySelector(
  '.input-inner__input-elem'
);
const getWeatherInfoBtn: HTMLButtonElement | null = document.querySelector(
  '.input-inner__label'
);
const getWeatherInfoBtnLabel: Element | null = document.querySelector(
  '.fa-magnifying-glass'
);
const currentWeatherDataContainer: Element | null = document.querySelector(
  '.weather-app__current'
);
const weatherForecastContainer: Element | null = document.querySelector(
  '.weather-forecast__info'
);

let currentWeatherData: currentWeatherApiResponse | null | undefined = null; // текущая погода в запрашиваемом городе
let extractedWeatherData: extracted_CurrentWeatherData | null = null; // объект из текущей даты по погоде (для рендера)

let currentWeatherCoords: currentCoordsApiResponse | null = null; // широта и долгота для API-запроса прогноза на 5 дней

let weatherForecastData: weatherForecastApiResponse | null | undefined = null; // прогноз на 5 дней
let weatherForecastTempData: number[][] | null = null; // массив массивов температур на 5 дней
let weatherForecastAverageDayTemp: number[] | null = null; // массив усредненных значений температуры на каждый из 5 дней
let weatherForecastDescripAndIcons: string[][] | null = null;
let weatherForecastElemsList: HTMLLIElement[] | null = null;

let currentCityName: string | null = null;

// Присваивание значения переменной currentCityName (название города):
const setCityName = () => {
  if (inputElem?.value) {
    currentCityName = inputElem.value;
    console.log(currentCityName);
  }
};
// ОБРАБОТЧИК:
inputElem?.addEventListener('input', setCityName);

const getWeatherData = async (cityName: string | null) => {
  if (!currentCityName) {
    alert('Пожалуйста укажите название города');
    return;
  }
  console.log('Клик ^^');

  if (getWeatherInfoBtn) getWeatherInfoBtn.disabled = true;
  getWeatherInfoBtnLabel?.classList.add('animation');

  // ПОЛУЧЕНИЕ ДАТЫ ТЕКУЩЕЙ ПОГОДЫ (в запрашиваемом городе):
  currentWeatherData = await fetchCurrentWeatherData(cityName, API_KEY); // top-level await работает с "target": "es2022" и "module": "es2022"
  console.log(currentWeatherData);

  if (currentWeatherData) {
    getWeatherInfoBtnLabel?.classList.remove('animation');

    extractedWeatherData = extractCurrentWeatherDataProps(currentWeatherData);
    currentWeatherCoords = currentWeatherData.coord;
  }
  console.log(extractedWeatherData);
  console.log(currentWeatherCoords);

  // ПОЛУЧЕНИЕ ДАТЫ ПРОГНОЗА ПОГОДЫ (на 5 дней):
  if (currentWeatherCoords) {
    const lat: string = currentWeatherCoords.lat;
    const lon: string = currentWeatherCoords.lon;

    weatherForecastData = await fetchForecastWeatherData(lat, lon, API_KEY);

    // массив с массивами температур на ближайшие 5 суток:
    weatherForecastTempData =
      createWeatherForecastTempDataArr(weatherForecastData);
  }
  console.log(weatherForecastTempData);

  weatherForecastDescripAndIcons =
    createWeatherForecastIconsAndDescripArr(weatherForecastData);
  console.log(weatherForecastDescripAndIcons);

  weatherForecastAverageDayTemp = calcForecastAverageDayTemp();
  console.log(weatherForecastAverageDayTemp);

  weatherForecastElemsList = createWeatherForecastElemsList(); // ----------------------------------------------------------------------------- TYT
  console.log(weatherForecastElemsList);

  renderWeatherForecast();

  if (getWeatherInfoBtn) getWeatherInfoBtn.disabled = false;
  currentCityName = null;
  if (inputElem) inputElem.value = '';

  console.log(weatherForecastData);

  renderCurrentWeatherData(extractedWeatherData);
};
// ОБРАБОТЧИК:
getWeatherInfoBtn?.addEventListener('click', () => {
  getWeatherData(currentCityName);
});

// Извлечь из объекта currentWeatherData данные для рендера текущей погоды и сохранения их в историю просмотра:
const extractCurrentWeatherDataProps = (
  cityWeatherData: currentWeatherApiResponse | null | undefined
) => {
  const extractedData: extracted_CurrentWeatherData = {
    cityName: cityWeatherData?.name,
    temprature: cityWeatherData?.main.temp,
    temp_feels_like: cityWeatherData?.main.feels_like,

    currentWeatherIconId: cityWeatherData?.weather[0].icon,
    weatherDescripText: cityWeatherData?.weather[0].description,

    wind_speed: cityWeatherData?.wind.speed,
    humidity: cityWeatherData?.main.humidity,
    visibility: cityWeatherData?.visibility,
  };

  return extractedData;
};

// ТЕКУЩЕЕ ВРЕМЯ И ДАТА:
const currentDateAndTime: string = createCurrentDateString();

// Рендер текущей погоды в запрашиваемом городе:
const renderCurrentWeatherData = (
  cityWeatherData: extracted_CurrentWeatherData | null
): void => {
  if (currentWeatherDataContainer) {
    currentWeatherDataContainer.innerHTML = `
      <h3 class="current-weather__city">${cityWeatherData?.cityName}</h3>
      <p class="current-weather__date">${currentDateAndTime}</p>
      <p class="current-weather__temp">${cityWeatherData?.temprature} °C</p>
      <ul class="current-weather__descrip">
        <li class="current-weather__descrip__feels-like">Ощущается как ${cityWeatherData?.temp_feels_like} °C</li>
        <li class="current-weather__descrip__label"><img src="http://openweathermap.org/img/wn/${cityWeatherData?.currentWeatherIconId}.png"></li>
        <li class="current-weather__descrip__text">${cityWeatherData?.weatherDescripText}</li>
      </ul>
          
      <ul class="current-weather__params">
        <li class="current-weather__params__elem current-weather">
          <div class="current-weather__label wind-label"><i class="fa-solid fa-wind"></i></div>
          <span class="current-weather__param-value wind-value">${cityWeatherData?.wind_speed} км/ч</span>
        </li>
        <li class="current-weather__params__elem current-weather">
          <div class="current-weather__label humidity-label"><i class="fa-solid fa-droplet"></i></div>
          <span class="current-weather__param-value humidity-value">${cityWeatherData?.humidity}%</span>
        </li>
        <li class="current-weather__params__elem current-weather">
          <div class="current-weather__label visibility-label"><i class="fa-solid fa-eye"></i></div>
          <span class="current-weather__param-value visibility-value">${cityWeatherData?.visibility} км</span>
        </li>
      </ul>    
    `;
  }
};

// Массив с температурными параметрами на ближайшие 5 суток:
function createWeatherForecastTempDataArr(
  weatherForecast: weatherForecastApiResponse | null | undefined
): number[][] {
  const weatherForecastList: any[] = weatherForecast?.list;

  // т.к. в API временной отрезок по 3ч, берем 8 элементов массива (объектов со значениями температуры)
  // чтобы получить усредненные сутки:
  const forecastTempMainArr: number[][] = []; // string[]
  const forecastTempStep: number[] = [];
  let counter: number = 0;

  for (let i = 0; i < weatherForecastList.length; i++) {
    forecastTempStep.push(weatherForecastList[i].main.temp);
    ++counter;

    if (counter === 8) {
      forecastTempMainArr.push([...forecastTempStep]); // чтобы в forecastTempMainArr[] не было 5 пустых массивов, нужна деструктуризация forecastTempStep[]
      counter = 0; // т.к. иначе добавляется ссылка на масив и потом он очищается
      forecastTempStep.length = 0;
    }

    if (forecastTempMainArr.length === 5) break;
  }

  return forecastTempMainArr;
}

// Массив с описанием примерной погоды на ближайшие 5 дней и индексами иконок погоды:
function createWeatherForecastIconsAndDescripArr(
  weatherForecast: weatherForecastApiResponse | null | undefined
) {
  const weatherForecastList: any[] = weatherForecast?.list;
  const forecastDescripAndIconDataMainArr: string[][] = [];

  for (let i = 4; i < weatherForecastList.length; i += 8) {
    const forecastDataStep: string[] = [];

    // т.к. шаг в 8 объектов (для получения первого усредненного значения, берем 4)
    let weatherDescriptionText: string =
      weatherForecastList[i].weather[0].description;
    let weatherIconId: string = weatherForecastList[i].weather[0].icon;

    forecastDataStep.push(weatherDescriptionText);
    forecastDataStep.push(weatherIconId);

    forecastDescripAndIconDataMainArr.push([...forecastDataStep]);

    forecastDataStep.length = 0;
  }

  return forecastDescripAndIconDataMainArr;
}

// создание элемента списка из прогноза погоды на ближайшие 5 дней (всего 5 элементов)
const createWeatherForecastElem = (
  averageTemp: number,
  descripAndIcon: string[]
): HTMLLIElement => {
  const weatherForecastListElem: HTMLLIElement = document.createElement('li');
  weatherForecastListElem.classList.add('forecast-info__elem');

  weatherForecastListElem.innerHTML = `
    <span class="forecast-info__elem__day">Пн</span>
    <div class="forecast-info__elem__icon">
      <img src="http://openweathermap.org/img/wn/${descripAndIcon[1]}.png" />
    </div>
    <span class="forecast-info__elem__temp">${averageTemp}°C</span>
    <span class="forecast-info__elem__descrip">${descripAndIcon[0]}</span>
  `;

  return weatherForecastListElem;
};

// Расчет единого усредненного значения дневной температуры (для каждого из 5 дней):
const calcForecastAverageDayTemp = (): number[] => {
  const averageTempsArr: number[] = [];

  if (weatherForecastTempData) {
    weatherForecastTempData.forEach((dayTempData: number[]) => {
      let averageDayTempValue: number | null = null;

      averageDayTempValue = dayTempData.reduce(
        (acc: number, el: number) => (acc += el),
        0
      );

      averageTempsArr.push(Math.floor(averageDayTempValue / 8));
    });
  }

  return averageTempsArr;
};

// Создание списка из 5-ти элементов <li></li> прогноза погоды (для рендера):
const createWeatherForecastElemsList = (): HTMLLIElement[] => {
  const weatherForecastElemsList: HTMLLIElement[] = [];

  if (
    weatherForecastAverageDayTemp !== null &&
    weatherForecastDescripAndIcons !== null
  ) {
    for (let counter: number = 0; counter <= 5; counter++) {
      const descripAndIcon: string[] = weatherForecastDescripAndIcons[counter];

      if (descripAndIcon && descripAndIcon.length === 2) {
        weatherForecastElemsList?.push(
          createWeatherForecastElem(
            weatherForecastAverageDayTemp[counter],
            weatherForecastDescripAndIcons[counter]
          )
        );
      } else {
        console.log(
          'Ошибка, недостаточно данных прогноза погоды для дня:' + counter
        );
      }
    }
  }

  return weatherForecastElemsList;
};

// Рендер прогноза погоды на ближайшие 5 дней:
const renderWeatherForecast = (): void => {
  weatherForecastElemsList?.forEach((element: HTMLLIElement) => {
    weatherForecastContainer?.append(element);
  });
};
