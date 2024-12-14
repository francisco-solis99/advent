export function drawRace (indices: number[], length: number): string {
  const lane: string[] = '~'.repeat(length).split('')
  const lengthIndeces: number = indices.length

  const raceTrackArr: string[] = indices.map((indice, index) => {
    const wideRight: string = ' '.repeat(lengthIndeces - (index + 1))
    if (indice === 0) return `${wideRight}${lane.join('')} /${index + 1}`

    const laneReindeer: string = lane.toSpliced(indice, 1, 'r').join('')
    return `${wideRight}${laneReindeer} /${index + 1}`
  })
  const raceTrack: string = raceTrackArr.join('\n')
  return raceTrack
}
