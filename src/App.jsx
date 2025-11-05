import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import WeatherScreen from './components/WeatherScreen'
import SecondPage from './components/SecondPage/SecondPage'
import HomeScreen from "./components/HomeScreen"

const HomeScreenWithNav = () => {
  const navigate = useNavigate()
  
  const handleArrowClick = () => {
    navigate('/second-page')
  }
  
  return <HomeScreen onArrowClick={handleArrowClick} />
}

const SecondPageWithNav = () => {
  const navigate = useNavigate()
  
  const handleEnterClick = () => {
    navigate('/weather')
  }
  
  return <SecondPage onEnterClick={handleEnterClick} />
}

const WeatherScreenWithNav = () => {
  const navigate = useNavigate()
  
  const handleBackClick = () => {
    navigate('/second-page')
  }
  
  return <WeatherScreen onBackClick={handleBackClick} />
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreenWithNav />} />
        <Route path="/second-page" element={<SecondPageWithNav />} />
        <Route path="/weather" element={<WeatherScreenWithNav />} />
      </Routes>
    </Router>
  )
}

export default App