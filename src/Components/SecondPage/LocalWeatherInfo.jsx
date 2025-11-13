import React from 'react'
import { Circle } from 'lucide-react'
import { CloudRain } from 'lucide-react'; 

const LocalWeatherInfo = ({city, value, degree}) => {

  return (
    <div className='border border-transparent w-full max-w-sm h-24 rounded-xl bg-cyan-900/80 flex items-center justify-between px-4 backdrop-blur-sm shadow-lg'>
        <div className='flex items-center gap-2'>
            <Circle className='text-blue-200 w-5 h-5' />
            <div>
                <h2 className='text-lg font-bold'>{city}</h2>
                <p className='text-sm text-blue-100'>{value}</p>
            </div>
        </div>
        <div>
            <h2 className='text-4xl font-bold'>{degree}<sup>°</sup></h2>
        </div>
    </div>
  );
}

export default LocalWeatherInfo