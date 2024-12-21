import { isRobotBack } from '../challenges/challenge13.ts'
import { describe, test, expect } from '@jest/globals'

describe('Is the robot back?', () => {
  test('Returns if  the robot comes back or the current position - Test 1', () => {
    expect(isRobotBack('R')).toEqual([1, 0])
  })
  test('Returns if  the robot comes back or the current position - Test 2', () => {
    expect(isRobotBack('RL')).toEqual(true)
  })
  test('Returns if  the robot comes back or the current position - Test 3', () => {
    expect(isRobotBack('RLUD')).toEqual(true)
  })
  test('Returns if  the robot comes back or the current position - Test 4', () => {
    expect(isRobotBack('*RU')).toEqual([2, 1])
  })
  test('Returns if  the robot comes back or the current position - Test 5', () => {
    expect(isRobotBack('R*U')).toEqual([1, 2])
  })
  test('Returns if  the robot comes back or the current position - Test 6', () => {
    expect(isRobotBack('LLL!R')).toEqual([-4, 0])
  })
  test('Returns if  the robot comes back or the current position - Test 7', () => {
    expect(isRobotBack('*U?U')).toEqual([0, 2])
  })
  test('Returns if  the robot comes back or the current position - Test 8', () => {
    expect(isRobotBack('U?D?U')).toEqual(true)
  })
  test('Returns if  the robot comes back or the current position - Test 9', () => {
    expect(isRobotBack('U!D')).toEqual([0, 2])
  })
})
