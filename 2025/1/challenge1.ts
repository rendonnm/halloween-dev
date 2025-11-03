function translatePossessed(message: string): string {
  if (message.trim() === '') return ''
  return message
    .split(' ')
    .map(w => [...w].reverse().join(''))
    .join(' ');
}
