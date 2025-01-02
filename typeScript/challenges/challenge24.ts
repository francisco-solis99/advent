export function isTreesSynchronized (
  tree1: { value: string, left?: any, right?: any } | undefined,
  tree2: { value: string, left?: any, right?: any } | undefined
): [boolean, string | null] {
  if ((tree1 === undefined) && (tree2 === undefined)) return [true, null]

  if (tree1?.value !== tree2?.value) return [false, tree1?.value ?? null]

  const [isLeftSynchronized] = isTreesSynchronized(tree1?.left, tree2?.right)
  const [isRightSynchronized] = isTreesSynchronized(tree2?.left, tree1?.right)

  return [isLeftSynchronized && isRightSynchronized, tree1?.value ?? null]
}
