export function execute (code: string): number {
  let value = 0
  const moves: Record<string, number> = {
    '+': 1,
    '-': -1
  }

  for (let i = 0; i < code.length; i += 1) {
    const move = moves[code[i]]
    if (move !== undefined) {
      value += move
      continue
    }

    if (code[i] === '>') continue
    if (code[i] === '[') {
      value = 0
      i = code.indexOf(']', i)
      continue
    }
    if (value === 0) i = code.indexOf('}', i)
  }

  return value
}
