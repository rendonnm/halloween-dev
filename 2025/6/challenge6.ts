function surviveRoulette(n: number, k: number): number {
  let array = []
  for (let i = 0; i < n; i++) {
    array.push(i)
  }

  let removalIndex = 0

  while (array.length > 1) {
    removalIndex = (removalIndex + k - 1) % array.length

    array.splice(removalIndex, 1)
  }
  return array[0]
}