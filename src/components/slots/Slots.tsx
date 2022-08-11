import React, { useContext } from 'react'
import { AppContext } from '../../context';
import ParkingLotClass, { SlotType } from '../../lib/parkingLotClass';
import Slot from '../slot/Slot';
import styles from './Slots.module.scss'

interface Props {
  setBtnDisabled: React.Dispatch<React.SetStateAction<boolean>>
}

const Slots = ({ setBtnDisabled }: Props) => {
  const { parkingLotInstance } = useContext(AppContext)

  return (
    <div className={styles.slots}>
      {parkingLotInstance.getSlots().map((item: SlotType | null, index: number) => (
        <Slot
          key={index}
          carInfo={item}
          carSlotNumber={index}
          parkingLotInstance={parkingLotInstance}
          setBtnDisabled={setBtnDisabled}
        />
      ))}
    </div>
  )
}

export default Slots