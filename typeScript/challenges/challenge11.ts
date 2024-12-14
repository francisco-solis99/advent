export function decodeFilename (filename: string): string {
  const [, ...rest] = filename.split('_')
  const fileNameDivided = rest.join('_').split('.')
  const fileNameDecoded = fileNameDivided.slice(0, -1).join('.')
  return fileNameDecoded
}

// Solution with regex
export function decodeFilenameRegex (filename: string): string {
  // Match a pattern that starts with an underscore followed by valid filename characters, use group
  const match = filename.match(/_([a-zA-Z0-9_-]+\.[a-zA-Z0-9]+)/)
  // Check if a match was found and return the decoded filename or an error message
  const fileNameDecoded = match?.[1] ?? 'Invalid filename format'
  return fileNameDecoded
}
