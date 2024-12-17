export function minMovesToStables (reindeer: number[], stables: number[]): number {
  let steps: number = 0
  // Iterate the reindeers
  reindeer.forEach(reindeer => {
    // Min object to save the minim distance and the index in the stables array
    const min = {
      dist: Infinity,
      index: 0
    }

    stables.forEach((stable, index) => {
      const dist = Math.abs(reindeer - stable)
      // Evaluate each stable distance with the reindeer
      if (dist < min.dist) {
        min.dist = dist
        min.index = index
      }
    })

    // delete the minium stable value and add the distance
    stables.splice(min.index, 1)
    steps += min.dist
  })
  return steps
}

// other solution
// function minMovesToStables(reindeer, stables) {
//   let steps = 0
//   reindeer.forEach(reindeer => {
//     const vals = []
//     stables.forEach(stable => {
//       vals.push(Math.abs(stable - reindeer))
//     })
//     const min = Math.min(...vals)
//     const index = vals.findIndex(item => item === min)
//     stables.splice(index, 1)
//     steps += min
//   })
//   return steps
// }
