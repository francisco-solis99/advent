export function compile (instructions: string[]): number | undefined {
  // Map as registers
  const registers = new Map<string, number>()

  for (let i = 0; i < instructions.length; i += 1) {
    // get the values of teh instructions
    const [toDo, val1, val2] = instructions[i].split(' ')
    const mapVal1: number | undefined = registers.get(val1)
    // const mapVal2 = registers.get(val2)

    // evaluate the instruction to do
    if (toDo === 'MOV') {
      registers.set(val2, (mapVal1 ?? Number(val1)))
      continue
    }
    if (toDo === 'INC') {
      registers.set(val1, (mapVal1 ?? 0) + 1)
      continue
    }
    if (toDo === 'DEC') {
      registers.set(val1, (mapVal1 ?? 0) - 1)
      continue
    }
    // the last option JMP - if there is 0 or undefined
    if (mapVal1 === 0 || mapVal1 === undefined) {
      i = Number(val2) - 1
    }
  }
  return registers.get('A')
}
