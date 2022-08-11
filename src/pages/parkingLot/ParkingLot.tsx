import React, { useContext, useState } from 'react'
import AvailableSign from '../../components/availableSign/AvailableSign'
import Background from '../../components/background/Background'
import Button from '../../components/button/Button'
import Slots from '../../components/slots/Slots'
import { AppContext } from '../../context'
import randomCarImg from '../../utils/allCars'
import { generateLisensePlateNumber } from '../../utils/randomLisensePlateNumber'
import styles from './ParkingLot.module.scss'

const buttonStyle: React.CSSProperties = {
  padding: '1rem',
  fontSize: '1.2rem'
}

const ParkingLot = () => {
  const { setPage, setParkingSize, parkingLotInstance } = useContext(AppContext)

  const [car, setCar] = useState({
    carId: generateLisensePlateNumber(),
    carImage: randomCarImg()
  })
  const [btnDisabled, setBtnDisabled] = useState(parkingLotInstance.isFull())

  const onPark = () => {
    if (parkingLotInstance.isFull()) return

    parkingLotInstance.park(car)
    setBtnDisabled(true)
    setCar({ carId: generateLisensePlateNumber(), carImage: randomCarImg() })
    setTimeout(() => {
      setBtnDisabled(parkingLotInstance.isFull())
    }, 800)
  }

  const onCreateNew = () => {
    setPage('create')
    setParkingSize(1)
  }

  return (
    <div className={styles.parkinglot}>
      <AvailableSign availableSlots={parkingLotInstance.getAvailable()} />
      <Background car={car} />
      <Slots setBtnDisabled={setBtnDisabled} />
      <div className={styles.buttonArea}>
        <Button
          onClick={onCreateNew}
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