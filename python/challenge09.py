from typing import List, Literal

def move_train(board: List[str], mov: Literal['U', 'D', 'R', 'L']) -> Literal['none', 'crash', 'eat']:
    for i,j in enumerate(board):
        if '@' in j:
            head_index, head_value = i,j
            head = j.index('@')

    if mov == 'U':
        if 0 <= head_index-1 < len(board):
            if board[head_index-1][head] == '*':
                return 'eat'
            elif board[head_index-1][head] == 'o':
                return 'crash'
            else:
                return 'none'
        else:
            return 'crash'

    elif mov == 'D':
        if 0 <= head_index+1 < len(board):
            if board[head_index+1][head] == '*':
                return 'eat'
            elif board[head_index+1][head] == 'o':
                return 'crash'
            else:
                return 'none'
        else:
            return 'crash'

    elif mov == 'L':
        if 0 <= head-1 < len(head_value):
            if board[head_index][head-1] == '*':
                return 'eat'
            elif board[head_index][head-1] == 'o':
                return 'crash'
            else:
                return 'none'
        else:
            return 'crash'

    elif mov == 'R':
        if 0 <= head+1 < len(head_value):
            if board[head_index][head+1] == '*':
                return 'eat'
            elif board[head_index][head+1] == 'o':
                return 'crash'
            else:
                return 'none'
        else:
            return 'crash'

board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
]


print(move_train(board,'R'))



# ['·····', '*····', '@····', 'o····', 'o····']
# U: Cadena anterior de la lista en el mismo inndice
# D: caeena siguiente de la lista en el mismo  indice
# L: Indice anterior en la misma cadena 
# R: Siguiente indice en la misma cadena