import React from 'react'
import styles from './Button.module.scss'

interface Props {
  children: string
  onClick: () => void
  [key: string]: any
}

const Button = ({ children, onClick, ...props }: Props) => {

  const onClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onClick()
  }

  return (
    <button
      className={`${styles.button} ${props.disabled ? styles.disabled : styles.active}`}
      onClick={onClickButton}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button