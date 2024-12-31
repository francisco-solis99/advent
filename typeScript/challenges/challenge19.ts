interface BoxRepresentation {
  [key: number]: string[]
}

export function distributeWeight (weight: number): string {
  const boxRepresentations: BoxRepresentation = {
    1: [' _ ', '|_|'],
    2: [' ___ ', '|___|'],
    5: [' _____ ', '|     |', '|_____|'],
    10: [' _________ ', '|         |', '|_________|']
  }

  // Select the gifts
  const weightsPicked: number[] = []
  const weights: string[] = Object.keys(boxRepresentations)
  while (weight > 0) {
    let indexWeight = weights.findIndex(w => Number(w) > weight) - 1
    if (indexWeight < 0) indexWeight = weights.length - 1
    const weightPick = Number(weights[indexWeight])
    weight -= weightPick
    weightsPicked.push(weightPick)
  }

  // Draw the boxes
  const reversedWeights: number[] = weightsPicked.reverse()
  let drawBoxes = boxRepresentations[reversedWeights.at(0) as keyof BoxRepresentation][0] + '\n'
  reversedWeights.forEach((wPick, index) => {
    const box = boxRepresentations[wPick]
    const nextBox = boxRepresentations[reversedWeights[index + 1]]
    let rightSpaces = nextBox?.[0]?.length - box[0].length
    if (rightSpaces <= 0 || isNaN(rightSpaces)) rightSpaces = 1
    drawBoxes += box.slice(1).join('\n') + '_'.repeat(rightSpaces - 1) + '\n'
  })
  return drawBoxes.slice(0, -1)
}
