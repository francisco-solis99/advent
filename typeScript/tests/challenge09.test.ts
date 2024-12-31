import { moveTrain } from '../challenges/challenge09.ts'
import { describe, test, expect } from '@jest/globals'

describe('The magic train', () => {
  test('Returns the correct gifts - Test 1', () => {
    const board = [
      '·····',
      '*····',
      '@····',
      'o····',
      'o····'
    ]
    expect(moveTrain(board, 'U')).toEqual('eat')
    expect(moveTrain(board, 'D')).toEqual('crash')
    expect(moveTrain(board, 'L')).toEqual('crash')
    expect(moveTrain(board, 'R')).toEqual('none')
  })
  test('Returns the correct gifts - Test 2', () => {
    expect(moveTrain([
      '·····',
      '··*··',
      '··@··',
      '··o··',
      '··o··'
    ], 'U')).toEqual('eat')
  })
  test('Returns the correct gifts - Test 3', () => {
    expect(moveTrain([
      '·····',
      '··*··',
      '··.··',
      '··o··',
      '··@··'
    ], 'D')).toEqual('crash')
  })
  test('Returns the correct gifts - Test 4', () => {
    expect(moveTrain([
      '·····',
      '··@··',
      '··*··',
      '·····',
      '·····'
    ], 'D')).toEqual('eat')
  })
})
