import React from 'react'
import SearchBar from './SearchBar'
import LocalWeatherInfo from './LocalWeatherInfo'
import BackToHome from '../BackToHome'


const SecondPage = ({ onEnterClick }) => {
  return (
    <div className='bg-black fill-black h-screen w-screen'>
        <div className="absolute top-4 right-4">
          <BackToHome />
        </div>
        <div className="flex flex-col items-center justify-center md:mt-[180px]">
          <SearchBar onEnterClick={onEnterClick} />
        </div>
        <div className="flex flex-col items-center gap-4 mt-8">
          <LocalWeatherInfo city = "Barcelona" degree = "29" value = "10.23"/>
          <LocalWeatherInfo city = "Bibao" degree = "27" value = "10.23"/>
          <LocalWeatherInfo city = "Madrid" degree = "31" value = "10.23"/>
          <LocalWeatherInfo city = "Malaga" degree = "33" value = "10.23"/>
        </div>
    </div>
  )
}

export default SecondPage