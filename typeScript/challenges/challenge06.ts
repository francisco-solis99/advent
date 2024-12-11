export function inBox (box: string[]): boolean {
  const regex = /^#\s*\*\s*#$/g
  return box.slice(1, -1).some(line => {
    return regex.test(line)
  })
}

// Anotehr solution (more optimized)
export function inBox2 (box: string[]): boolean {
  const regex = /#\s*\*\s*#/g
  return regex.test(box.slice(1, -1).join('-'))
}
