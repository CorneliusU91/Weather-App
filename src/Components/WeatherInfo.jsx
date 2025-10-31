import React from 'react'

const WeatherInfo = ({ title, value }) => {
  return (
    <div className='border w-45 h-20 rounded-xl bg-cyan-900'>
        <div>
            <h2 className='text-lgfont-bold mx-3'>{title}</h2>
            <p className='text-4xl font-bold mx-3 mt-2'>{value}</p>
        </div>
    </div>
  )
}

export default WeatherInfo