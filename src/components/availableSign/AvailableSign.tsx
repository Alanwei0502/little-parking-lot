import React from 'react'
import styles from './AvailableSign.module.scss'

interface Props {
  availableSlots: number;
}

const AvailableSign = ({ availableSlots }: Props) => {
  return (
    <>
      <div>Space Available</div>
      <div className={`${styles.avaiableSign} ${availableSlots === 0 ? styles.isZero : ''}`}>
        {availableSlots}
      </div>
    </>
  )
}

export default AvailableSign