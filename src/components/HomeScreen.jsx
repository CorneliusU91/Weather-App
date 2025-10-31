import React from "react";
import { ArrowRight, Umbrella } from "lucide-react";

const HomeScreen = () => {
  return (
    <div className="items-center justify-center flex flex-col text-center">
      <div className="mt[40px]">
        <Umbrella className="text-blue-400 w-[136px] h-[136px] mt-[150px]" />
      </div>

      <div>
        <h2 className="text-white mt-[100px] font-bold text-center text-6xl">Breeze</h2>
        <p className="text-white text-2xl">Weather App</p>
      </div>

      <div>
        <ArrowRight className="bg-blue-500 text-amber-50 w-[25px] h-[25px] mt-[85px] rounded-3xl" />
      </div>
    </div>
  );
};

export default HomeScreen;
