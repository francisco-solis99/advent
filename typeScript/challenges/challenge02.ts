export function createFrame (names: string[]): string {
  const namesLong: number[] = names.map(name => name.length)
  const maxLong: number = Math.max(...namesLong)
  const border: string = '*'.repeat(maxLong + 4)
  let frame: string = `${border}\n`

  names.forEach(name => {
    const lineName = `* ${name.padEnd(maxLong, ' ')} *\n`
    frame += lineName
  })

  frame += border
  return frame
}
