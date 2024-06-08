import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import OrganizationPage from '../pages/OrganizationPage'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
