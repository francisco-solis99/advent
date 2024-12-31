export function generateGiftSets (gifts: string[]): string[][] {
  const result: string[][] = []

  function backtrack (start: number, path: string[]): void {
    // Add the current combination to the result
    if (path.length > 0) {
      result.push([...path])
    }

    for (let i = start; i < gifts.length; i++) {
      // Include gifts[i] in the current combination
      path.push(gifts[i])
      // Move on to the next item
      backtrack(i + 1, path)
      // Backtrack and remove the last item added
      path.pop()
    }
  }

  backtrack(0, [])
  // sorted
  return result.sort((a, b) => a.length - b.length)
}
