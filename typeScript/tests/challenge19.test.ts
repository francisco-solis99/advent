import { distributeWeight } from '../challenges/challenge19.ts'
import { describe, test, expect } from '@jest/globals'

describe('Stack magigal boxes', () => {
  test('Returns the fewest boxes possible - Test 1', () => {
    expect(distributeWeight(1)).toEqual(' _ \n|_|')
  })
  test('Returns the fewest boxes possible - Test 2', () => {
    expect(distributeWeight(2)).toEqual(' ___ \n|___|')
  })
  test('Returns the fewest boxes possible - Test 3', () => {
    expect(distributeWeight(3)).toEqual(' _ \n|_|_\n|___|')
  })
  test('Returns the fewest boxes possible - Test 4', () => {
    expect(distributeWeight(4)).toEqual(' ___ \n|___|\n|___|')
  })
  test('Returns the fewest boxes possible - Test 5', () => {
    expect(distributeWeight(6)).toEqual(' _ \n|_|___\n|     |\n|_____|')
  })
})
