def organizeInventory(inventory):
    grouped = {}
    for item in inventory:
        category = item["category"]
        name = item["name"]
        if category not in grouped:
            grouped[category] = {}
        if name not in grouped[category]:
            grouped[category][name] = 0
        grouped[category][name] += item["quantity"]
    return grouped


data = [
    { "name": 'doll', "quantity": 5, "category": 'toys' },
    { "name": 'car', "quantity": 3, "category": 'toys' },
    { "name": 'ball', "quantity": 2, "category": 'sports' },
    { "name": 'car', "quantity": 2, "category": 'toys' },
    { "name": 'racket', "quantity": 4, "category": 'sports'}
]

data2 = [
    { "name": 'book', "quantity": 10, "category": 'education' },
    { "name": 'book', "quantity": 5, "category": 'education' },
    { "name": 'paint', "quantity": 3, "category": 'art' }
]

data3 = []



print(organizeInventory(data2))