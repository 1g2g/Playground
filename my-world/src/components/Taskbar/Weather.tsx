import { useState, useEffect } from "react";
import { weatherApi } from "api/weatherApi";
export type locType = {
  lat: number;
  lng: number;
};
type weatherType = {
  usable: boolean;
  temp?: number;
  state: string;
};
export const Weather = () => {
  const [weatherNow, setWeatherNow] = useState<weatherType>();
  const onSuccess = async (position: any) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const response = await weatherApi({ lat: lat, lng: lng });
    if (response.result === "success") {
      setWeatherNow({
        usable: true,
        state: response.response.weather[0].main,
        temp: response.response.main.temp,
      });
    } else {
      setWeatherNow({
        usable: false,
        state: "조회불가",
      });
    }
  };

  const onError = () => {
    console.log("error");
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);
  return (
    <>
      <div>{weatherNow?.usable ? `${weatherNow?.temp}°C` : ""}</div>
      <div>{weatherNow?.state}</div>
    </>
  );
};
