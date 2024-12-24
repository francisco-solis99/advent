def min_moves_to_stables(reindeer, stables):
    
    reindeer.sort()
    stables.sort()

    total_movimientos = 0
    for reinder, stable in zip(reindeer, stables):
        distancia = abs(reinder - stable)
        total_movimientos += distancia
    
    return total_movimientos


renos = [1, 1, 3]
establos = [1, 8, 4]

print(min_moves_to_stables(renos,establos))


