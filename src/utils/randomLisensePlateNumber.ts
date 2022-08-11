export const generateLisensePlateNumber = () => {
  const r = (x: number = 10) => ~~(Math.random() * x);
  const l = () => [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"][r(26)];

  return `${r()}${r()}${r()}-${l()}${l()}${l()}`;
};