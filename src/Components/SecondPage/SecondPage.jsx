import React from 'react'
import SearchBar from './SearchBar'
import LocalWeatherInfo from './LocalWeatherInfo'


const SecondPage = () => {
  return (
    <div className='bg-black fill-black h-screen w-screen'>
        <SearchBar className='mt-[180px]' />
        <LocalWeatherInfo city = "Barcelona" degree = "29" value = "10.23"/>
        <LocalWeatherInfo city = "Bibao" degree = "27" value = "10.23"/>
        <LocalWeatherInfo city = "Madrid" degree = "31" value = "10.23"/>
        <LocalWeatherInfo city = "Malaga" degree = "33" value = "10.23"/>
    </div>
  )
}

export default SecondPage