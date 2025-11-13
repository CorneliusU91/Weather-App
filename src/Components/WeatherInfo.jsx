import React from 'react'

const WeatherInfo = ({ title, value }) => {
  return (
    <div className='border border-transparent w-full h-28 rounded-xl bg-cyan-900/80 p-4 flex flex-col justify-between shadow-lg backdrop-blur-sm'>
        <div className='text-sm uppercase tracking-wide text-blue-100'>{title}</div>
        <p className='text-3xl md:text-4xl font-bold text-white'>{value}</p>
    </div>
  )
}

export default WeatherInfo