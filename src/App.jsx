import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import HomeScreen from './Components/HomeScreen'
import SecondPage from './Components/SecondPage/SecondPage'
import WeatherScreen from './Components/WeatherScreen'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/weather" element={<WeatherScreen />} />
      </Routes>
    </Router>
  )
}

export default App