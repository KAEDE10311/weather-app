import axios from 'axios';

// 天気データ取得APIキー
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
// API URL
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// 天気データの型
export type WeatherData = {
  city: string;
  temperature: number;
  description: string;
  icon: string;
};

// 天気データ取得
export const getWeather = async (city: string): Promise<WeatherData> => {
  const res = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
      lang: 'ja',
    },
  });

  return {
    city: res.data.name,
    temperature: Math.round(res.data.main.temp),
    description: res.data.weather[0].description,
    icon: res.data.weather[0].icon,
  };
};