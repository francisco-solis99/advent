function organizeInventory(inventory) {
  if(!inventory.length) return {}
  const organizedInventary = {}

  inventory.forEach(item => {
   const {name, category, quantity} = item
   if(!organizedInventary[category]) {
       organizedInventary[category] = {
         [name]: quantity
       }
       return
   }

   organizedInventary[category] = {
     ...organizedInventary[category],
     [name]: quantity + (organizedInventary[category][name] ?? 0)
   }
  })

  return organizedInventary
}