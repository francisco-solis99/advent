from typing import List, Literal

def move_train(board: List[str], mov: Literal['U', 'D', 'R', 'L']) -> Literal['none', 'crash', 'eat']:
    for i, j in enumerate(board):
        if '@' in j:
            head_index, head_value = i, j
            head = j.index('@')

    # Determinar el desplazamiento basado en el movimiento
    delta_row, delta_col = 0, 0
    if mov == 'U':
        delta_row = -1
    elif mov == 'D':
        delta_row = 1
    elif mov == 'L':
        delta_col = -1
    elif mov == 'R':
        delta_col = 1

    # Calcular las nuevas coordenadas
    new_row = head_index + delta_row
    new_col = head + delta_col

    # Verificar si las nuevas coordenadas están dentro del tablero
    if not (0 <= new_row < len(board)) or not (0 <= new_col < len(head_value)):
        return 'crash'

    # Evaluar el contenido de la nueva posición
    next_cell = board[new_row][new_col]
    if next_cell == '*':
        return 'eat'
    elif next_cell == 'o':
        return 'crash'
    else:
        return 'none'

board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
]


print(move_train(board,'U'))



# ['·····', '*····', '@····', 'o····', 'o····']
# U: Cadena anterior de la lista en el mismo inndice
# D: caeena siguiente de la lista en el mismo  indice
# L: Indice anterior en la misma cadena 
# R: Siguiente indice en la misma cadena