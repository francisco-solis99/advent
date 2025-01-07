def generate_gift_sets(gifts):
    def backtrack(start, current):
        if len(current) > 0:
            result.append(current[:])  # Agregar la combinación actual
        for i in range(start, len(gifts)):
            current.append(gifts[i])  # Agregar el siguiente regalo
            backtrack(i + 1, current)  # Continuar con la siguiente posición
            current.pop()  # Retroceder para explorar otras combinaciones

    result = []
    backtrack(0, [])
    result.sort(key=len)
    return result








print(generate_gift_sets(['car', 'doll', 'puzzle']))
# [
#   ['car'],
#   ['doll'],
#   ['puzzle'],
#   ['car', 'doll'],
#   ['car', 'puzzle'],
#   ['doll', 'puzzle'],
#   ['car', 'doll', 'puzzle']
# ])