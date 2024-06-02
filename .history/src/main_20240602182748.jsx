import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './routers/index'
import 'normalize.css'
import LoginPage from './pages/LoginPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
)
