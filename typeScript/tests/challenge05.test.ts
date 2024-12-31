import type { Shoe } from '../challenges/challenge05.ts'
import { organizeShoes } from '../challenges/challenge05.ts'
import { describe, test, expect } from '@jest/globals'

describe('organizeShoes', () => {
  test('should return sizes with pairs for mixed shoe types - Test 1', () => {
    const shoes: Shoe[] = [
      { type: 'I', size: 38 },
      { type: 'R', size: 38 },
      { type: 'R', size: 42 },
      { type: 'I', size: 41 },
      { type: 'I', size: 42 }
    ]
    expect(organizeShoes(shoes)).toEqual([38, 42])
  })

  test('should return sizes with multiple pairs of the same size - Test 2', () => {
    const shoes2: Shoe[] = [
      { type: 'I', size: 38 },
      { type: 'R', size: 38 },
      { type: 'I', size: 38 },
      { type: 'I', size: 38 },
      { type: 'R', size: 38 }
    ]
    expect(organizeShoes(shoes2)).toEqual([38, 38])
  })

  test('should return an empty array when no pairs can be formed - Test 3', () => {
    const shoes3: Shoe[] = [
      { type: 'I', size: 38 },
      { type: 'R', size: 36 },
      { type: 'R', size: 42 },
      { type: 'I', size: 41 },
      { type: 'I', size: 43 }
    ]
    expect(organizeShoes(shoes3)).toEqual([])
  })
})
