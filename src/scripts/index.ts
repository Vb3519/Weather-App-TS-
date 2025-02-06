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

import {
  createCurrentDateString,
  getShortDayNamesData,
  getShortDayAndDateString,
} from './utils/currentDateAndTime';

// Рендер эл-ов:
import renderSearchHistory from './render/renderSearchHistory';
import renderCurrentWeatherData from './render/renderCurrWeatherData';
import createWeatherForecastElem from './render/createWeatherForecastElem';
import createCurrentDayForecastElem from './render/createCurrentDayForecastElem';
import renderWeatherForecastList from './render/renderWeatherForecastList'; // общий для суточного прогноза и 5-ти дневного

// HTML-элементы:
const searchHistoryBtn: HTMLButtonElement | null = document.querySelector(
  '.search-and-input__btn'
);
const weatherAppSearchHistoryWrapper: HTMLDivElement | null =
  document.querySelector('.weather-app__search-history-wrapper');
searchHistoryBtn?.addEventListener('click', () => {
  renderSearchHistory(weatherAppSearchHistoryWrapper);
});

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

const weatherForecastContainer: HTMLDivElement | null = document.querySelector(
  '.weather-app__forecast'
);

const currentDayWeatherForecastContainer: HTMLUListElement | null =
  document.querySelector('.weather-app__current-day');

let currentWeatherData: currentWeatherApiResponse | null | undefined = null; // текущая погода в запрашиваемом городе
let extractedWeatherData: extracted_CurrentWeatherData | null | undefined =
  null; // объект из текущей даты по погоде (для рендера)

let currentWeatherCoords: currentCoordsApiResponse | null = null; // широта и долгота для API-запроса прогноза на 5 дней
let weatherForecastData: weatherForecastApiResponse | null | undefined = null; // прогноз на 5 дней

let currentDayForecastWeatherData: string[][] | null = null; // дневная дата, интервал 3 часа (время, температура, иконка погоды)

let weatherForecastShortDayNames: string[] | null = null; // массив с сокращенными названиями дней (5 дней)
let weatherForecastTempData: number[][] | null = null; // массив массивов температур на 5 дней
let weatherForecastAverageDayTemp: number[] | null = null; // массив усредненных значений температуры на каждый из 5 дней
let weatherForecastDescripAndIcons: string[][] | null = null; // массив описания погоды и индексов иконок погоды на каждый из 5 дней

let weatherForecastElemsList: HTMLLIElement[] | null = null;
let currentDayForecastElemsList: HTMLLIElement[] | null = null;

let currentCityName: string | null = null;

let weatherForecastDetailedDayData: avgForecastDayInfo_Data[] | null = null;

// ТЕКУЩЕЕ ВРЕМЯ И ДАТА:
const currentDateAndTime: string = createCurrentDateString();

// Присваивание значения переменной currentCityName (название города):
const setCityName = () => {
  if (inputElem?.value) {
    currentCityName = inputElem.value;
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
  console.log('Текущая погода:', currentWeatherData);

  // В проверке после fetch() нужно дополнительно указывать свойства объекта (чтоб она была более детальной)
  if (
    currentWeatherData &&
    currentWeatherData.weather &&
    currentWeatherData.main
  ) {
    getWeatherInfoBtnLabel?.classList.remove('animation');

    extractedWeatherData = extractCurrentWeatherDataProps(currentWeatherData);

    currentWeatherCoords = currentWeatherData.coord;
  } else {
    alert('По вашему запросу ничего не нашлось :с');
    getWeatherInfoBtnLabel?.classList.remove('animation');

    if (getWeatherInfoBtn) getWeatherInfoBtn.disabled = false;
    currentCityName = null;
    if (inputElem) inputElem.value = '';
    return;
  }
  console.log('Текущая погода (данные для рендера):', extractedWeatherData);
  console.log('Текущая широта и долгота:', currentWeatherCoords);

  // РЕНДЕР ТЕКУЩЕЙ ПОГОДЫ В ЗАПРАШИВАЕМОМ ГОРОДЕ:
  //---------------------------------------------
  renderCurrentWeatherData(
    currentWeatherDataContainer,
    extractedWeatherData,
    currentDateAndTime
  );

  // ПОЛУЧЕНИЕ ДАТЫ ПРОГНОЗА ПОГОДЫ (на 5 дней):
  if (currentWeatherCoords) {
    const lat: string = currentWeatherCoords.lat;
    const lon: string = currentWeatherCoords.lon;

    weatherForecastData = await fetchForecastWeatherData(lat, lon, API_KEY);

    // дневная дата, интервал 3 часа (время, температура, иконка погоды):
    currentDayForecastWeatherData =
      createCurrentDayForecastData(weatherForecastData);

    // массив с массивами температур на ближайшие 5 суток:
    weatherForecastTempData =
      createWeatherForecastTempDataArr(weatherForecastData);
  }
  console.log(
    'Прогноз погоды на текущий день (интервал 3ч):',
    currentDayForecastWeatherData
  );
  console.log(
    '[[], []...] температуры на 5ти дневн прогноз:',
    weatherForecastTempData
  );

  // РЕНДЕР И ДАННЫЕ ПРОГНОЗА ПОГОДЫ НА ТЕКУЩИЙ ДЕНЬ:
  //----------------------------------------------------------------------------------------
  currentDayForecastElemsList = createCurrentDayForecastElemsList(
    currentDayForecastWeatherData
  );
  console.log(currentDayForecastElemsList);

  renderWeatherForecastList(
    currentDayWeatherForecastContainer,
    currentDayForecastElemsList
  ); // рендер прогноза (текущий день)

  // РЕНДЕР И ДАННЫЕ ПРОГНОЗА ПОГОДЫ НА 5 ДНЕЙ:
  //----------------------------------------------------------------------------------------
  weatherForecastDetailedDayData =
    getDetailedForecastDayData(weatherForecastData);

  weatherForecastShortDayNames = getShortDayNamesData();
  console.log(weatherForecastShortDayNames);

  weatherForecastDescripAndIcons =
    createWeatherForecastIconsAndDescripArr(weatherForecastData);
  console.log(weatherForecastDescripAndIcons);

  weatherForecastAverageDayTemp = calcForecastAverageDayTemp();
  console.log(
    'Усредненные дневные температуры, 5ти днев. прогноз:',
    weatherForecastAverageDayTemp
  );

  // создание элемента списка из прогноза погоды на ближайшие 5 дней (всего 5 элементов)
  weatherForecastElemsList = createWeatherForecastElemsList();
  console.log('forecast elems:', weatherForecastElemsList);

  if (weatherForecastContainer) {
    weatherForecastContainer.innerHTML = `
      <h3 class="weather-forecast__title">Прогноз погоды на пять дней:</h3>
      <ul class="weather-forecast__info forecast-info"></ul>
    `;

    const weatherForecastInfoList: HTMLUListElement | null =
      weatherForecastContainer?.querySelector('.weather-forecast__info');

    renderWeatherForecastList(
      weatherForecastInfoList,
      weatherForecastElemsList
    ); // рендер прогноза (5 дней)
  }

  if (getWeatherInfoBtn) getWeatherInfoBtn.disabled = false;
  currentCityName = null;
  if (inputElem) inputElem.value = '';

  console.log(weatherForecastData);
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

// Создание списка из 5-ти элементов <li></li> прогноза погоды НА 5 ДНЕЙ (для рендера):
const createWeatherForecastElemsList = (): HTMLLIElement[] => {
  const weatherForecastElemsList: HTMLLIElement[] = [];

  if (
    weatherForecastShortDayNames !== null &&
    weatherForecastAverageDayTemp !== null &&
    weatherForecastDescripAndIcons !== null
  ) {
    for (let counter: number = 0; counter < 5; counter++) {
      const descripAndIcon: string[] = weatherForecastDescripAndIcons[counter];

      if (descripAndIcon && descripAndIcon.length === 2) {
        weatherForecastElemsList?.push(
          createWeatherForecastElem(
            weatherForecastShortDayNames[counter],
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

    let weatherForecastDetailedDataElemCounter: number = 0;

    weatherForecastElemsList.forEach((weatherForecastElem: HTMLLIElement) => {
      weatherForecastElem.dataset.counter =
        weatherForecastDetailedDataElemCounter.toString();
      ++weatherForecastDetailedDataElemCounter;

      weatherForecastElem.addEventListener('click', (e: Event) => {
        const currentTarget = e.currentTarget as HTMLElement;

        let elemCounterDataset: string | undefined =
          currentTarget.dataset.counter;

        if (elemCounterDataset) {
          let elemCounterDatasetNumber: number = parseInt(elemCounterDataset);
          console.log(elemCounterDatasetNumber);

          renderDetailedForecastDayData(
            weatherForecastContainer,
            weatherForecastDetailedDayData,
            elemCounterDatasetNumber
          );
        }
      });
    });
  }

  return weatherForecastElemsList;
};

// Массив с дневной датой, интервал 3 часа (время, температура, иконка погоды):
const createCurrentDayForecastData = (
  apiForecastData: weatherForecastApiResponse | null | undefined
) => {
  const currentDayWeatherData: string[][] = [];
  const weatherForecastList: any[] = apiForecastData?.list;

  if (apiForecastData) {
    weatherForecastList.slice(0, 5).forEach((elem) => {
      const threeHoursStepData: string[] = [];

      const currentTime: string = elem.dt_txt.slice(-8, -3); // '2025-01-31 21:00:00' => '21:00'
      const tempVal: string = Math.floor(elem.main.temp).toString();
      const weatherIconId: string = elem.weather[0].icon;

      threeHoursStepData.push(currentTime, tempVal, weatherIconId);
      currentDayWeatherData.push([...threeHoursStepData]); // деструктуризация обязательна (чтобы не запушить ссылку на пустой массив)

      threeHoursStepData.length = 0;
    });
  }

  return currentDayWeatherData;
};

// Создание списка из 5-ти элементов <li></li> прогноза погоды НА СЕГОДНЯ (для рендера):
function createCurrentDayForecastElemsList(
  dayForecastData: string[][] | null
): HTMLLIElement[] {
  const currentDayForecastElemsList: HTMLLIElement[] = [];

  if (dayForecastData) {
    dayForecastData.forEach((threeHoursData: string[]) => {
      currentDayForecastElemsList.push(
        createCurrentDayForecastElem(threeHoursData)
      );
    });
  }

  return currentDayForecastElemsList;
}
interface avgForecastDayInfo_Data {
  iconId: string | null;
  descrip: string | null;
  maxTemp: number | null;
  minTemp: number | null;
  wind_speed: number | null;
  humidity: number | null;
  visibility: number | null;
}

function getDetailedForecastDayData(
  weatherForecast: weatherForecastApiResponse | null | undefined
) {
  const detailedForecastDayInfoArr: avgForecastDayInfo_Data[] = [];

  const weatherForecastList: any[] = weatherForecast?.list;

  for (let i = 4; i < weatherForecastList.length; i += 8) {
    const avgForecastDayInfo: avgForecastDayInfo_Data = {
      iconId: null,
      descrip: null,
      maxTemp: null,
      minTemp: null,
      wind_speed: null,
      humidity: null,
      visibility: null,
    };

    avgForecastDayInfo.iconId = weatherForecastList[i].weather[0].icon;
    avgForecastDayInfo.descrip = weatherForecastList[i].weather[0].description;
    avgForecastDayInfo.maxTemp = Math.floor(
      weatherForecastList[i].main.temp_max
    );
    avgForecastDayInfo.minTemp = Math.floor(
      weatherForecastList[i].main.temp_min
    );
    avgForecastDayInfo.wind_speed = Math.floor(
      weatherForecastList[i].wind.speed
    );
    avgForecastDayInfo.humidity = weatherForecastList[i].main.humidity;
    avgForecastDayInfo.visibility = weatherForecastList[i].visibility / 1000;

    detailedForecastDayInfoArr.push(avgForecastDayInfo);
  }

  console.log('forecastDayDetails:', detailedForecastDayInfoArr);
  return detailedForecastDayInfoArr;
}

const renderDetailedForecastDayData = (
  containerElem: HTMLDivElement | null,
  forecastDayInfoData: avgForecastDayInfo_Data[] | null,
  datasetCounter: number
) => {
  if (containerElem && forecastDayInfoData) {
    const shortDayAndDateStringArr: string[] = getShortDayAndDateString();

    // Детальный вид погоды на день в 5ти дневном прогнозе:
    containerElem.innerHTML = `
    <h3 class="weather-forecast__title">Прогноз погоды на пять дней:</h3>
      <div class="weather-forecast__info-details-container forecast-info-details-container">
        <ul class="forecast-info-details-container__info-details forecast-info-details">
          <li class="forecast-info-details__elem" data-detailsElemCounter="0">${shortDayAndDateStringArr[0]}</li>
          <li class="forecast-info-details__elem" data-detailsElemCounter="1">${shortDayAndDateStringArr[1]}</li>
          <li class="forecast-info-details__elem" data-detailsElemCounter="2">${shortDayAndDateStringArr[2]}</li>
          <li class="forecast-info-details__elem" data-detailsElemCounter="3">${shortDayAndDateStringArr[3]}</li>
          <li class="forecast-info-details__elem" data-detailsElemCounter="4">${shortDayAndDateStringArr[4]}</li>
        </ul>

        <span class="forecast-info-details-container__label"><i class="view-switcher fas fa-caret-up"></i></span>
      </div>

      <div class="weather-forecast__day-details forecast-day-details">
        <div class="forecast-day-details__descrip">
          <div class="forecast-day-details__descrip__icon">
            <img src="http://openweathermap.org/img/wn/${forecastDayInfoData[datasetCounter].iconId}.png" />
          </div>
          <h4 class="forecast-day-details__descrip__title">
          ${forecastDayInfoData[datasetCounter].descrip}
          </h4>
        </div>

        <ul class="forecast-day-details__temp-info">
          <li class="forecast-day-details__temp-info-max">
            Максимальная темп: ${forecastDayInfoData[datasetCounter].maxTemp}°C
          </li>

          <li class="forecast-day-details__temp-info-min">
            Минимальная темп: ${forecastDayInfoData[datasetCounter].minTemp}°C
          </li>
        </ul>

        <ul class="forecast-day-details__params">
          <li class="forecast-day-details__params__elem day-weather">
            <div class="day-weather__label wind-label" title="Скорость ветра">
              <i class="fa-solid fa-wind"></i>
            </div>
            <span class="day-weather__param-value wind-value">${forecastDayInfoData[datasetCounter].wind_speed} м/с</span>
          </li>

          <li class="forecast-day-details__params__elem day-weather">
            <div class="day-weather__label humidity-label" title="Влажность">
              <i class="fa-solid fa-droplet"></i>
            </div>
            <span class="day-weather__param-value humidity-value">${forecastDayInfoData[datasetCounter].humidity}%</span>
          </li>

          <li class="forecast-day-details__params__elem day-weather">
            <div class="day-weather__label visibility-label" title="Видимость">
              <i class="fa-solid fa-eye"></i>
            </div>
            <span class="day-weather__param-value visibility-value">${forecastDayInfoData[datasetCounter].visibility}км</span>
          </li>
        </ul>
      </div>
    `;

    // Обработчик переключения вида с детального на общий:
    const switchForecastViewBtn = containerElem.querySelector('.view-switcher');
    switchForecastViewBtn?.addEventListener('click', () => {
      renderForecastContainerInnerInfo(
        weatherForecastContainer,
        weatherForecastElemsList
      );
    });

    // renderWeatherForecastList() - ререндерит сам список; renderForecastContainerInnerInfo() - ререндерит все содержимое эл-та div
    const renderForecastContainerInnerInfo = (
      containerElem: HTMLDivElement | null,
      forecastElems: HTMLLIElement[] | null
    ): void => {
      if (containerElem && forecastElems) {
        containerElem.innerHTML = `
        <h3 class="weather-forecast__title">Прогноз погоды на пять дней:</h3>
        <ul class="weather-forecast__info forecast-info"></ul>
      `;

        const forecastElemsList: HTMLUListElement | null =
          containerElem.querySelector('.weather-forecast__info');

        forecastElems.forEach((listElem: HTMLLIElement) => {
          forecastElemsList?.append(listElem);
        });
      }
    };

    const forecastDetailsWrapper: HTMLDivElement | null =
      containerElem.querySelector('.weather-forecast__info-details-container');

    const forecastInfoDetailElemsList: NodeListOf<HTMLLIElement> =
      containerElem.querySelectorAll('.forecast-info-details__elem');

    // Подсветка выбранного пользователем элемента:
    forecastInfoDetailElemsList.forEach(
      (detailElem: HTMLLIElement, index: number) => {
        detailElem.classList.remove('selected-detailElem');

        if (index === datasetCounter) {
          detailElem.classList.add('selected-detailElem');
        }

        detailElem.addEventListener('click', (e) => {
          selectAnotherDayWeatherDetailedData(e);

          // добавить скролл по клику
        });
      }
    );

    // Выбор другого дня с детализированной информацией:
    const selectAnotherDayWeatherDetailedData = (e: Event) => {
      const currentTarget = e.currentTarget as HTMLElement;

      if (currentTarget) {
        let weatherDetailsElemCounter: string | undefined =
          currentTarget.dataset.detailselemcounter;
        if (weatherDetailsElemCounter) {
          let weatherDetailsCounterNumber: number = parseInt(
            weatherDetailsElemCounter
          );

          // Просмотр детальной информации по дневной погоде и из 5ти дневного прогноза:
          weatherDetailsCounterNumber !== datasetCounter
            ? renderDetailedForecastDayData(
                weatherForecastContainer,
                weatherForecastDetailedDayData,
                weatherDetailsCounterNumber
              )
            : // Отображение перечня 5ти дневного прогноза погоды с краткой информацией:
              renderForecastContainerInnerInfo(
                weatherForecastContainer,
                weatherForecastElemsList
              );
        }
      }

      console.log(currentTarget.dataset.detailselemcounter);
    };
  }
};
