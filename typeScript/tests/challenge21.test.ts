import { treeHeight } from '../challenges/challenge21.ts'
import { describe, test, expect } from '@jest/globals'

describe('Calculate the height of the christmas tree', () => {
  test('Returns height of the binary tree - Test 1', () => {
    const tree = {
      value: '🎁',
      left: {
        value: '🎄',
        left: {
          value: '⭐',
          left: null,
          right: null
        },
        right: {
          value: '🎅',
          left: null,
          right: null
        }
      },
      right: {
        value: '❄️',
        left: null,
        right: {
          value: '🦌',
          left: null,
          right: null
        }
      }
    }
    expect(treeHeight(tree)).toEqual(3)
  })
  test('Returns height of the binary tree - Test 2', () => {
    const tree = {
      value: '🎁',
      left: {
        value: '🎄',
        left: {
          value: '⭐',
          left: null,
          right: null
        },
        right: null
      },
      right: {
        value: '❄️',
        left: null,
        right: null
      }
    }
    expect(treeHeight(tree)).toEqual(3)
  })
  test('Returns height of the binary tree - Test 3', () => {
    const tree = {
      value: '🎁',
      left: {
        value: '🎄',
        left: {
          value: '⭐',
          left: {
            value: '🎅',
            left: null,
            right: null
          },
          right: null
        },
        right: null
      },
      right: null
    }
    expect(treeHeight(tree)).toEqual(4)
  })
})
