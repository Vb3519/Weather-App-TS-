(()=>{"use strict";var n={919:(n,e,t)=>{t.d(e,{A:()=>o});var r=t(601),a=t.n(r),i=t(314),s=t.n(i)()(a());s.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n  list-style: none;\n  user-select: none;\n}\n\n.app-page {\n  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);\n  width: 100%;\n  height: 100vh;\n  background-color: #404040;\n  color: whitesmoke;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.app-page__weather {\n  position: relative;\n  font-size: 1.1rem;\n  border-radius: 0.5rem;\n  padding: 1rem;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  background: linear-gradient(135deg, #217e64, #443d74);\n}\n\n.weather-app__search-and-input {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.searh-history-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n  background-color: rgba(255, 255, 255, 0.2);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n  border: none;\n  color: whitesmoke;\n  font-size: 1.2rem;\n  border-radius: 0.2rem;\n}\n\n.fa-bars {\n  margin-top: 0.1rem;\n}\n\n.searh-history-btn:hover {\n  cursor: pointer;\n  background-color: rgba(255, 255, 255, 0.15);\n  color: #b2cbd8;\n}\n\n/* История просмотров погоды: */\n.weather-app__search-history-wrapper {\n  z-index: 1;\n  opacity: 0;\n  visibility: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 0;\n  top: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.9);\n  transition: 0.5s;\n}\n\n.search-history-wrapper__search-history {\n  padding: 0.5rem;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.5rem;\n  border-radius: 0.3rem;\n}\n\n.weather-search-history__elem {\n  min-width: 140px;\n  min-height: 90px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem;\n  background-color: #20785f;\n  border-radius: 0.3rem;\n}\n\n.weather-search-history__elem:hover {\n  background-color: #20785fbe;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);\n  transition: 0.3s, box-shadow 0.3s;\n  cursor: pointer;\n}\n\n.weather-search-history__elem .fa-circle-question {\n  font-size: 2rem;\n}\n\n.weather-search-history__elem__city-name {\n  white-space: nowrap;\n}\n\n.weather-search-history__elem__weather-info {\n  flex-wrap: wrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n/* Поле инпут: */\n.search-and-input__input {\n  width: 80%;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  border-radius: 0.3rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 0.2rem;\n  padding: 0.2rem;\n  background-color: whitesmoke;\n}\n\n.input-inner__label {\n  border: none;\n  background-color: whitesmoke;\n}\n\n.input-inner__input-elem {\n  width: 90%;\n  padding: 0.2rem;\n  outline: none;\n  font-size: 1.1rem;\n  border: none;\n  background-color: whitesmoke;\n}\n\n.fa-magnifying-glass {\n  padding: 0.2rem;\n  font-size: 1.3rem;\n  color: #404040;\n  opacity: 0.8;\n}\n\n.fa-magnifying-glass:hover {\n  cursor: pointer;\n}\n\n.search-and-input__input:hover .fa-magnifying-glass {\n  color: rgb(22, 22, 22);\n}\n\n/* Анимация поиска информации по прогнозу погоды: */\n.fa-magnifying-glass.animation {\n  animation: glass-blink-animation 2s;\n  animation-timing-function: linear;\n  animation-iteration-count: 1;\n}\n\n@keyframes glass-blink-animation {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n/* Текущий прогноз погоды: */\n.current-weather__city-error {\n  grid-column: span 2;\n  margin: auto;\n}\n\n.weather-app__current {\n  justify-content: center;\n  position: relative;\n  flex-basis: 30%;\n  padding: 0.5rem;\n  background-color: rgba(255, 255, 255, 0.2);\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  border-radius: 0.3rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.current-weather__city {\n  grid-column: span 2;\n  color: #e0e0e0;\n}\n\n.current-weather__descrip__label {\n  min-height: 54px;\n}\n\n.current-weather__params {\n  display: flex;\n  gap: 1rem;\n}\n\n.current-weather__params__elem {\n  display: flex;\n  gap: 0.2rem;\n  align-items: center;\n}\n\n.current-weather__label {\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n  background: #86959d;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 38px;\n  min-height: 38px;\n  padding: 0.6rem;\n  border-radius: 0.2rem;\n}\n\n/* Текущий день прогноз погоды: */\n.weather-app__current-day {\n  flex-basis: 10%;\n  background-color: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  border-radius: 0.3rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.2rem;\n  padding: 0.5rem;\n}\n\n.current-day-forecast__elem {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.5rem 0;\n  border-radius: 0.2rem;\n}\n\n.current-day-forecast__elem:hover {\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);\n  transition: 0.3s, box-shadow 0.3s;\n}\n\n/* Прогноз погоды на ближайшие 5 дней: */\n.weather-app__forecast {\n  flex-basis: 35%;\n  padding: 0.5rem;\n  background-color: rgba(255, 255, 255, 0.15);\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  border-radius: 0.3rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.weather-forecast__title {\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid rgb(68 61 116 / 20%);\n  color: #e0e0e0;\n}\n\n.weather-forecast__info {\n  display: flex;\n  flex-direction: column;\n  min-height: 270px;\n}\n\n.forecast-info__elem {\n  padding: 0 0.5rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  border-radius: 0.2rem;\n}\n\n.forecast-info__elem:hover {\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);\n  transition: 0.3s, box-shadow 0.3s;\n}\n\n/* Рендер деталей погоды (прогноз 5 дней) по каждому дню: */\n.weather-forecast__title {\n  text-align: center;\n}\n\n.weather-forecast__info-details-container {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2rem;\n}\n\n.forecast-info-details-container__label > i {\n  cursor: pointer;\n}\n\n.forecast-info-details-container__info-details {\n  display: flex;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 0.5rem;\n}\n\n.forecast-info-details__elem {\n  padding: 1rem;\n  border-radius: 0.3rem;\n  white-space: nowrap;\n}\n\n.forecast-info-details__elem:hover {\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);\n  transition: 0.3s, box-shadow 0.3s;\n}\n\n.forecast-day-details__params__elem {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.weather-forecast__day-details {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.forecast-day-details__temp-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: center;\n}\n\n.forecast-day-details__descrip {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n\n.forecast-day-details__params {\n  width: 100%;\n  display: flex;\n  gap: 2rem;\n  align-items: center;\n  justify-content: center;\n}\n\n.day-weather__label {\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n  background: #86959d;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 45px;\n  height: 45px;\n  padding: 0.6rem;\n  border-radius: 0.2rem;\n}\n\n.forecast-info-details-container__label {\n  padding-right: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n/* Индикатор загрузки: */\n.loading-container {\n  visibility: hidden;\n  left: 0;\n  top: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.loading-container__title {\n  min-width: 118px;\n}\n\n.loading-container__label {\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* --------------------------------------------------------------------------------- */\n/* ДЕСКТОПЫ С БОЛЬШИМИ ЭКРАНАМИ: */\n/* --------------------------------------------------------------------------------- */\n@media (min-width: 1281px) {\n  .app-page__weather {\n    padding: 2rem 6rem;\n    font-size: 1.5rem;\n    width: 100%;\n    height: 100%;\n    gap: 1rem;\n    justify-content: space-between;\n  }\n\n  /* ХЕАДЕР: */\n  .search-and-input__btn {\n    padding: 1rem;\n  }\n\n  .search-and-input__input {\n    padding: 1rem;\n    gap: 0.5rem;\n  }\n\n  .input-inner__input-elem {\n    font-size: 1.5rem;\n    padding: 0;\n  }\n\n  .fa-magnifying-glass {\n    font-size: 1.6rem;\n  }\n\n  /* ТЕКУЩАЯ ПОГОДА: */\n  .weather-app__current {\n    justify-content: center;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem;\n    padding: 1rem;\n  }\n\n  .current-weather__city {\n    text-align: center;\n    font-size: 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .current-weather__temp {\n    margin: auto;\n    font-size: 3rem;\n  }\n\n  .current-weather__descrip {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n\n  .current-weather__descrip__feels-like {\n    white-space: nowrap;\n  }\n\n  .current-weather__label {\n    min-width: 45px;\n    min-height: 45px;\n  }\n\n  .current-weather__descrip__text-and-label {\n    display: flex;\n    align-items: center;\n    border: none;\n    gap: 1rem;\n  }\n\n  .current-weather__params {\n    display: flex;\n    justify-content: space-around;\n    grid-column: span 2;\n    width: 100%;\n  }\n\n  .current-weather__params__elem {\n    gap: 1rem;\n  }\n\n  /* ПРОГНОЗ НА ТЕКУЩИЙ ДЕНЬ: */\n  .weather-app__current-day {\n    padding: 1rem;\n  }\n\n  .current-day-forecast__elem {\n    padding: 1rem;\n    flex-direction: row;\n    gap: 0.5rem;\n  }\n\n  .weather-app__forecast {\n    padding: 1rem;\n  }\n\n  /* ПРОГНОЗ НА 5 ДНЕЙ: */\n  .weather-forecast__info {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 0.5rem;\n  }\n\n  .forecast-info__elem {\n    gap: 2rem;\n    font-size: 1.7rem;\n  }\n\n  /* Рендер деталей погоды (прогноз 5 дней) по каждому дню: */\n  .forecast-info-details-container__info-details,\n  .weather-forecast__info-details-container {\n    gap: 2rem;\n  }\n\n  .forecast-info-details__elem {\n    padding: 1rem;\n  }\n}\n\n/* --------------------------------------------------------------------------------- */\n/* ДЕСКТОПЫ С МАЛЕНЬКИМИ ЭКРАНАМИ: */\n/* --------------------------------------------------------------------------------- */\n@media (max-width: 1280px) {\n  .app-page__weather {\n    padding: 2rem 4rem;\n    font-size: 1.5rem;\n    width: 100%;\n    height: 100%;\n    gap: 1rem;\n    justify-content: space-between;\n  }\n\n  /* ХЕАДЕР: */\n  .search-and-input__btn {\n    padding: 1rem;\n  }\n\n  .search-and-input__input {\n    padding: 1rem;\n    gap: 0.5rem;\n  }\n\n  .input-inner__input-elem {\n    font-size: 1.5rem;\n    padding: 0;\n  }\n\n  .fa-magnifying-glass {\n    font-size: 1.6rem;\n  }\n\n  /* ТЕКУЩАЯ ПОГОДА: */\n  .weather-app__current {\n    justify-content: center;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem;\n    padding: 1rem;\n  }\n\n  .current-weather__city {\n    text-align: center;\n    font-size: 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .current-weather__temp {\n    margin: auto;\n    font-size: 3rem;\n  }\n\n  .current-weather__descrip {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n\n  .current-weather__descrip__feels-like {\n    white-space: nowrap;\n  }\n\n  .current-weather__label {\n    min-width: 45px;\n    min-height: 45px;\n  }\n\n  .current-weather__descrip__text-and-label {\n    display: flex;\n    align-items: center;\n    border: none;\n    gap: 1rem;\n  }\n\n  .current-weather__params {\n    display: flex;\n    justify-content: space-around;\n    grid-column: span 2;\n    width: 100%;\n  }\n\n  .current-weather__params__elem {\n    gap: 1rem;\n  }\n\n  /* ПРОГНОЗ НА ТЕКУЩИЙ ДЕНЬ: */\n  .weather-app__current-day {\n    padding: 1rem;\n  }\n\n  .current-day-forecast__elem {\n    padding: 1rem;\n    flex-direction: row;\n    gap: 0.5rem;\n  }\n\n  .weather-app__forecast {\n    padding: 1rem;\n  }\n\n  /* ПРОГНОЗ НА 5 ДНЕЙ: */\n  .weather-forecast__info {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 0.5rem;\n  }\n\n  .forecast-info__elem {\n    gap: 2rem;\n    font-size: 1.7rem;\n  }\n\n  /* Рендер деталей погоды (прогноз 5 дней) по каждому дню: */\n  .forecast-info-details-container__info-details,\n  .weather-forecast__info-details-container {\n    gap: 2rem;\n  }\n\n  .forecast-info-details__elem {\n    padding: 1rem;\n  }\n}\n\n/* --------------------------------------------------------------------------------- */\n/* ПОРТАТИВНЫЕ УСТРОЙСТВА (ПЛАНШЕТЫ): */\n/* --------------------------------------------------------------------------------- */\n\n@media (max-width: 1185px) {\n  /* 1100px */\n  .app-page__weather {\n    padding: 1rem 2rem;\n  }\n\n  .current-day-forecast__elem {\n    padding: 1rem;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n\n  .weather-app__forecast {\n    padding: 1rem;\n  }\n\n  .forecast-info__elem {\n    gap: 2rem;\n    font-size: 1.5rem;\n  }\n\n  /* Рендер деталей погоды (прогноз 5 дней) по каждому дню: */\n  .forecast-info-details-container__info-details,\n  .weather-forecast__info-details-container {\n    gap: 1rem;\n  }\n\n  .forecast-info-details__elem {\n    padding: 0.7rem;\n  }\n}\n\n/* --------------------------------------------------------------------------------- */\n/* МОБИЛЬНЫЕ УСТРОЙСТВА (ЛАНДШАФТНАЯ ОРИЕНТАЦИЯ): */\n/* --------------------------------------------------------------------------------- */\n\n@media (max-width: 885px) {\n  /* 768px */\n  .app-page__weather {\n    padding: 1.5rem 2.5rem;\n    font-size: 1.5rem;\n    width: 100%;\n    height: 100%;\n    gap: 1rem;\n    justify-content: space-between;\n  }\n\n  /* ХЕАДЕР: */\n  .search-and-input__btn {\n    padding: 1rem;\n  }\n\n  .search-and-input__input {\n    padding: 1rem;\n    gap: 0.5rem;\n  }\n\n  .input-inner__input-elem {\n    font-size: 1.5rem;\n    padding: 0;\n  }\n\n  .fa-magnifying-glass {\n    font-size: 1.6rem;\n  }\n\n  /* ТЕКУЩАЯ ПОГОДА: */\n  .weather-app__current {\n    justify-content: center;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem;\n    padding: 1rem;\n  }\n\n  .current-weather__city {\n    text-align: center;\n    font-size: 1.8rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .current-weather__temp {\n    margin: auto;\n    font-size: 2.7rem;\n  }\n\n  .current-weather__descrip {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n\n  .current-weather__descrip__feels-like {\n    white-space: nowrap;\n  }\n\n  .current-weather__label {\n    min-width: 45px;\n    min-height: 45px;\n  }\n\n  .current-weather__descrip__text-and-label {\n    display: flex;\n    align-items: center;\n    border: none;\n    gap: 1rem;\n  }\n\n  .current-weather__params {\n    display: flex;\n    justify-content: space-around;\n    grid-column: span 2;\n    width: 100%;\n  }\n\n  .current-weather__params__elem {\n    gap: 1rem;\n  }\n\n  /* ПРОГНОЗ НА ТЕКУЩИЙ ДЕНЬ: */\n  .weather-app__current-day {\n    padding: 1rem;\n  }\n\n  .current-day-forecast__elem {\n    padding: 1rem;\n    gap: 0;\n  }\n\n  .weather-app__forecast {\n    padding: 1rem;\n  }\n\n  /* ПРОГНОЗ НА 5 ДНЕЙ: */\n  .weather-forecast__title {\n    font-size: 1.6rem;\n  }\n\n  .weather-forecast__info {\n    display: flex;\n    gap: 0;\n  }\n\n  .forecast-info__elem {\n    gap: 2rem;\n  }\n\n  /* Рендер деталей погоды (прогноз 5 дней) по каждому дню: */\n  .weather-forecast__info-details-container {\n    width: 100%;\n    overflow-x: scroll;\n  }\n\n  .weather-forecast__info-details-container {\n    justify-content: space-between;\n  }\n\n  .forecast-info-details-container__info-details,\n  .weather-forecast__info-details-container {\n    gap: 0.5rem;\n  }\n\n  .forecast-info-details__elem {\n    padding: 0.5rem;\n  }\n}\n\n/* --------------------------------------------------------------------------------- */\n/* МОБИЛЬНЫЕ УСТРОЙСТВА (ПОРТРЕТНАЯ ОРИЕНТАЦИЯ): ----------------------------------- */\n/* --------------------------------------------------------------------------------- */\n\n@media (max-width: 600px) {\n  .app-page__weather {\n    padding: 1rem;\n    font-size: 1rem;\n    width: 100%;\n    height: 100vh;\n    justify-content: space-between;\n  }\n\n  /* ХЕАДЕР: */\n  .search-and-input__btn {\n    padding: 0.5rem;\n  }\n\n  .search-and-input__input {\n    padding: 0.4rem 0.2rem;\n    min-width: 240px;\n  }\n\n  .input-inner__input-elem {\n    font-size: 1rem;\n    padding: 0;\n  }\n\n  .fa-magnifying-glass {\n    font-size: 1.1rem;\n  }\n\n  /* ТЕКУЩАЯ ПОГОДА: */\n\n  .loading-container__title {\n    min-width: 80px;\n  }\n\n  .weather-app__current {\n    display: flex;\n    padding: 0.5rem;\n  }\n\n  .current-weather__city {\n    text-align: center;\n    font-size: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .current-weather__temp {\n    margin: 0;\n    font-size: 1.2rem;\n  }\n\n  .current-weather__descrip {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n\n  .current-weather__label {\n    min-width: 35px;\n    min-height: 35px;\n  }\n\n  .current-weather__descrip__text-and-label {\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n    padding-bottom: 0.5rem;\n    border-bottom: 2px solid rgb(109 194 216 / 20%);\n  }\n\n  .current-weather__params {\n    display: flex;\n    justify-content: space-around;\n    grid-column: span 2;\n    width: 100%;\n  }\n\n  .current-weather__params__elem {\n    flex-direction: column;\n    flex-basis: 30%;\n    gap: 0.5rem;\n  }\n\n  /* История просмотров погоды: */\n  .weather-app__search-history-wrapper {\n    opacity: 0;\n    visibility: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    right: 0;\n    top: 0;\n    position: absolute;\n    width: 100%;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.9);\n    transition: 0.5s;\n  }\n\n  .search-history-wrapper__search-history {\n    padding: 0.5rem;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 0.5rem;\n    border-radius: 0.3rem;\n  }\n\n  .weather-search-history__elem {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0.5rem;\n    background-color: #20785f;\n    border-radius: 0.3rem;\n  }\n\n  .weather-search-history__elem:hover {\n    background-color: #20785fbe;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);\n    transition: 0.3s, box-shadow 0.3s;\n    cursor: pointer;\n  }\n\n  .weather-search-history__elem__city-name {\n    white-space: nowrap;\n  }\n\n  .weather-search-history__elem__weather-info {\n    flex-wrap: wrap;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.5rem;\n  }\n\n  /* ПРОГНОЗ НА ТЕКУЩИЙ ДЕНЬ: */\n  .weather-app__current-day {\n    padding: 0.5rem;\n  }\n\n  .current-day-forecast__elem {\n    padding: 0.5rem 0;\n  }\n\n  .weather-app__forecast {\n    padding: 0.5rem;\n  }\n\n  /* ПРОГНОЗ НА 5 ДНЕЙ: */\n  .weather-forecast__title {\n    font-size: 1.2rem;\n  }\n\n  .weather-forecast__info {\n    display: flex;\n    gap: 0.5rem;\n  }\n\n  .forecast-info__elem {\n    font-size: 1rem;\n    justify-content: space-between;\n    gap: 0.5rem;\n  }\n\n  .weather-forecast__title {\n    text-align: center;\n  }\n\n  .forecast-info__elem__descrip {\n    margin-left: auto;\n    text-align: right;\n  }\n\n  /* Рендер деталей погоды (прогноз 5 дней) по каждому дню: */\n\n  .day-weather__label {\n    width: 38px;\n    height: 38px;\n  }\n}\n\n.active-elem {\n  visibility: visible;\n  opacity: 1;\n}\n\n.inactive-elem {\n  visibility: hidden;\n}\n\n.selected-detailElem {\n  background-color: rgba(255, 255, 255, 0.3);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);\n}\n\n::-webkit-scrollbar {\n  height: 8px;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: rgb(68 61 116 / 20%);\n  border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background-color: rgb(68 61 116 / 30%);\n  border-radius: 10px;\n  cursor: pointer;\n}\n",""]);const o=s},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(r)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(s[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},s=[],o=0;o<n.length;o++){var l=n[o],c=r.base?l[0]+r.base:l[0],d=i[c]||0,p="".concat(c," ").concat(d);i[c]=d+1;var m=t(p),_={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)e[m].references++,e[m].updater(_);else{var u=a(_,r);r.byIndex=o,e.splice(o,0,{identifier:p,updater:u,references:1})}s.push(p)}return s}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=r(n=n||[],a=a||{});return function(n){n=n||[];for(var s=0;s<i.length;s++){var o=t(i[s]);e[o].references--}for(var l=r(n,a),c=0;c<i.length;c++){var d=t(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=l}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,t.d({},{r:()=>C});var r=t(72),a=t.n(r),i=t(825),s=t.n(i),o=t(659),l=t.n(o),c=t(56),d=t.n(c),p=t(540),m=t.n(p),_=t(113),u=t.n(_),f=t(919),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=l().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=m(),a()(f.A,h),f.A&&f.A.locals&&f.A.locals;const g=function(n){n&&(n.innerHTML='\n            <h3 class="current-weather__city-error">404 city not found :C</h3>\n        ')},w="0d7b538e37d8be8642a8f62cd18c61e3",y={0:"Воскресенье",1:"Понедельник",2:"Вторник",3:"Среда",4:"Четверг",5:"Пятница",6:"Суббота"},b=["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],x=["Янв","Фев","Март","Апр","Май","Июнь","Июль","Авг","Сент","Окт","Нояб","Дек"],v={0:"января",1:"февраля",2:"марта",3:"апреля",4:"мая",5:"июня",6:"июля",7:"августа",8:"сентября",9:"октября",10:"ноября",11:"декабря"},k=function(){const n=new Date;return{currentDate:n.getDate().toString(),currentMonthIndex:n.getMonth(),currentYear:n.getFullYear().toString(),currentDayIndex:n.getDay()}}(),$=(n,e,t)=>{n&&(n.innerHTML=`\n        <h3 class="current-weather__city">${e?.cityName}</h3>\n        <p class="current-weather__date">${t}</p>\n        <p class="current-weather__temp">${e?.temprature} °C</p>\n        <ul class="current-weather__descrip">\n          <li class="current-weather__descrip__feels-like">Ощущается как ${e?.temp_feels_like} °C</li>\n          <li class="current-weather__descrip__text-and-label">\n              <img\n                class="current-weather__descrip__text-and-label__label"\n                src="http://openweathermap.org/img/wn/${e?.currentWeatherIconId}.png"\n              />\n              <span class="current-weather__descrip__text-and-label__text"\n                >${e?.weatherDescripText}</span\n              >\n            </li>\n        </ul>\n            \n        <ul class="current-weather__params">\n          <li class="current-weather__params__elem current-weather">\n            <div class="current-weather__label wind-label" title="Скорость ветра"><i class="fa-solid fa-wind"></i></div>\n            <span class="current-weather__param-value wind-value">${e?.wind_speed} м/с</span>\n          </li>\n          <li class="current-weather__params__elem current-weather">\n            <div class="current-weather__label humidity-label" title="Влажность"><i class="fa-solid fa-droplet"></i></div>\n            <span class="current-weather__param-value humidity-value">${e?.humidity}%</span>\n          </li>\n          <li class="current-weather__params__elem current-weather">\n            <div class="current-weather__label visibility-label" title="Видимость"><i class="fa-solid fa-eye"></i></div>\n            <span class="current-weather__param-value visibility-value">${e?.visibility?e.visibility/1e3:""} км</span>\n          </li>\n        </ul>    \n      `)},j=(n,e,t)=>{const r=document.createElement("li");return r.classList.add("forecast-info__elem"),r.innerHTML=`\n  <span class="forecast-info__elem__day">${n}</span>\n  <div class="forecast-info__elem__icon">\n  <img src="http://openweathermap.org/img/wn/${t[1]}.png" />\n  </div>\n  <span class="forecast-info__elem__temp">${e}°C</span>\n  <span class="forecast-info__elem__descrip">${t[0]}</span>\n  <span class="forecast-info__elem__details-label"><i class="view-switcher fas fa-caret-down"></i></span>\n  `,r},T=(n,e)=>{n&&(n.innerHTML=""),e?.forEach((e=>{n?.append(e)}))},z=document.querySelector(".search-and-input__btn"),S=document.querySelector(".weather-app__search-history-wrapper");z?.addEventListener("click",(()=>{(n=>{n?.classList.add("active-elem");const e=()=>{n?.classList.remove("active-elem"),n?.removeEventListener("click",e)};n?.addEventListener("click",e)})(S)}));const E=document.querySelector(".input-inner__input-elem"),L=document.querySelector(".input-inner__label"),q=document.querySelector(".fa-magnifying-glass"),C=document.querySelector(".weather-app__current"),M=document.querySelector(".weather-app__forecast"),I=document.querySelector(".weather-app__current-day"),D=document.querySelector(".weather-app__search-history-wrapper");document.querySelector(".loading-container"),document.querySelector(".loading-container__title");let H=null,A=null,R=null,N=null,P=null,O=null,W=null,F=null,Y=null,U=null,J=null,B=null,G=null;const K={weatherSearchHistory:[],searhRequestCounter:0},Q=function(){const n=k.currentMonthIndex,e=k.currentDayIndex;return`${k.currentDate} ${v[n]} ${k.currentYear}, ${y[e]}`}();E?.addEventListener("input",(()=>{E?.value&&(B=E.value)}));const V=async n=>{if(B){if(console.log("Клик ^^"),L&&(L.disabled=!0),q?.classList.add("animation"),H=await(async(n,e)=>{let t=null;try{(async function(n){if(n){n.innerHTML='\n      <div class="loading-container">\n        <span class="loading-container__title">Загрузка...</span>\n        <div class="loading-container__label"></div>\n      </div>\n      ';const e=n.querySelector(".loading-container");e?.classList.add("active-elem");const t=n.querySelector(".loading-container__title");async function r(){const n=t?.innerText.slice(-3);if(t&&(t.innerText=t.innerText.slice(0,-3)),n&&t)for(let e=0;e<n.length;e++)await new Promise(((r,a)=>{setTimeout((()=>{t.innerText=t.innerText+n[e],r("")}),500)}));t?.innerText.endsWith("...")&&setTimeout((()=>{r()}),500)}r()}})(C),await new Promise(((n,e)=>{setTimeout((()=>{n()}),2e3)}));const r=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=${e}&units=metric&lang=ru`);return t=await r.json(),t}catch(n){g(C),console.log("Ошибка получения данных о текущей погоде",n)}})(n,w),console.log("Текущая погода:",H),!(H&&H.weather&&H.main))return alert("По вашему запросу ничего не нашлось :с"),q?.classList.remove("animation"),L&&(L.disabled=!1),B=null,E&&(E.value=""),void(A?$(C,A,Q):g(C));if(q?.classList.remove("animation"),A=X(H),((n,e,t)=>{if(n){const r=n.querySelector(".search-history-wrapper__search-history");if(r){const n=r.querySelectorAll(".weather-search-history__elem");let a=t.searhRequestCounter;4===a&&(a%=4),n[a].innerHTML=`\n        <span class="weather-search-history__elem__city-name">${e.cityName}</span>\n        <div class="weather-search-history__elem__weather-info history-elem-weather-info">\n          <div class="history-elem-weather-info__label">\n            <img\n              class="current-weather__descrip__text-and-label__label"\n              src="http://openweathermap.org/img/wn/${e.currentWeatherIconId}.png"\n            />\n          </div>\n          <span class="history-elem-weather-info__temp">${e.temprature} °C</span>\n        </div>\n      `}}})(D,A,K),function(n){if(n){const e=K.weatherSearchHistory;e.length<4?(e.push(n),++K.searhRequestCounter,console.log("История запросов заполняется:",e)):(K.searhRequestCounter=K.searhRequestCounter%4,e.splice(K.searhRequestCounter,1),e.unshift(n),K.searhRequestCounter=(K.searhRequestCounter+1)%4,console.log("История запросов заполнена:",e))}}(A),R=H.coord,console.log("Текущая погода (данные для рендера):",A),console.log("Текущая широта и долгота:",R),$(C,A,Q),R){const n=R.lat,e=R.lon;N=await async function(n,e,t){let r=null;try{const a=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${n}&lon=${e}&appid=${t}&units=metric&lang=ru`);return r=await a.json(),r}catch(n){console.log("Ошибка получения данных о прогнозе погоды на ближайшие 5 дней",n)}}(n,e,w),P=en(N),W=function(n){const e=n?.list,t=[],r=[];let a=0;for(let n=0;n<e.length&&(r.push(e[n].main.temp),++a,8===a&&(t.push([...r]),a=0,r.length=0),5!==t.length);n++);return t}(N)}if(console.log("Прогноз погоды на текущий день (интервал 3ч):",P),console.log("[[], []...] температуры на 5ти дневн прогноз:",W),J=function(n){const e=[];return n&&n.forEach((n=>{e.push((n=>{const e=document.createElement("li");return e.classList.add("current-day-forecast__elem"),e.innerHTML=`\n      <span class="current-day-forecast__elem__time">${n[0]}</span>\n      <div class="current-day-forecast__elem__icon">\n        <img src="http://openweathermap.org/img/wn/${n[2]}.png" />\n      </div>\n      <span class="current-day-forecast__elem__temp">${n[1]}°C</span>\n    `,e})(n))})),e}(P),console.log(J),T(I,J),G=function(n){const e=[],t=n?.list;for(let n=4;n<t.length;n+=8){const r={iconId:null,descrip:null,maxTemp:null,minTemp:null,wind_speed:null,humidity:null,visibility:null};r.iconId=t[n].weather[0].icon,r.descrip=t[n].weather[0].description,r.maxTemp=Math.floor(t[n].main.temp_max),r.minTemp=Math.floor(t[n].main.temp_min),r.wind_speed=Math.floor(t[n].wind.speed),r.humidity=t[n].main.humidity,r.visibility=t[n].visibility/1e3,e.push(r)}return console.log("forecastDayDetails:",e),e}(N),O=(()=>{const n=[];let e=k.currentDayIndex;const t=b.length;for(let r=0;r<t;r++)e<t-1?(n.push(b[e]),++e):(n.push(b[e]),e=0);return n.slice(0,5)})(),console.log(O),Y=function(n){const e=n?.list,t=[];for(let n=4;n<e.length;n+=8){const r=[];let a=e[n].weather[0].description,i=e[n].weather[0].icon;r.push(a),r.push(i),t.push([...r]),r.length=0}return t}(N),console.log(Y),F=Z(),console.log("Усредненные дневные температуры, 5ти днев. прогноз:",F),U=nn(),console.log("forecast elems:",U),M){M.innerHTML='\n      <h3 class="weather-forecast__title">Прогноз погоды на пять дней:</h3>\n      <ul class="weather-forecast__info forecast-info"></ul>\n    ';const n=M?.querySelector(".weather-forecast__info");T(n,U)}L&&(L.disabled=!1),B=null,E&&(E.value=""),console.log(N)}else alert("Пожалуйста укажите название города")};L?.addEventListener("click",(()=>{V(B)}));const X=n=>({cityName:n?.name,temprature:n?.main.temp,temp_feels_like:n?.main.feels_like,currentWeatherIconId:n?.weather[0].icon,weatherDescripText:n?.weather[0].description,wind_speed:n?.wind.speed,humidity:n?.main.humidity,visibility:n?.visibility}),Z=()=>{const n=[];return W&&W.forEach((e=>{let t=null;t=e.reduce(((n,e)=>n+e),0),n.push(Math.floor(t/8))})),n},nn=()=>{const n=[];if(null!==O&&null!==F&&null!==Y){for(let e=0;e<5;e++){const t=Y[e];t&&2===t.length?n?.push(j(O[e],F[e],Y[e])):console.log("Ошибка, недостаточно данных прогноза погоды для дня:"+e)}let e=0;n.forEach((n=>{n.dataset.counter=e.toString(),++e,n.addEventListener("click",(n=>{let e=n.currentTarget.dataset.counter;if(e){let n=parseInt(e);console.log(n),tn(M,G,n)}}))}))}return n},en=n=>{const e=[],t=n?.list;return n&&t.slice(0,5).forEach((n=>{const t=[],r=n.dt_txt.slice(-8,-3),a=Math.floor(n.main.temp).toString(),i=n.weather[0].icon;t.push(r,a,i),e.push([...t]),t.length=0})),e},tn=(n,e,t)=>{if(n&&e){const r=function(){const n=[],e=new Date;let t=e.getDay();const r=e.getMonth();let a=e.getDate();for(let e=0;e<b.length;e++)if(t<b.length-1){let e=`${b[t]}, ${a} ${x[r]}`;n.push(e),++t,++a}else{let e=`${b[t]}, ${a} ${x[r]}`;n.push(e),t=0,++a}return n.slice(0,5)}();n.innerHTML=`\n    <h3 class="weather-forecast__title">Прогноз погоды на пять дней:</h3>\n      <div class="weather-forecast__info-details-container forecast-info-details-container">\n        <ul class="forecast-info-details-container__info-details forecast-info-details">\n          <li class="forecast-info-details__elem" data-detailsElemCounter="0">${r[0]}</li>\n          <li class="forecast-info-details__elem" data-detailsElemCounter="1">${r[1]}</li>\n          <li class="forecast-info-details__elem" data-detailsElemCounter="2">${r[2]}</li>\n          <li class="forecast-info-details__elem" data-detailsElemCounter="3">${r[3]}</li>\n          <li class="forecast-info-details__elem" data-detailsElemCounter="4">${r[4]}</li>\n        </ul>\n\n        <span class="forecast-info-details-container__label"><i class="view-switcher fas fa-caret-up"></i></span>\n      </div>\n\n      <div class="weather-forecast__day-details forecast-day-details">\n        <div class="forecast-day-details__descrip">\n          <div class="forecast-day-details__descrip__icon">\n            <img src="http://openweathermap.org/img/wn/${e[t].iconId}.png" />\n          </div>\n          <h4 class="forecast-day-details__descrip__title">\n          ${e[t].descrip}\n          </h4>\n        </div>\n\n        <ul class="forecast-day-details__temp-info">\n          <li class="forecast-day-details__temp-info-max">\n            Максимальная темп: ${e[t].maxTemp}°C\n          </li>\n\n          <li class="forecast-day-details__temp-info-min">\n            Минимальная темп: ${e[t].minTemp}°C\n          </li>\n        </ul>\n\n        <ul class="forecast-day-details__params">\n          <li class="forecast-day-details__params__elem day-weather">\n            <div class="day-weather__label wind-label" title="Скорость ветра">\n              <i class="fa-solid fa-wind"></i>\n            </div>\n            <span class="day-weather__param-value wind-value">${e[t].wind_speed} м/с</span>\n          </li>\n\n          <li class="forecast-day-details__params__elem day-weather">\n            <div class="day-weather__label humidity-label" title="Влажность">\n              <i class="fa-solid fa-droplet"></i>\n            </div>\n            <span class="day-weather__param-value humidity-value">${e[t].humidity}%</span>\n          </li>\n\n          <li class="forecast-day-details__params__elem day-weather">\n            <div class="day-weather__label visibility-label" title="Видимость">\n              <i class="fa-solid fa-eye"></i>\n            </div>\n            <span class="day-weather__param-value visibility-value">${e[t].visibility}км</span>\n          </li>\n        </ul>\n      </div>\n    `;const a=n.querySelector(".view-switcher");a?.addEventListener("click",(()=>{i(M,U)}));const i=(n,e)=>{if(n&&e){n.innerHTML='\n        <h3 class="weather-forecast__title">Прогноз погоды на пять дней:</h3>\n        <ul class="weather-forecast__info forecast-info"></ul>\n      ';const t=n.querySelector(".weather-forecast__info");e.forEach((n=>{t?.append(n)}))}};n.querySelectorAll(".forecast-info-details__elem").forEach(((n,e)=>{n.classList.remove("selected-detailElem"),e===t&&n.classList.add("selected-detailElem"),n.addEventListener("click",(n=>{s(n)}))}));const s=n=>{const e=n.currentTarget;if(e){let n=e.dataset.detailselemcounter;if(n){let e=parseInt(n);e!==t?tn(M,G,e):i(M,U)}}console.log(e.dataset.detailselemcounter)}}}})();