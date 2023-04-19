import { locType } from "components/Weather";
export async function weatherApi(location: locType) {
  const API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;
  console.log(location);
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=${API_KEY}&units=metric`
  );
  if (response.ok) {
    const json = await response.json();
    console.log(json);
    return { result: "success", response: json };
  }
  return { result: "fail", response: null };
}
