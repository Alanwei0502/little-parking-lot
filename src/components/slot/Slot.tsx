import React, { useState, useLayoutEffect } from 'react'
import ParkingLotClass, { SlotType } from '../../lib/parkingLotClass'
import EmptySlot from '../emptySlot/EmptySlot'
import OccupiedSlot from '../occpiedSlot/OccupiedSlot'
import styles from './Slot.module.scss'

interface Props {
  carSlotNumber: number
  carInfo: SlotType | null
  parkingLotInstance: ParkingLotClass
  setBtnDisabled: React.Dispatch<React.SetStateAction<boolean>>
}

const Slot = ({ carInfo, carSlotNumber, parkingLotInstance, setBtnDisabled }: Props) => {
  const [car, setCar] = useState({ ...carInfo })
  const { carId } = car

  const onRemove = () => {
    if (!carId) return
    parkingLotInstance.remove(carId)
    setCar({})
    setBtnDisabled(parkingLotInstance.isFull())
  }

  useLayoutEffect(() => {
    setCar({ ...carInfo })
  }, [carInfo])


  return (
    <div className={styles.slot} onClick={onRemove}>
      {carId ? <OccupiedSlot car={car} /> : <EmptySlot carSlotNumber={carSlotNumber} />}
    </div>
  )
}

export default Slot