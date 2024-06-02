import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppRouter from './routers/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)
