import React from 'react'
import styles from './EmptySlot.module.scss'

interface Props {
  carSlotNumber: number
}

const EmptySlot = ({ carSlotNumber }: Props) => {
  return (
    <div className={styles.parkingNumber}>
      {carSlotNumber + 1}
    </div>
  )
}

export default EmptySlot