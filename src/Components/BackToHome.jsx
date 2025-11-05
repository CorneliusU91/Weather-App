import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Home } from 'lucide-react'

const BackToHome = ({ className = "" }) => {
  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate('/')
  }
  
  return (
    <div onClick={handleClick} className={`cursor-pointer ${className}`}>
      <Home className="w-6 h-6 text-white" />
    </div>
  )
}

export default BackToHome

