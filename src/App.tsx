import React, { useContext } from 'react'
import CreateParkingLot from './pages/createParkingLot/CreateParkingLot'
import ParkingLot from './pages/parkingLot/ParkingLot'
import { AppContext } from './context'
import styles from "./App.module.scss"

const App = () => {
  const { page } = useContext(AppContext)

  return (
    <div className={styles.app}>
      {page === 'create' ? <CreateParkingLot /> : <ParkingLot />}
    </div>
  )
}

export default App;
