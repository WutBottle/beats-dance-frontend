import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import OrganizationPage from '../pages/OrganizationPage'
import UserPage from '../pages/UserPage'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />}>
          <Route path="organization" element={<OrganizationPage />} />
          <Route path="user" element={<UserPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
