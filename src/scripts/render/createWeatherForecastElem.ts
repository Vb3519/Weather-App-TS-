import { getShortDayAndDateString } from '../utils/currentDateAndTime';
// создание элемента списка из прогноза погоды на ближайшие 5 дней (всего 5 элементов):

const createWeatherForecastElem = (
  shortDayName: string,
  averageTemp: number,
  descripAndIcon: string[]
): HTMLLIElement => {
  const weatherForecastListElem: HTMLLIElement = document.createElement('li');
  weatherForecastListElem.classList.add('forecast-info__elem');

  weatherForecastListElem.innerHTML = `
  <span class="forecast-info__elem__day">${shortDayName}</span>
  <div class="forecast-info__elem__icon">
  <img src="http://openweathermap.org/img/wn/${descripAndIcon[1]}.png" />
  </div>
  <span class="forecast-info__elem__temp">${averageTemp}°C</span>
  <span class="forecast-info__elem__descrip">${descripAndIcon[0]}</span>
  <span class="forecast-info__elem__details-label"><i class="view-switcher fas fa-caret-down"></i></span>
  `;

  return weatherForecastListElem;
};

export default createWeatherForecastElem;
