import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UseState from './Usecontantet/UseState.jsx'

createRoot(document.getElementById('root')).render(
  <UseState>
    <App />
  </UseState>,
)
