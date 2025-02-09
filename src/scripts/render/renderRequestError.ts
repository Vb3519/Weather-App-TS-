function renderRequestError(containerElem: Element | null): void {
  if (containerElem) {
    containerElem.innerHTML = `
            <h3 class="current-weather__city-error">404 city not found :C</h3>
        `;
  }
}

export default renderRequestError;
