import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import {CardContextProvider} from "./components/contexts/CardContext"

import {CardContextProvider} from "./contexts/CardContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<CardContextProvider>    <App /> </CardContextProvider>
  
  </React.StrictMode>
)
