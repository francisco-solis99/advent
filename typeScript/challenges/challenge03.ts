type Inventory = Array<
{ name: string, quantity: number, category: string }
>

export function organizeInventory (inventory: Inventory): object {
  const invetoryOrganized: Record<string, Record<string, number>> = {}
  for (const { name, category, quantity } of inventory) {
    if (invetoryOrganized[category] === undefined) {
      invetoryOrganized[category] = {}
    }
    invetoryOrganized[category][name] = (invetoryOrganized[category][name] ?? 0) + quantity
  }
  return invetoryOrganized
}
