import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<AboutPage />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
