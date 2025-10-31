import React from 'react'
import WeatherScreen from './Components/WeatherScreen'
import SecondPage from './Components/SecondPage/SecondPage'
import HomeScreen from "./components/HomeScreen"

const App = () => {
  return (
    <div>
      <div className="bg-black w-screen h-screen">
        <HomeScreen />
      </div>
      {/* <WeatherScreen /> */}
      <SecondPage/>
    </div>
  )
}

export default App