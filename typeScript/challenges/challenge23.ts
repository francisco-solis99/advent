
export function findMissingNumbers (nums: number[]): number[] {
  const maxNum: number = Math.max(...nums)
  const missing: number[] = []
  for (let i = 1; i < maxNum; i += 1) {
    if (nums.includes(i)) continue
    missing.push(i)
  }

  return missing
}
