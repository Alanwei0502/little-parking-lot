import { allCars } from '../../utils/allCars'
import styles from './carCarousel.module.scss'

const CarCarousel = () => {

  return (
    <div className={styles.slider}>
      <div className={styles.sliderTrack}>
        {
          allCars.concat(allCars).map(([key, img], index) => (
            <img
              key={`${key}-${index}`}
              className={styles.carImage}
              src={img}
              alt="car image"
            />
          ))
        }
      </div>
    </div >
  )
}

export default CarCarousel