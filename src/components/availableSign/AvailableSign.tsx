import React, { useContext } from 'react'
import { AppContext } from '../../context';
import styles from './AvailableSign.module.scss'

const AvailableSign = () => {
  const { available } = useContext(AppContext)

  return (
    <>
      <div>Space Available</div>
      <div className={`${styles.avaiableSign} ${available === 0 ? styles.isZero : ''}`}>
        {available}
      </div>
    </>
  )
}

export default AvailableSign