// Рендер прогноза погоды на ближайшие 5 дней (или на ближайшие 12 часов):
const renderWeatherForecast = (
  forecastContainerElem: HTMLUListElement | null,
  forecastElems: HTMLLIElement[]
): void => {
  if (forecastContainerElem) {
    forecastContainerElem.innerHTML = ``;
  }

  forecastElems?.forEach((element: HTMLLIElement) => {
    forecastContainerElem?.append(element);
  });
};

export default renderWeatherForecast;
