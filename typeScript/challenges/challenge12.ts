interface OrnamentsValues {
  '*': number
  o: number
  '^': number
  '#': number
  '@': number
}

export function calculatePrice (ornaments: string): number | undefined {
  // Evaluate if there it is invalid chars
  const regex = /^[#@*o^]+$/
  if (!regex.test(ornaments)) return undefined

  // Ornaments values
  const values: OrnamentsValues = {
    '*': 1,
    o: 5,
    '^': 10,
    '#': 50,
    '@': 100
  }

  // Get the last value
  let price: number = values[ornaments.at(-1) as keyof OrnamentsValues]

  // Evaluate the ornamemnt i and the ornament i + 1
  for (let i = 0; i < ornaments.length - 1; i += 1) {
    const value1: number = values[ornaments.at(i) as keyof OrnamentsValues]
    const value2: number = values[ornaments.at(i + 1) as keyof OrnamentsValues]
    if (value2 > value1) {
      price -= value1
      continue
    }
    price += value1
  }
  return price
}
