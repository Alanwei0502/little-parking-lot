import React, { useState } from 'react'
import ParkingLotClass, { SlotType } from '../lib/parkingLotClass'
import randomCarImg from '../utils/allCars'
import { generateLisensePlateNumber } from '../utils/randomLisensePlateNumber'

type AppContextType = {
  page: Page
  setPage: React.Dispatch<React.SetStateAction<Page>>
  parkingSize: number
  setParkingSize: React.Dispatch<React.SetStateAction<number>>
  parkingLotInstance: ParkingLotClass
  setParkingLotInstance: React.Dispatch<React.SetStateAction<ParkingLotClass>>
  car: { carId: string, carImage: string }
  setCar: React.Dispatch<React.SetStateAction<{ carId: string, carImage: string }>>
  btnDisabled: boolean
  setBtnDisabled: React.Dispatch<React.SetStateAction<boolean>>
  onPark: () => void
  onCreateParkingLot: () => void
  isParkingSizeOverRange: boolean
  onReCreateParkingLot: () => void
  onRemoveCar: (carId: string) => void
  slots: (SlotType | null)[]
  available: number
};

const AppContext = React.createContext<AppContextType>({
  page: 'create',
  setPage: () => { },
  parkingSize: 1,
  setParkingLotInstance: () => { },
  parkingLotInstance: new ParkingLotClass(1),
  setParkingSize: () => { },
  car: { carId: '', carImage: '' },
  setCar: () => { },
  btnDisabled: false,
  setBtnDisabled: () => { },
  onPark: () => { },
  onCreateParkingLot: () => { },
  isParkingSizeOverRange: false,
  onReCreateParkingLot: () => { },
  onRemoveCar: (carId: string) => { },
  slots: [],
  available: 0
})

export type Page = 'create' | 'parkinglot';

interface Props {
  children: JSX.Element;
}

const ParkingLotInstanceProvider = ({ children }: Props) => {
  // [STATES]
  const [page, setPage] = useState<Page>('create')

  const [parkingSize, setParkingSize] = useState<number>(1)
  const isParkingSizeOverRange = parkingSize <= 0 || parkingSize > 20

  const [parkingLotInstance, setParkingLotInstance] = useState<ParkingLotClass>(() => new ParkingLotClass(parkingSize))

  const [slots, setSlots] = useState(() => parkingLotInstance.getSlots());

  const [available, setAvailable] = useState(() => parkingLotInstance.getAvailable());

  const [car, setCar] = useState({
    carId: generateLisensePlateNumber(),
    carImage: randomCarImg()
  })

  const [btnDisabled, setBtnDisabled] = useState(parkingLotInstance.isFull())

  // [METHODS]
  const onCreateParkingLot = () => {
    if (isParkingSizeOverRange) return
    const newParkingLot = new ParkingLotClass(parkingSize)
    setPage('parkinglot')
    setBtnDisabled(false)
    setParkingLotInstance(newParkingLot)
    setSlots(newParkingLot.getSlots())
    setAvailable(newParkingLot.getAvailable())
  }

  const onReCreateParkingLot = () => {
    setPage('create')
    setParkingSize(1)
  }

  const onPark = () => {
    setBtnDisabled(true)
    parkingLotInstance.park(car)
    setParkingLotInstance(parkingLotInstance)
    setSlots(parkingLotInstance.getSlots())
    setAvailable(parkingLotInstance.getAvailable())
    setCar({ carId: generateLisensePlateNumber(), carImage: randomCarImg() })
    setTimeout(() => {
      setBtnDisabled(parkingLotInstance.isFull())
    }, 800)
  }

  const onRemoveCar = (carId: string) => {
    parkingLotInstance.remove(carId)
    setParkingLotInstance(parkingLotInstance)
    setSlots(parkingLotInstance.getSlots())
    setAvailable(parkingLotInstance.getAvailable())
    setBtnDisabled(parkingLotInstance.isFull())
  }

  const value = {
    page,
    setPage,
    parkingSize,
    setParkingSize,
    parkingLotInstance,
    setParkingLotInstance,
    car,
    setCar,
    btnDisabled,
    setBtnDisabled,
    onPark,
    onCreateParkingLot,
    isParkingSizeOverRange,
    onReCreateParkingLot,
    onRemoveCar,
    slots,
    available
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, ParkingLotInstanceProvider }