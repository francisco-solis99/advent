import { fixGiftList } from '../challenges/challenge20.ts'
import { describe, test, expect } from '@jest/globals'

describe('Find missing and duplicate gifts', () => {
  test('Returns the final path after removing duplicates - Test 1', () => {
    expect(fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])).toEqual({
      missing: { ball: 1 },
      extra: { car: 1 }
    })
  })
  test('Returns the final path after removing duplicates - Test 2', () => {
    expect(fixGiftList(
      ['book', 'train', 'kite', 'train'],
      ['train', 'book', 'kite', 'ball', 'kite']
    )).toEqual({
      missing: { ball: 1, kite: 1 },
      extra: { train: 1 }
    }
    )
  })
  test('Returns the final path after removing duplicates - Test 3', () => {
    expect(fixGiftList(
      ['bear', 'bear', 'car'],
      ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
    )).toEqual({
      missing: { puzzle: 1, car: 2 },
      extra: {}
    })
  })
  test('Returns the final path after removing duplicates - Test 4', () => {
    expect(fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])).toEqual({
      missing: {},
      extra: {}
    })
  })
})
