export type SlotType = {
  carId: string, carImage: string
};

class ParkingLot {
  // 顯示停車位是被佔用或是空的狀態
  slots: (SlotType | null)[] = [];

  // 每一次創建實例時，決定停車場大小，停車格以null為預設值
  constructor(parkingSize: number) {
    this.slots = new Array(parkingSize).fill(null);
  }

  // 車子進來停車
  park({ carId, carImage }: SlotType) {
    // 車位全滿，則回傳false
    const areSlotsFilled = this.slots.every(slot => slot !== null);
    if (areSlotsFilled) return false;

    // 車位未全滿，則依停車位順序停入，並回傳true
    for (let i = 0; i <= this.slots.length; i++) {
      const slot = this.slots[i];

      if (slot === null) {
        this.slots[i] = { carId, carImage };
        return true;
      }
    }
  }

  // 車子離開停車位
  remove(carId: string) {
    // 停車場沒有該車，則回傳false
    const isTheCarInParkingLot = this.slots.every(slot => slot && slot.carId !== carId);
    if (isTheCarInParkingLot) return false;

    // 停車場有該車，則移除車子，並回傳true
    for (let i = 0; i <= this.slots.length; i++) {
      const slot = this.slots[i];

      if (slot && slot.carId === carId) {
        this.slots[i] = null;
        return true;
      }
    }
  }

  // 拿取目前的停車位資訊
  getSlots() {
    return this.slots;
  }

  // 拿取該停車場大小
  getSize() {
    return this.slots.length;
  }

  // 拿取目前有多少空位
  getAvailable() {
    return this.slots.filter((s) => s === null).length;
  }

  // 確認停車場是否已滿
  isFull() {
    return this.getAvailable() === 0;
  }
}

export default ParkingLot;