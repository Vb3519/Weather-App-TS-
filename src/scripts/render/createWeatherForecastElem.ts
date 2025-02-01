// создание элемента списка из прогноза погоды на ближайшие 5 дней (всего 5 элементов):

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

export default createWeatherForecastElem;
