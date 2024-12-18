import { removeSnow } from '../challenges/challenge16.ts'
import { describe, test, expect } from '@jest/globals'

describe('Cleaning the snow Path', () => {
  test('Returns the final path after removing duplicates - Test 1', () => {
    expect(removeSnow('zxxzoz')).toEqual('oz')
  })
  test('Returns the final path after removing duplicates - Test 2', () => {
    expect(removeSnow('abcdd')).toEqual('abc')
  })
  test('Returns the final path after removing duplicates - Test 3', () => {
    expect(removeSnow('zzz')).toEqual('z')
  })
  test('Returns the final path after removing duplicates - Test 4', () => {
    expect(removeSnow('a')).toEqual('a')
  })
  test('Returns the final path after removing duplicates - Test 5', () => {
    expect(removeSnow('aa')).toEqual('')
  })
  test('Returns the final path after removing duplicates - Test 6', () => {
    expect(removeSnow('abbacddce')).toEqual('e')
  })
})
