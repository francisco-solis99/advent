export function createXmasTree (height: number, ornament: string): string {
  const treeArr: string[] = []
  const maxLength: number = (height * 2) - 1

  for (let i = 1; i <= maxLength; i += 2) {
    const side = '_'.repeat((maxLength - i) / 2)
    const triangleLine = `${side}${ornament.repeat(i)}${side}\n`
    treeArr.push(triangleLine)
  }

  const trunk = treeArr[0].replace(ornament, '#')
  const tree = treeArr.join('') + trunk.repeat(2).slice(0, -1)
  return tree
}
