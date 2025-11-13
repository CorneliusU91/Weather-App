import React from "react";
import { ChevronLeft, Circle } from "lucide-react";
import WeatherInfo from "./WeatherInfo";
import BackToHome from "./BackToHome";
import { useLocation, useNavigate } from "react-router-dom";

const weatherScreen = ({ onBackClick , name }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
      return;
    }
    navigate("/second-page");
  };
  const { weatherData } = location.state || {};
  const { current } = weatherData || {};
  const { forecast } = weatherData || {};
  const cityDisplay = weatherData?.location
    ? `${weatherData.location.name}, ${weatherData.location.country}`
    : name || "Unknown location";
  const chanceOfRain = forecast?.forecastday?.[0]?.day?.daily_chance_of_rain ?? "N/A";
  // console.log(weatherData);
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="relative flex items-center h-16 w-full">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer" onClick={handleBackClick}>
            <ChevronLeft size={28} />
          </div>
          <p className="w-full text-center text-2xl font-semibold tracking-wide">
            Air Conditions
          </p>
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <BackToHome />
          </div>
        </div>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_1fr] items-start">
          <div className="flex flex-col items-center text-center gap-6">
            <h1 className="text-4xl md:text-5xl font-bold">{cityDisplay}</h1>
            <p className="text-lg text-blue-100">Chance of rain: {chanceOfRain}</p>
            <div className="mt-4">
              {current?.condition?.icon && (
                <img src={current.condition.icon} alt={current.condition.text || "Weather icon"} className="w-28 h-28 md:w-36 md:h-36" />
              )}
            </div>
            <div className="text-5xl font-bold">
              <p>{current?.temp_c ?? "--"}<sup>°C</sup></p>
            </div>
            {current?.condition?.text && (
              <p className="text-lg text-blue-100">{current.condition.text}</p>
            )}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <WeatherInfo title="UV Index" value={current?.uv ?? "--"} />
            <WeatherInfo title="Wind" value={`${current?.wind_mph ?? "--"} mph`} />
            <WeatherInfo title="Humidity" value={`${current?.humidity ?? "--"}%`} />
            <WeatherInfo title="Visibility" value={`${current?.vis_km ?? "--"} km`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default weatherScreen;
