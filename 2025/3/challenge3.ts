function myersCalendar(year: number): string[] {
  if (typeof year !== 'number' || year <= 0 || Number.isNaN(year)) {
    return []
  }

  const myersDays: string[] = []
  const day = 13
  const date = new Date(year, 0, day)

  for (let i = 0; i < 12; i++) {

    date.setMonth(i)
    const month = date.getMonth() + 1

    if (date.getDay() === 5) {
      const newDate = `${year}-${month.toString().padStart(2, '0')}-${day}`
      myersDays.push(newDate)
    }

    if (month === 10) {
      const october31 = `${year}-${month}-${31}`
      myersDays.push(october31)
    }
  }

  return myersDays
}