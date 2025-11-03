function changeLock(current: string, target: string): number {
  const currentNumbers = current.split('').map(num => Number(num))
  const targetNumbers = target.split('').map(num => Number(num))

  let counter = 0
  for (let i = 0; i < currentNumbers.length; i++) {

    const a = currentNumbers[i]
    const b = targetNumbers[i]

    const up = b >= a ? b - a : 10 - (a - b)
    const down = a >= b ? a - b : 10 - (b - a)

    if (up === 0 && down === 0) continue
    counter += (up < down) ? up : down

  }

  return counter
}
