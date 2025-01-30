interface extracted_CurrentWeatherData {
  cityName: string | undefined;
  temprature: number | undefined;
  temp_feels_like: number | undefined;

  currentWeatherIconId: string | undefined;
  weatherDescripText: string | undefined;

  wind_speed: string | undefined;
  humidity: number | undefined;
  visibility: number | undefined;
}

export default extracted_CurrentWeatherData;
