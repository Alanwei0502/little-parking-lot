import React, { useContext } from 'react'
import { AppContext } from '../../context'
import { SlotType } from '../../lib/parkingLotClass'
import styles from './OccupiedSlot.module.scss'

interface Props {
  carInfo: SlotType
}

const OccupiedSlot = ({ carInfo }: Props) => {
  const { onRemoveCar } = useContext(AppContext)
  const { carId, carImage } = carInfo

  const onClearSlot = () => {
    onRemoveCar(carId)
  }

  return (
    <div className={styles.occupiedSlot} onClick={onClearSlot}>
      <img src={carImage} alt="carImage" />
      <div className={styles.carId}>{carId}</div>
    </div>
  )
}

export default OccupiedSlot