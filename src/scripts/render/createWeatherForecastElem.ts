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

  // После создания элемента, добавление к нему обработчика на отображение детального вида:
  const weatherForecastContainer: HTMLDivElement | null =
    document.querySelector('.weather-app__forecast');

  const weatherContainerInnerSwtichBtn: HTMLSpanElement | null =
    weatherForecastListElem?.querySelector('.view-switcher');

  weatherContainerInnerSwtichBtn?.addEventListener('click', () => {
    // renderWeatherForecastDayDetails(weatherForecastContainer);
  });

  return weatherForecastListElem;
};

export default createWeatherForecastElem;
