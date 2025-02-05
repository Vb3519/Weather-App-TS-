// Рендер прогноза погоды на ближайшие 5 дней (или на ближайшие 12 часов):
const renderWeatherForecastList = (
  forecastElemsList: HTMLUListElement | null,
  forecastElems: HTMLLIElement[] | null
): void => {
  if (forecastElemsList) {
    forecastElemsList.innerHTML = ``;
  }

  forecastElems?.forEach((element: HTMLLIElement) => {
    forecastElemsList?.append(element);
  });
};

export default renderWeatherForecastList;
