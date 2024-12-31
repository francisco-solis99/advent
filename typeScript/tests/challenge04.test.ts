import { createXmasTree } from '../challenges/challenge04.ts'
import { describe, test, expect } from '@jest/globals'

describe('Decorating Christmas Tree', () => {
  test('should create a tree of height 5 with "*" ornament - Test 1', () => {
    const expectedOutput =
`____*____
___***___
__*****__
_*******_
*********
____#____
____#____`
    expect(createXmasTree(5, '*')).toBe(expectedOutput)
  })

  test('should create a tree of height 3 with "+" ornament - Test 2', () => {
    const expectedOutput =
`__+__
_+++_
+++++
__#__
__#__`
    expect(createXmasTree(3, '+')).toBe(expectedOutput)
  })

  test('should create a tree of height 6 with "@" ornament - Test 3', () => {
    const expectedOutput =
`_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____`
    expect(createXmasTree(6, '@')).toBe(expectedOutput)
  })
})
