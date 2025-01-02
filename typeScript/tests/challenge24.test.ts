import { isTreesSynchronized } from '../challenges/challenge24.ts'
import { describe, test, expect } from '@jest/globals'

describe('Check trees as magical mirrors', () => {
  test('return an array where the first position indicates if the trees are synchronized and the second position returns the value of the root of the first tree - Test 1', () => {
    const tree1 = {
      value: '🎄',
      left: { value: '⭐' },
      right: { value: '🎅' }
    }

    const tree2 = {
      value: '🎄',
      left: { value: '🎅' },
      right: { value: '⭐' }
    }
    const tree3 = {
      value: '🎄',
      left: { value: '🎅' },
      right: { value: '🎁' }
    }
    const tree4 = {
      value: '🎄',
      left: { value: '⭐' },
      right: { value: '🎅' }
    }
    expect(isTreesSynchronized(tree1, tree2)).toEqual([true, '🎄'])
    expect(isTreesSynchronized(tree1, tree3)).toEqual([false, '🎄'])
    expect(isTreesSynchronized(tree1, tree4)).toEqual([false, '🎄'])
  })
})
