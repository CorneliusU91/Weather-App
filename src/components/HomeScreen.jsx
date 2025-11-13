import React from "react";
import { ArrowRight, Umbrella } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();
  
  const onArrowClick = () => {
    navigate("/second-page");
  };
  return (
    <div className="bg-black min-h-screen w-full flex items-center justify-center text-center">
      <div className="flex flex-col items-center gap-16 px-6 py-12 md:py-20 max-w-2xl">
        <Umbrella className="text-blue-400 w-24 h-24 md:w-36 md:h-36" />
        <div>
          <h2 className="text-white font-bold text-center text-5xl md:text-7xl tracking-tight">Breeze</h2>
          <p className="text-white text-xl md:text-2xl mt-2">Weather App</p>
        </div>
        <div onClick={onArrowClick} className="cursor-pointer">
          <ArrowRight className="bg-blue-500 text-amber-50 w-12 h-12 md:w-14 md:h-14 rounded-full p-3" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
