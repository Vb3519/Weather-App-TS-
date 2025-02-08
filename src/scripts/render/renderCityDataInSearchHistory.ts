import extracted_CurrentWeatherData from '../types/extractedCurrentWeatherData';
import { weatherSearchHistory_State } from '../index';

const renderCityDataInSearchHistory = (
  wrapperElem: HTMLDivElement | null,
  requestedWeatherData: extracted_CurrentWeatherData,
  weatherSearchHistoryStateData: weatherSearchHistory_State
): void => {
  if (wrapperElem) {
    const weatherSearchRequestsHistoryList: HTMLUListElement | null =
      wrapperElem.querySelector('.search-history-wrapper__search-history');

    if (weatherSearchRequestsHistoryList) {
      const weatherSearchRequestsElemsList: NodeListOf<HTMLLIElement> =
        weatherSearchRequestsHistoryList.querySelectorAll(
          '.weather-search-history__elem'
        );

      let currentRequestCounter: number =
        weatherSearchHistoryStateData.searhRequestCounter;

      if (currentRequestCounter === 4) {
        currentRequestCounter = currentRequestCounter % 4;
      }

      weatherSearchRequestsElemsList[currentRequestCounter].innerHTML = `
        <span class="weather-search-history__elem__city-name">${requestedWeatherData.cityName}</span>
        <div class="weather-search-history__elem__weather-info history-elem-weather-info">
          <div class="history-elem-weather-info__label">
            <img
              class="current-weather__descrip__text-and-label__label"
              src="http://openweathermap.org/img/wn/${requestedWeatherData.currentWeatherIconId}.png"
            />
          </div>
          <span class="history-elem-weather-info__temp">${requestedWeatherData.temprature} °C</span>
        </div>
      `;
    }
  }
};

export default renderCityDataInSearchHistory;
