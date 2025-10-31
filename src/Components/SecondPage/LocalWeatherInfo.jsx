import React from 'react'
import { Circle } from 'lucide-react'
import { CloudRain } from 'lucide-react'; 

const LocalWeatherInfo = ({city, value, degree}) => {

  return (
    <div className='border w-80 h-20 rounded-xl bg-cyan-900 flex justify-between'>
        <div>
            <Circle/>
        </div>
        <div>
            <h2 className='text-lgfont-bold mx-3'>{city}</h2>
            <p>{value}</p>
        </div>
        <div>
            <h2 className='text-4xl font-bold mx-3 mt-2'>{degree}<sup>o</sup></h2>
        </div>
    </div>
  );
}

export default LocalWeatherInfo