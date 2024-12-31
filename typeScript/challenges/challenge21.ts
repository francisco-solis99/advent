export function treeHeight (tree: { value: string, left: any, right: any } | null): number {
  if ((tree?.value) == null) return 0
  return Math.max(treeHeight(tree.left) + 1, treeHeight(tree.right) + 1)
}
