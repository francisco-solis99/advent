import { prepareGifts } from '../challenges/challenge01.ts'
import { describe, test, expect } from '@jest/globals'

describe('Prepare gifts', () => {
  test('Returns the correct gifts - Test 1', () => {
    expect(prepareGifts([3, 1, 2, 3, 4, 2, 5])).toEqual([1, 2, 3, 4, 5])
  })
  test('Returns the correct gifts - Test 2', () => {
    expect(prepareGifts([6, 5, 5, 5, 5])).toEqual([5, 6])
  })
  test('Returns the correct gifts - Test 3', () => {
    expect(prepareGifts([])).toEqual([])
  })
})
