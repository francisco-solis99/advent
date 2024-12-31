export function fixGiftList (received: string[], expected: string[]): { missing: Record<string, number>, extra: Record<string, number> } {
  const missing: Record<string, number> = {}
  const extra: Record<string, number> = {}

  expected.forEach(gift => {
    const receivedIndex = received.indexOf(gift)
    if (receivedIndex !== -1) {
      received.splice(receivedIndex, 1)
      return
    }
    (missing[gift] === undefined) ? missing[gift] = 1 : missing[gift] += 1
  })

  received.forEach(gift => {
    extra[gift] = 1
  })

  return {
    missing,
    extra
  }
}
