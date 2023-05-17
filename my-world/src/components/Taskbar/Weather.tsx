import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { weatherApi } from "api/weatherApi";
import "components/Taskbar/taskbar.scss";
import { LINK_TO_OPEN_WEATHER, callWeatherIcon } from "assets/UrlStorage";
export type locType = {
  lat: number;
  lng: number;
};
type weatherType = {
  usable: boolean;
  temp?: number;
  icon?: string;
  state: string;
};
type positionType = {
  coords: {
    latitude: number;
    longitude: number;
  };
};
export const Weather = () => {
  const [weatherNow, setWeatherNow] = useState<weatherType>();
  const onSuccess = async (position: positionType) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const response = await weatherApi({ lat: lat, lng: lng });
    if (response.result === "success") {
      setWeatherNow({
        usable: true,
        state: response.response.weather[0].main,
        temp: response.response.main.temp,
        icon: response.response.weather[0].icon,
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
    <Link
      to={LINK_TO_OPEN_WEATHER}
      target="_blank"
      className="weather hoverElem"
    >
      {weatherNow?.icon ? (
        <img
          src={callWeatherIcon(weatherNow.icon)}
          alt={weatherNow?.state + "icon"}
        />
      ) : (
        ""
      )}
      <div>
        {weatherNow?.usable ? <div> {weatherNow?.temp}°C </div> : ""}

        <div>{weatherNow?.state}</div>
      </div>
    </Link>
  );
};
