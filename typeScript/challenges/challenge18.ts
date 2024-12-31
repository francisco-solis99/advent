export function findInAgenda (agenda: string, phone: string): { name: string, address: string } | null {
  // separet into array
  const agendaArray: string[] = agenda.split('\n')
  // get the row where is the number and valid just one coincidence
  const filtered: string[] = agendaArray.filter(item => item.includes(phone))
  if (filtered.length !== 1) return null

  // clean the row text into the correct structur of name + address
  const nameClosed: RegExpMatchArray | null = filtered[0].match(/<.+>/g)
  if (nameClosed == null) return null

  const name: string = nameClosed[0].slice(1, -1)
  const address: string = filtered[0].replace(/<.+>|\+[\d-]+/g, '').trim()
  return {
    name,
    address
  }
}
