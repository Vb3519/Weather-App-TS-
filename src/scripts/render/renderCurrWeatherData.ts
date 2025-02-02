import extracted_CurrentWeatherData from '../types/extractedCurrentWeatherData';

// Рендер текущей погоды в запрашиваемом городе:
const renderCurrentWeatherData = (
  containerElem: Element | null,
  cityWeatherData: extracted_CurrentWeatherData | null,
  dateAndTime: string
): void => {
  if (containerElem) {
    containerElem.innerHTML = `
        <h3 class="current-weather__city">${cityWeatherData?.cityName}</h3>
        <p class="current-weather__date">${dateAndTime}</p>
        <p class="current-weather__temp">${cityWeatherData?.temprature} °C</p>
        <ul class="current-weather__descrip">
          <li class="current-weather__descrip__feels-like">Ощущается как ${
            cityWeatherData?.temp_feels_like
          } °C</li>
          <li class="current-weather__descrip__text-and-label">
              <img
                class="current-weather__descrip__text-and-label__label"
                src="http://openweathermap.org/img/wn/${
                  cityWeatherData?.currentWeatherIconId
                }.png"
              />
              <span class="current-weather__descrip__text-and-label__text"
                >${cityWeatherData?.weatherDescripText}</span
              >
            </li>
        </ul>
            
        <ul class="current-weather__params">
          <li class="current-weather__params__elem current-weather">
            <div class="current-weather__label wind-label" title="Скорость ветра"><i class="fa-solid fa-wind"></i></div>
            <span class="current-weather__param-value wind-value">${
              cityWeatherData?.wind_speed
            } км/ч</span>
          </li>
          <li class="current-weather__params__elem current-weather">
            <div class="current-weather__label humidity-label" title="Влажность"><i class="fa-solid fa-droplet"></i></div>
            <span class="current-weather__param-value humidity-value">${
              cityWeatherData?.humidity
            }%</span>
          </li>
          <li class="current-weather__params__elem current-weather">
            <div class="current-weather__label visibility-label" title="Видимость"><i class="fa-solid fa-eye"></i></div>
            <span class="current-weather__param-value visibility-value">${
              cityWeatherData?.visibility
                ? cityWeatherData.visibility / 1000
                : ''
            } км</span>
          </li>
        </ul>    
      `;
  }
};

export default renderCurrentWeatherData;
