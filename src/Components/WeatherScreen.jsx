import React from "react";
import { ChevronLeft, Circle } from "lucide-react";
import WeatherInfo from "./WeatherInfo";

const weatherScreen = () => {
  return (
    <div className="w-screen h-screen bg-black text-white">
      <div className="relative flex items-start h-16 w-full">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 mt-2">
          <ChevronLeft size={28} />
        </div>
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xxl w-max text-white">
          Air Conditions
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold mb-2">Madrid</h1>
        </div>
        <div>
          <p>Chance of rain: 0%</p>
        </div>
        <div className="mt-10">
          <Circle size={100} className="text-yellow-400 fill-yellow-400" />
        </div>
        <div className="mt-6 text-4xl font-bold mb-20">
          <p>33°C</p>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap">
        <WeatherInfo title="UV Index" value="3" />
        <WeatherInfo title="Wind" value="0.2km/h" />
        <WeatherInfo title="Humidity" value="56%" />
        <WeatherInfo title="Visibility" value="12km" />
      </div>
      
    </div>
  );
};

export default weatherScreen;
