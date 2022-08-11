import React, { useContext } from 'react'
import Button from '../../components/button/Button'
import Welcome from '../../components/welcome/Welcome';
import Logo from '../../components/logo/Logo';
import ParkingSizeInput from '../../components/parkingSizeInput/ParkingSizeInput';
import { AppContext } from '../../context'
import ParkingLotClass from '../../lib/parkingLotClass'
import styles from './CreateParkingLot.module.scss'

const CreateParkingLot = () => {
  const { setPage, parkingSize, setParkingLotInstance } = useContext(AppContext)
  const isParkingSizeOverRange = parkingSize <= 0 || parkingSize > 20
  const sizeWarning = isParkingSizeOverRange ? 'Parking slots should be between 1 and 20.' : null

  const onCreate = () => {
    if (isParkingSizeOverRange) return

    setPage('parkinglot')
    setParkingLotInstance(new ParkingLotClass(parkingSize))
  }

  return (
    <div className={styles.container}>
      <Logo />
      <Welcome />
      <p className={styles.question}>How many parking slots you need?</p>
      <ParkingSizeInput />
      <p className={styles.slotsNumberWarning}>{sizeWarning}</p>
      <Button onClick={onCreate}>
        Create your Parking Lot!
      </Button>
    </div>
  )
}

export default CreateParkingLot