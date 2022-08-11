import React, { useContext } from 'react'
import { AppContext } from '../../context'
import styles from './ParkingSizeInput.module.scss'

const ParkingSizeInput = () => {
  const { setParkingSize } = useContext(AppContext)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParkingSize(Number(e.target.value))
  }

  return (
    <input
      type="number"
      onChange={onChange}
      className={styles.parkingSizeInput}
      placeholder='Enter your desired size here (1-20)'
    />
  )
}

export default ParkingSizeInput