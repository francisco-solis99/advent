import { generateGiftSets } from '../challenges/challenge22.ts'
import { describe, test, expect } from '@jest/globals'

describe('Generate gift combinations', () => {
  test('Returns all possible combinations of gifts - Test 1', () => {
    expect(generateGiftSets(['car', 'doll', 'puzzle'])).toEqual([
      ['car'],
      ['doll'],
      ['puzzle'],
      ['car', 'doll'],
      ['car', 'puzzle'],
      ['doll', 'puzzle'],
      ['car', 'doll', 'puzzle']
    ])
  })
  test('Returns all possible combinations of gifts - Test 2', () => {
    expect(generateGiftSets(['ball'])).toEqual([
      ['ball']
    ])
  })
  test('Returns all possible combinations of gifts - Test 3', () => {
    expect(generateGiftSets(['game', 'pc'])).toEqual([
      ['game'],
      ['pc'],
      ['game', 'pc']
    ])
  })
})
