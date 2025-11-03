function searchPhone(phones: number[], target: number): number {

  let left = 0
  let right = phones.length - 1

  while (left <= right) {
    let middlePoint = Math.floor((left + right) / 2)
    let value = phones[middlePoint]

    if (value === target) {
      return middlePoint
    } else if (value > target) {
      right = middlePoint - 1
    } else {
      left = middlePoint + 1
    }

  }
  return -1
}