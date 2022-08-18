import React, { useContext } from 'react'
import { AppContext } from '../../context';
import { SlotType } from '../../lib/parkingLotClass';
import Slot from '../slot/Slot';
import styles from './Slots.module.scss'

const Slots = () => {
  const { slots } = useContext(AppContext)

  return (
    <div className={styles.slots}>
      {slots.map((item: SlotType | null, index: number) => (
        <Slot
          key={index}
          carInfo={item}
          carSlotNumber={index}
        />
      ))}
    </div>
  )
}

export default Slots