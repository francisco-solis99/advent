import { inBox2 } from '../challenges/challenge06.ts'
import { describe, test, expect } from '@jest/globals'

describe('inBox', () => {
  test('should return true for a box with a star surrounded by hashes - Test 1', () => {
    const box1 = [
      '###',
      '#*#',
      '###'
    ]
    expect(inBox2(box1)).toBe(true)
  })

  test('should return true for a larger box with a star surrounded by hashes - Test 2', () => {
    const box2 = [
      '####',
      '#* #',
      '#  #',
      '####'
    ]
    expect(inBox2(box2)).toBe(true)
  })

  test('should return false for a box where the star is not properly enclosed - Test 3', () => {
    const box3 = [
      '#####',
      '#   #',
      '#  #*',
      '#####'
    ]
    expect(inBox2(box3)).toBe(false)
  })

  test('should return false for a box without a star or improperly enclosed - Test 2', () => {
    const box4 = [
      '#####',
      '#   #',
      '#   #',
      '#   #',
      '#####'
    ]
    expect(inBox2(box4)).toBe(false)
  })

  // Additional tests can be added here if needed
})
