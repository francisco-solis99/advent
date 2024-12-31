import { compile } from '../challenges/challenge10.ts'
import { describe, test, expect } from '@jest/globals'

describe('The elfish assembler', () => {
  test('should return 2 for the given set of instructions', () => {
    const instructions = [
      'MOV -1 C', // copies -1 to register 'C'
      'INC C', // increments the value of register 'C'
      'JMP C 1', // jumps to the instruction at index 1 if 'C' is 0
      'MOV C A', // copies register 'C' to register 'A'
      'INC A' // increments the value of register 'A'
    ]
    expect(compile(instructions)).toBe(2)
  })

  test('should handle simple increment and move instructions correctly', () => {
    const instructions = [
      'MOV 5 A',
      'INC A',
      'MOV A B',
      'INC B'
    ]
    expect(compile(instructions)).toBe(6) // A becomes 6, B becomes 6
  })

  test('should return correct value when using DEC instruction', () => {
    const instructions = [
      'MOV 10 A',
      'DEC A',
      'MOV A B',
      'INC B'
    ]
    expect(compile(instructions)).toBe(9)
  })

  test('should handle jump instructions correctly', () => {
    const instructions = [
      'MOV -1 C',
      'INC C',
      'JMP C 1',
      'MOV C A',
      'INC A'
    ]
    expect(compile(instructions)).toBe(2)
  })
})
