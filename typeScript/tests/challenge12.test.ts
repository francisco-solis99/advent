import { calculatePrice } from '../challenges/challenge12.ts'
import { describe, test, expect } from '@jest/globals'

describe('calculatePrice', () => {
  test('should return 3 for "***"', () => {
    expect(calculatePrice('***')).toBe(3) // (1 + 1 + 1)
  })

  test('should return 4 for "*o"', () => {
    expect(calculatePrice('*o')).toBe(4) // (5 - 1)
  })

  test('should return 6 for "o*"', () => {
    expect(calculatePrice('o*')).toBe(6) // (5 + 1)
  })

  test('should return 5 for "*o*"', () => {
    expect(calculatePrice('*o*')).toBe(5) // (-1 + 5 + 1)
  })

  test('should return 6 for "**o*"', () => {
    expect(calculatePrice('**o*')).toBe(6) // (1 - 1 + 5 + 1)
  })

  test('should return 8 for "o***"', () => {
    expect(calculatePrice('o***')).toBe(8) // (5 + 3)
  })

  test('should return 94 for "*o@"', () => {
    expect(calculatePrice('*o@')).toBe(94) // (-5 - 1 + 100)
  })

  test('should return 49 for "*#"', () => {
    expect(calculatePrice('*#')).toBe(49) // (-1 + 50)
  })

  test('should return 300 for "@@@"', () => {
    expect(calculatePrice('@@@')).toBe(300) // (100 + 100 + 100)
  })

  test('should return 50 for "#@"', () => {
    expect(calculatePrice('#@')).toBe(50) // (-50 + 100)
  })

  test('should return undefined for "#@Z"', () => {
    expect(calculatePrice('#@Z')).toBeUndefined() // Z is unknown
  })

  test('should return undefined for invalid characters', () => {
    const invalidInputs = ['*Z', 'o#X', '@^Y']
    invalidInputs.forEach(input => {
      expect(calculatePrice(input)).toBeUndefined() // Invalid characters
    })
  })
})
