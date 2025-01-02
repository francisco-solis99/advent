import { execute } from '../challenges/challenge25.ts'
import { describe, test, expect } from '@jest/globals'

describe('execute function', () => {
  test('handles simple increments', () => {
    expect(execute('+++')).toBe(3)
  })

  test('handles simple decrements', () => {
    expect(execute('+--')).toBe(-1)
  })

  test('handles nested loops and resets', () => {
    expect(execute('>+++[-]')).toBe(0)
  })

  test('handles complex increments with braces', () => {
    expect(execute('>>>+{++}')).toBe(3)
  })

  test('handles mixed operations with braces', () => {
    expect(execute('+{[-]+}+')).toBe(2)
  })

  test('handles multiple braces without changes', () => {
    expect(execute('{+}{+}{+}')).toBe(0)
  })

  test('handles decrements followed by increments', () => {
    expect(execute('------[+]++')).toBe(2)
  })

  test('handles complex operations with nested braces', () => {
    expect(execute('-[++{-}]+{++++}')).toBe(5)
  })
})
