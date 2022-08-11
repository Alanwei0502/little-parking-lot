import React from 'react'
import styles from './OccupiedSlot.module.scss'

interface Props {
  car: {
    carId?: string | undefined
    carImage?: string | undefined
  }
}

const OccupiedSlot = ({ car }: Props) => {
  const { carId, carImage } = car

  return (
    <div className={styles.occupiedSlot}>
      <img src={carImage} alt="carImage" />
      <div className={styles.carId}>{carId}</div>
    </div>
  )
}

export default OccupiedSlot