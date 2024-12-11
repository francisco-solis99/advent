export function fixPackages (packages: string): string {
  let fixedPackages: string = packages
  while (fixedPackages.includes('(')) {
    fixedPackages = fixedPackages.replace(/\(([^()]+)\)/g,
      (_, match) => {
        return match.split('').reverse().join('')
      })
  }
  return fixedPackages
}

//  Other solution using recursion (less optimized)
export function fixPackages2 (packages: string): string {
  const fixedPackages: string = packages.replace(/\(([^()]+)\)/g, (_, match) => {
    return match.split('').reverse().join('')
  })
  if (fixedPackages.includes('(')) return fixPackages(fixedPackages)
  return fixedPackages
}
