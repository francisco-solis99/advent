type Board = string[]
type Movement = 'U' | 'D' | 'R' | 'L'
type Result = 'none' | 'crash' | 'eat'

interface MoveInLine {
  R: number
  L: number
}
interface MoveInBlock {
  U: number
  D: number
}

export function moveTrain (board: Board, mov: Movement): Result {
  const movesInLine: MoveInLine = {
    R: 1,
    L: -1
  }
  const movesInBlock: MoveInBlock = {
    U: -1,
    D: 1
  }

  const linealHeadPos: number = board.join('').match(/@/)?.index ?? 0
  const y: number = Math.floor(linealHeadPos / board.length)
  const x: number = linealHeadPos % board.length

  const newPosX = x + (movesInLine[mov as 'R' | 'L'] ?? 0)
  const newPosY = y + (movesInBlock[mov as 'U' | 'D'] ?? 0)
  const boardNewPos: string | undefined = board[newPosY]?.[newPosX]

  if (boardNewPos === undefined || boardNewPos === 'o') return 'crash'
  if (boardNewPos === '*') return 'eat'
  return 'none'
}
