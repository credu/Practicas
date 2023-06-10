import { createRoot } from 'react-dom/client'
import { CounterApp } from './src/CounterApp'

createRoot( document.getElementById("app") ).render(
  <CounterApp />
)