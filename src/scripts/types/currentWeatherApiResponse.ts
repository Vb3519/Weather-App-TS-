interface currentWeatherApiResponse {
  base: string;
  clouds: any;
  cod: number;
  coord: any;
  dt: number;
  id: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    grnd_level: number;
    humidity: number;
    sea_level: number;
  };
  name: string;
  sys: any;
  timezone: number;
  visibility: number;
  weather: any;
  wind: any;
}

export default currentWeatherApiResponse;
