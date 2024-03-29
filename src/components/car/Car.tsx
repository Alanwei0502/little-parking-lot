import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context'
import styles from './Car.module.scss'

const Car = () => {
  const { car } = useContext(AppContext);
  const { carImage, carId } = car;
  const [carInfo, setCarInfo] = useState(car)
  const [animate, setAnimate] = useState('')
  const carIn = animate === 'in'
  const carOut = animate === 'out'

  // Animation
  useEffect(() => {
    if (animate === '') {
      return setAnimate('in')
    }
    setAnimate('out')
    setTimeout(() => {
      setCarInfo({ carImage, carId })
      setAnimate('in')
    }, 500)
  }, [carImage, carId])

  // Car
  // useEffect(() => {
  //   if (animate === '') {
  //     return setAnimate('in')
  //   }
  //   setTimeout(() => {
  //     setCarInfo({ carImage, carId })
  //     setAnimate('in')
  //   }, 500)
  // }, [carImage, carId])



  return (
    <div className={`${styles.carContainer} ${carIn ? styles.carIn : ''} ${carOut ? styles.carOut : ''}`}>
      <img
        className={styles.carImage}
        src={carInfo.carImage}
        alt="car image"
      />
    </div>
  )
}

export default Car