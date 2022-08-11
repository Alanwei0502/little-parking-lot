import React, { useState } from 'react'
import ParkingLotClass from '../lib/parkingLotClass'

interface AppContextType {
  page: Page
  setPage: React.Dispatch<React.SetStateAction<Page>>
  parkingSize: number
  setParkingSize: React.Dispatch<React.SetStateAction<number>>
  parkingLotInstance: ParkingLotClass
  setParkingLotInstance: React.Dispatch<React.SetStateAction<ParkingLotClass>>
}

const AppContext = React.createContext<AppContextType>({
  page: 'create',
  setPage: () => { },
  parkingSize: 1,
  setParkingLotInstance: () => { },
  parkingLotInstance: new ParkingLotClass(1),
  setParkingSize: () => { },
})

export type Page = 'create' | 'parkinglot';

interface Props {
  children: JSX.Element;
}


const ParkingLotInstanceProvider = ({ children }: Props) => {
  const [page, setPage] = useState<Page>('create')
  const [parkingSize, setParkingSize] = useState<number>(1)
  const [parkingLotInstance, setParkingLotInstance] = useState<ParkingLotClass>(new ParkingLotClass(parkingSize))

  const value = {
    page,
    setPage,
    parkingSize,
    setParkingSize,
    parkingLotInstance,
    setParkingLotInstance,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, ParkingLotInstanceProvider }