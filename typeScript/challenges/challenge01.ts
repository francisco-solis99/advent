export function prepareGifts (gifts: number[]): number[] {
  const setGifts = [...new Set(gifts)]
  return setGifts.sort((a, b) => a - b)
}
