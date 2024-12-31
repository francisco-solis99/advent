import { findMissingNumbers } from '../challenges/challenge23.ts'
import { describe, test, expect } from '@jest/globals'

describe('Find the missing numbers', () => {
  test('Returns and finds all the numbers that are missing between 1 and n - Test 1', () => {
    expect(findMissingNumbers([1, 2, 4, 6])).toEqual([3, 5])
  })
  test('Returns and finds all the numbers that are missing between 1 and n - Test 2', () => {
    expect(findMissingNumbers([4, 8, 7, 2])).toEqual([1, 3, 5, 6])
  })
  test('Returns and finds all the numbers that are missing between 1 and n - Test 3', () => {
    expect(findMissingNumbers([3, 2, 1, 1])).toEqual([])
  })
  test('Returns and finds all the numbers that are missing between 1 and n - Test 4', () => {
    expect(findMissingNumbers([5, 5, 5, 3, 3, 2, 1])).toEqual([4])
  })
})
