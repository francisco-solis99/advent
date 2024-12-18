import { drawTable } from '../challenges/challenge15.ts'
import { describe, test, expect } from '@jest/globals'

describe('Drawing tables', () => {
  test('Returns a table with the input data - Test 1', () => {
    const inputTable = [
      { name: 'Alice', city: 'London' },
      { name: 'Bob', city: 'Paris' },
      { name: 'Charlie', city: 'New York' }
    ]
    const expectedDrawTable =
    `+---------+----------+
| Name    | City     |
+---------+----------+
| Alice   | London   |
| Bob     | Paris    |
| Charlie | New York |
+---------+----------+`

    expect(drawTable(inputTable)).toEqual(expectedDrawTable)
  })

  test('Returns a table with the input data - Test 2', () => {
    const inputTable = [
      { gift: 'Doll', quantity: 10 },
      { gift: 'Book', quantity: 5 },
      { gift: 'Music CD', quantity: 1 }
    ]
    const expectedDrawTable =
    `+----------+----------+
| Gift     | Quantity |
+----------+----------+
| Doll     | 10       |
| Book     | 5        |
| Music CD | 1        |
+----------+----------+`

    expect(drawTable(inputTable)).toEqual(expectedDrawTable)
  })

  test('Returns a table with the input data - Test 2', () => {
    const inputTable = [
      { id: 1, score: 95 },
      { id: 2, score: 85 }
    ]
    const expectedDrawTable =
    `+----+-------+
| Id | Score |
+----+-------+
| 1  | 95    |
| 2  | 85    |
+----+-------+`

    expect(drawTable(inputTable)).toEqual(expectedDrawTable)
  })
})
