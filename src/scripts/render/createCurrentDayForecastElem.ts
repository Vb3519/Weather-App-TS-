// Создание элемента списка из прогноза погоды на текущий день (на ближайшие 12 часов, всего 5 эл-ов):
const createCurrentDayForecastElem = (
  threeHoursWeatherData: string[]
): HTMLLIElement => {
  const currentDayForecastElem: HTMLLIElement = document.createElement('li');
  currentDayForecastElem.classList.add('current-day-forecast__elem');

  currentDayForecastElem.innerHTML = `
      <span class="current-day-forecast__elem__time">${threeHoursWeatherData[0]}</span>
      <div class="current-day-forecast__elem__icon">
        <img src="http://openweathermap.org/img/wn/${threeHoursWeatherData[2]}.png" />
      </div>
      <span class="current-day-forecast__elem__temp">${threeHoursWeatherData[1]}°C</span>
    `;

  return currentDayForecastElem;
};

export default createCurrentDayForecastElem;
