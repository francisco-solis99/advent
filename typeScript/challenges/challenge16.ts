
export function removeSnow (s: string): string {
  const snowPath: string[] = s.split('')
  for (let i = 0; i < snowPath.length - 1; i += 1) {
    // remove both occurrences if they are the same (duplicates)
    if (snowPath[i] === snowPath[i + 1]) {
      snowPath.splice(i, 2)
      // back 2 positions
      i -= 2
    }
  }
  return snowPath.join('')
}
