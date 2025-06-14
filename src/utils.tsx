export function countDecimalPlaces(number: number): number {
  const decimalIndex = number.toString().indexOf(".");
  return decimalIndex >= 0 ? number.toString().length - decimalIndex - 1 : 0;
}
