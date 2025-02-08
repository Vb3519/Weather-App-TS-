// Отображение индикатора загрузки:
async function renderLoadingLabel(containerElem: Element | null) {
  if (containerElem) {
    containerElem.innerHTML = `
      <div class="loading-container">
        <span class="loading-container__title">Загрузка...</span>
        <div class="loading-container__label"></div>
      </div>
      `;

    const loadingLabelContainer: HTMLDivElement | null =
      containerElem.querySelector('.loading-container');

    loadingLabelContainer?.classList.add('active-elem');

    const loadingContainerTitle: HTMLSpanElement | null =
      containerElem.querySelector('.loading-container__title');

    showDots(); // отображение и стирание точек после слова "Загрузка..."

    async function showDots() {
      const titleTextDots: string | undefined =
        loadingContainerTitle?.innerText.slice(-3);

      if (loadingContainerTitle) {
        loadingContainerTitle.innerText = loadingContainerTitle.innerText.slice(
          0,
          -3
        );
      }

      if (titleTextDots && loadingContainerTitle) {
        for (let i = 0; i < titleTextDots.length; i++) {
          await new Promise((resolve, reject) => {
            setTimeout(() => {
              loadingContainerTitle.innerText =
                loadingContainerTitle.innerText + titleTextDots[i];
              resolve('');
            }, 500);
          });
        }
      }

      // Если загрузка информации о погоде идет долго, то функция повторяется при завершении:
      if (loadingContainerTitle?.innerText.endsWith('...')) {
        setTimeout(() => {
          showDots();
        }, 500);
      }
    }
  }
}

export default renderLoadingLabel;
