import { findInAgenda } from '../challenges/challenge18.ts'
import { describe, test, expect } from '@jest/globals'

describe('Santa Magic Agenda', () => {
  test('Returns a child name and address from the agenda. - Test 1', () => {
    const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

    expect(findInAgenda(agenda, '34-600-123-456')).toEqual({ name: 'Juan Perez', address: 'Calle Gran Via 12' })
    expect(findInAgenda(agenda, '600-987')).toEqual({ name: 'Maria Gomez', address: 'Plaza Mayor 45 Madrid 28013' })
    expect(findInAgenda(agenda, '111')).toEqual(null)
    expect(findInAgenda(agenda, '1')).toEqual(null)
  })
})
