interface Instructions {
  R: number[]
  L: number[]
  U: number[]
  D: number[]
}

interface Reverse {
  R: string
  L: string
  U: string
  D: string
}

export function isRobotBack (moves: string): true | [number, number] {
  const instructions: Instructions = {
    R: [1, 0],
    L: [-1, 0],
    U: [0, 1],
    D: [0, -1]
  }
  const reverse: Reverse = {
    R: 'L',
    L: 'R',
    U: 'D',
    D: 'U'
  }
  const origin: [number, number] = [0, 0]
  const movesArr: string[] = moves.split('')
  const movesSet = new Set()
  let modifier: null | string = null

  for (let i = 0; i < movesArr.length; i += 1) {
    let move: string = movesArr[i]
    if (instructions[move as keyof Instructions] === undefined) {
      modifier = move
      continue
    }
    let [x, y] = instructions[move as keyof Instructions]

    if (modifier !== null) {
      if (modifier === '?' && movesSet.has(move)) continue
      if (modifier === '*') {
        x *= 2
        y *= 2
      }
      if (modifier === '!') {
        x *= -1
        y *= -1
        move = reverse[move as keyof Reverse]
      }
      modifier = null
    }
    movesSet.add(move)
    origin[0] += x
    origin[1] += y
  }

  if (origin[0] === 0 && origin[1] === 0) return true
  return origin
}

// export function isRobotBack (moves) {
//   const instructions = {
//     R: [1, 0],
//     L: [-1, 0],
//     U: [0, 1],
//     D: [0, -1]
//   }

//   const origin = [0, 0]

//   const movesArr = moves.split('')
//   for (let i = 0; i < movesArr.length; i += 1) {
//     const move = movesArr[i]
//     if (!instructions[move]) {
//       const nextMove = movesArr[i + 1]
//       if (move === '*') {
//         const [x, y] = instructions[nextMove]
//         origin[0] += (x * 2)
//         origin[1] += (y * 2)
//       }
//       if (move === '!') {
//         const [x, y] = instructions[nextMove]
//         origin[0] += (x * -1)
//         origin[1] += (y * -1)
//         if (nextMove === 'U' || nextMove === 'D') {
//           movesArr[i + 1] = nextMove === 'U' ? 'D' : 'U'
//         } else {
//           movesArr[i + 1] = nextMove === 'R' ? 'L' : 'R'
//         }
//       }
//       if (move === '?') {
//         if (movesArr.slice(0, i + 1).includes(nextMove) === false) {
//           const [x, y] = instructions[nextMove]
//           origin[0] += x
//           origin[1] += y
//         }
//       }
//       i += 1
//       continue
//     }
//     const [x, y] = instructions[move]
//     origin[0] += x
//     origin[1] += y
//   }

//   if (!origin[0] && !origin[1]) return true
//   return origin
// }
