import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { MainApp } from './09-useContext/MainApp'
import { CounterApp } from './01-useState/CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
)
