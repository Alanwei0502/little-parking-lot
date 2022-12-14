import React from 'react'
import streetLight from '../../assets/images/street-light.png'
import parkingSign from '../../assets/images/parking-sign.png'
import Car from '../car/Car'
import styles from './Background.module.scss'

const Background = () => {
  return (
    <div className={styles.background}>
      <div className={styles.road}>
        <img className={styles.streetLight} src={streetLight} alt='street-light' />
        <img className={styles.parkingSign} src={parkingSign} alt="parkingSign" />
        <Car />
      </div>
    </div>
  )
}

export default Background