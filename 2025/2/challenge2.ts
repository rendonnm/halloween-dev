type Letters = 's' | 'h' | 'e' | 'p'

function countSheep(letters: string): number {
  const sheepLetterCounter = {
    s: 0,
    h: 0,
    e: 0,
    p: 0,
  }

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i]
    if (letter in sheepLetterCounter) {
      sheepLetterCounter[letter as Letters]++
    }
  }

  let sheepCounter = 0

  while (
    sheepLetterCounter.s >= 1 &&
    sheepLetterCounter.h >= 1 &&
    sheepLetterCounter.e >= 2 &&
    sheepLetterCounter.p >= 1
  ) {
    sheepCounter++

    sheepLetterCounter.s--
    sheepLetterCounter.h--
    sheepLetterCounter.e = sheepLetterCounter.e - 2
    sheepLetterCounter.p--
  }

  return sheepCounter
}