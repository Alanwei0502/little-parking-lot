import React from 'react'
import { SlotType } from '../../lib/parkingLotClass'
import EmptySlot from '../emptySlot/EmptySlot'
import OccupiedSlot from '../occpiedSlot/OccupiedSlot'
import styles from './Slot.module.scss'

interface Props {
  carSlotNumber: number
  carInfo: SlotType | null
}

const Slot = ({ carInfo, carSlotNumber }: Props) => {
  return (
    <div className={styles.slot}>
      {carInfo
        ? <OccupiedSlot carInfo={carInfo} />
        : <EmptySlot carSlotNumber={carSlotNumber} />
      }
    </div>
  )
}

export default Slot