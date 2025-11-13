import React from 'react'
import SearchBar from './SearchBar'
import LocalWeatherInfo from './LocalWeatherInfo'
import BackToHome from '../BackToHome'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'


const SecondPage = () => {
  const [weatherData, setWeatherData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const getCity = (e) => {
    setCity(e.target.value);
    // console.log(city);
  }

  const searchCityWeather = async () => {
    // console.log("Searching weather for:", city);
    const url = `https://api.weatherapi.com/v1/forecast.json?q=${city}&days=8&aqi=yes&tp=60&key=375d4e0ab40d475f93d91232251311`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      navigate('/weather', { state: { weatherData: data } });
    } catch (error) {}
    // const handleSearch = async () => {
    //   setLoading(true);
    //   setError(null);
    //   try {
    //     const response = await axios.get(url);
    //     setWeatherData(response.data);
    //     console.log(response.data);
    //   } catch (err) {
    //     setError('Error fetching weather data');
    //   } finally {
    //     setLoading(false);
    //   }
    }
  return (
    <div className='bg-black min-h-screen w-full text-white'>
        <div className="max-w-5xl mx-auto px-6 pt-6 pb-16">
          <div className="flex justify-end">
            <BackToHome />
          </div>
          <div className="flex flex-col items-center justify-center mt-16 md:mt-24">
            <SearchBar getCity={getCity}  city={city} searchCityWeather={searchCityWeather}/>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <LocalWeatherInfo city="Barcelona" degree="29" value="10.23"/>
            <LocalWeatherInfo city="Bilbao" degree="27" value="10.23"/>
            <LocalWeatherInfo city="Madrid" degree="31" value="10.23"/>
            <LocalWeatherInfo city="Malaga" degree="33" value="10.23"/>
          </div>
        </div>
    </div>
  )
}

export default SecondPage