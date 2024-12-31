import { fixPackages } from '../challenges/challenge07.ts'
import { describe, test, expect } from '@jest/globals'

describe('fixPackages', () => {
  test('should return "abcde" for input "a(cb)de"', () => {
    expect(fixPackages('a(cb)de')).toBe('abcde')
  })

  test('should return "agdefcbh" for input "a(bc(def)g)h"', () => {
    expect(fixPackages('a(bc(def)g)h')).toBe('agdefcbh')
  })

  test('should return "abcighfedjk" for input "abc(def(gh)i)jk"', () => {
    expect(fixPackages('abc(def(gh)i)jk')).toBe('abcighfedjk')
  })

  test('should return "acbe" for input "a(b(c))e"', () => {
    expect(fixPackages('a(b(c))e')).toBe('acbe')
  })

  test('should handle nested parentheses correctly', () => {
    expect(fixPackages('a(bc(d(e)f)g)h')).toBe('agdefcbh')
    expect(fixPackages('(ab(c)d)e')).toBe('dcbae')
  })

  test('should return the same string if no parentheses are present', () => {
    expect(fixPackages('abcdef')).toBe('abcdef')
    expect(fixPackages('xyz')).toBe('xyz')
  })

  test('should handle multiple levels of nesting', () => {
    expect(fixPackages('(a(b(c)d)e)')).toBe('ebcda')
    expect(fixPackages('(a(b(c))d(e(f)))')).toBe('efdbca')
  })
})
