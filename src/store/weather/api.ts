import axios from "axios";

const API_KEY = "4d549679691769c85c1c782f4f20ce07";
const API_URL = "https://api.openweathermap.org/data/2.5/forecast/daily";

async function fetchWeather(city: string, unit: string = "metric") {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: city,
        units: unit,
        appid: API_KEY,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export function fetchWeatherApi(city: string, unit: string) {
  return fetchWeather(city, unit)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}
