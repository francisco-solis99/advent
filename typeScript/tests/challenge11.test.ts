import { decodeFilenameRegex } from '../challenges/challenge11.ts'
import { describe, test, expect } from '@jest/globals'

describe('Filenames encoded', () => {
  test('should return the correct filename from a valid input', () => {
    const filename1 = '2023122512345678_sleighDesign.png.grinchwa'
    expect(decodeFilenameRegex(filename1)).toBe('sleighDesign.png')
  })

  test('should return the correct filename from another valid input', () => {
    const filename2 = '42_chimney_dimensions.pdf.hack2023'
    expect(decodeFilenameRegex(filename2)).toBe('chimney_dimensions.pdf')
  })

  test('should return the correct filename from yet another valid input', () => {
    const filename3 = '987654321_elf-roster.csv.tempfile'
    expect(decodeFilenameRegex(filename3)).toBe('elf-roster.csv')
  })

  test('should return "Invalid filename format" for an input without a valid filename', () => {
    const invalidFilename1 = '12345_..invalidfile..'
    expect(decodeFilenameRegex(invalidFilename1)).toBe('Invalid filename format')
  })

  test('should return "Invalid filename format" for an input without an underscore', () => {
    const invalidFilename2 = 'no_underscore_here'
    expect(decodeFilenameRegex(invalidFilename2)).toBe('Invalid filename format')
  })

  test('should return "Invalid filename format" for an input without a file extension', () => {
    const invalidFilename3 = '12345_no_extension_just_text'
    expect(decodeFilenameRegex(invalidFilename3)).toBe('Invalid filename format')
  })
})
