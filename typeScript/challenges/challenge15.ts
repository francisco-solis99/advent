export function drawTable (data: Array<Record<string, string | number>>): string {
  const keys: string[] = Object.keys(data[0])
  const maxLongPerKey: number[] = keys.map(key => {
    const strsLen = data.map(item => item[key].toString().length)
    strsLen.push(key.length)
    return Math.max(...strsLen) + 2
  })

  // Header Table
  let blockEdge: string = ''
  let cols: string = ''
  for (let i = 0; i < keys.length; i += 1) {
    const col = keys[i]
    const spaces = maxLongPerKey[i] - 2
    const propCol = (col[0].toUpperCase() + col.slice(1)).padEnd(spaces, ' ')
    blockEdge += `+${'-'.repeat(maxLongPerKey[i])}`
    cols += `| ${propCol} `
  }
  blockEdge += '+'
  cols += '|'
  const header: string = `${blockEdge}\n${cols}\n${blockEdge}`

  // Content Table
  const dataTable: string[] = data.map(item => {
    let row = ''
    for (let j = 0; j < keys.length; j += 1) {
      const valueStr = item[keys[j]].toString()
      row += `| ${valueStr.padEnd(maxLongPerKey[j] - 2, ' ')} `
    }
    row += '|'
    return row
  })
  // Formin the table
  const table: string = `${header}\n${dataTable.join('\n')}\n${blockEdge}`
  return table
}
