
export function detectBombs (grid: boolean[][]): number[][] {
  const adjacent: number[][] = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ]

  return grid.map((row, indexI) => {
    return row.map((_, indexJ) => {
      let counter: number = 0

      adjacent.forEach(([y, x]) => {
        if (grid[indexI + y]?.[indexJ + x]) counter += 1
      })
      return counter
    })
  })
}
