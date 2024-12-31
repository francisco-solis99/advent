def detect_bombs(grid):
    filas, columnas = len(grid), len(grid[0])

    # Función para contar bombas adyacentes
    def contar_bombas(i, j):
        direcciones = [
            (-1, -1), (-1, 0), (-1, 1),
            (0, -1),          (0, 1),
            (1, -1), (1, 0), (1, 1)
        ]
        return sum(
            1 for dx, dy in direcciones
            if 0 <= i + dx < filas and 0 <= j + dy < columnas and grid[i + dx][j + dy]
        )

    # Crear la nueva matriz basada en los conteos
    nueva_matriz = [
        [contar_bombas(i, j) for j in range(columnas)]
        for i in range(filas)
    ]

    return nueva_matriz

entrada = [
    [True, False, False],
    [False, True, False],
    [False, False, False]
]

entrada2 = [
    [True, True],
    [False, False],
    [True, True]
]
print(detect_bombs(entrada2))


# Arriba: (i-1, j)
# Abajo: (i+1, j)
# Izquierda: (i, j-1)
# Derecha: (i, j+1)
# Diagonales:
# Arriba-Izquierda: (i-1, j-1)
# Arriba-Derecha: (i-1, j+1)
# Abajo-Izquierda: (i+1, j-1)
# Abajo-Derecha: (i+1, j+1)