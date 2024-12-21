import { detectBombs } from '../challenges/challenge17.ts'
import { describe, test, expect } from '@jest/globals'

describe('Grinch Bombs', () => {
  test('Returns the mapping dangerous areas - Test 1', () => {
    const grid = [
      [true, false, false],
      [false, true, false],
      [false, false, false]
    ]
    const result = [
      [1, 2, 1],
      [2, 1, 1],
      [1, 1, 1]
    ]
    expect(detectBombs(grid)).toEqual(result)
  })
  test('Returns the mapping dangerous areas - Test 2', () => {
    const grid = [
      [true, false],
      [false, false]
    ]
    const result = [
      [0, 1],
      [1, 1]
    ]
    expect(detectBombs(grid)).toEqual(result)
  })
  test('Returns the mapping dangerous areas - Test 3', () => {
    const grid = [
      [true, true],
      [false, false],
      [true, true]
    ]
    const result = [
      [1, 1],
      [4, 4],
      [1, 1]
    ]
    expect(detectBombs(grid)).toEqual(result)
  })
})
