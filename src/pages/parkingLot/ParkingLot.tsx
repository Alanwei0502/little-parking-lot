import React, { useContext } from 'react'
import AvailableSign from '../../components/availableSign/AvailableSign'
import Background from '../../components/background/Background'
import Button from '../../components/button/Button'
import Slots from '../../components/slots/Slots'
import { AppContext } from '../../context'
import styles from './ParkingLot.module.scss'

const buttonStyle: React.CSSProperties = {
  padding: '1rem',
  fontSize: '1.2rem'
}

const ParkingLot = () => {
  const {
    btnDisabled,
    onPark,
    onReCreateParkingLot
  } = useContext(AppContext)


  return (
    <div className={styles.parkinglot}>
      <AvailableSign />
      <Background />
      <Slots />
      <div className={styles.buttonArea}>
        <Button
          onClick={onReCreateParkingLot}
          style={buttonStyle}
        >
          New Parking Lot
        </Button>
        <Button
          onClick={onPark}
          style={buttonStyle}
          disabled={btnDisabled}
        >
          Park!
        </Button>
      </div>
    </div>
  )
}

export default ParkingLot