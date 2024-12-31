import { drawRace } from '../challenges/challenge08.ts'
import { describe, test, expect } from '@jest/globals'

describe('The reno race', () => {
  test('Returns the race track - Test 1', () => {
    expect(drawRace([0, 5, -3], 10)).toEqual(`  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3`)
  })
  test('Returns the race track - Test 2', () => {
    expect(drawRace([2, -1, 0, 5], 8)).toEqual(`   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4`)
  })
  test('Returns the race track - Test 3', () => {
    expect(drawRace([3, 7, -2], 12)).toEqual(`  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3`)
  })
})
