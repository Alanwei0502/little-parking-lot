import React from 'react'
import parkingLogo from '../../assets/images/parking-logo.png'
import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <img className={styles.logo} src={parkingLogo} alt="parkingLogo" />
  )
}

export default Logo