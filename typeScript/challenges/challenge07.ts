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
