import { createFrame } from '../challenges/challenge02.ts'
import { describe, test, expect } from '@jest/globals'

describe('Create Frame', () => {
  test('Returns the correct frame with the names - Test 1', () => {
    expect(createFrame(['midu', 'madeval', 'educalvolpz']))
      .toEqual(`***************
* midu        *
* madeval     *
* educalvolpz *
***************`)
  })
  test('Returns the correct frame with the name - Test 2', () => {
    expect(createFrame(['midu']))
      .toEqual(`********
* midu *
********`)
  })
  test('Returns the correct frame with the name - Test 3', () => {
    expect(createFrame(['a', 'bb', 'ccc']))
      .toEqual(`*******
* a   *
* bb  *
* ccc *
*******`)
  })
  test('Returns the correct frame with the name - Test 4', () => {
    expect(createFrame(['a', 'bb', 'ccc', 'dddd']))
      .toEqual(`********
* a    *
* bb   *
* ccc  *
* dddd *
********`)
  })
})
