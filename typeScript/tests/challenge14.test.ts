import { minMovesToStables } from '../challenges/challenge14.ts'
import { describe, test, expect } from '@jest/globals'

describe('Weaving the reno', () => {
  test('should return 3 for reindeer at [2, 6, 9] and stables at [3, 8, 5]', () => {
    expect(minMovesToStables([2, 6, 9], [3, 8, 5])).toBe(3)
  })

  test('should return 8 for reindeer at [1, 1, 3] and stables at [1, 8, 4]', () => {
    expect(minMovesToStables([1, 1, 3], [1, 8, 4])).toBe(8)
  })

  test('should return 0 for reindeer at [5] and stables at [5]', () => {
    expect(minMovesToStables([5], [5])).toBe(0) // No moves needed
  })

  test('should return the correct total moves for reindeer at different positions', () => {
    expect(minMovesToStables([10, 20], [15, 25])).toBe(10) // (5 + 5)
    expect(minMovesToStables([0, 0], [10, -10])).toBe(20) // (10 + 10)
    expect(minMovesToStables([-5, -5], [-10, -1])).toBe(9) // (5 + 4)
  })

  test('should handle cases with multiple reindeer and stables', () => {
    expect(minMovesToStables([1, 2, 3], [3, 2, 1])).toBe(0) // No moves
    expect(minMovesToStables([4, 4], [1, -1])).toBe(8) // (3 + 5)
    expect(minMovesToStables([3], [7])).toBe(4)
    expect(minMovesToStables([], [])).toBe(0) // No reindeer or stables
  })
})
