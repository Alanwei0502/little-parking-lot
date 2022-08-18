import React, { useContext } from 'react'
import Button from '../../components/button/Button'
import Welcome from '../../components/welcome/Welcome';
import Logo from '../../components/logo/Logo';
import ParkingSizeInput from '../../components/parkingSizeInput/ParkingSizeInput';
import { AppContext } from '../../context'
import styles from './CreateParkingLot.module.scss'

const CreateParkingLot = () => {
  const {
    isParkingSizeOverRange,
    onCreateParkingLot
  } = useContext(AppContext)

  return (
    <div className={styles.container}>
      <Logo />
      <Welcome />
      <p className={styles.question}>How many parking slots you need?</p>
      <ParkingSizeInput />
      <p className={styles.slotsNumberWarning}>
        {isParkingSizeOverRange ? 'Parking slots should be between 1 and 20.' : null}
      </p>
      <Button onClick={onCreateParkingLot}>
        Create your Parking Lot!
      </Button>
    </div>
  )
}

export default CreateParkingLot