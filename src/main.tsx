import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ParkingLotInstanceProvider } from './context'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ParkingLotInstanceProvider>
      <App />
    </ParkingLotInstanceProvider>
  </React.StrictMode>
)
