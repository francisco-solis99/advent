import re

def is_robot_back(moves: str):
    # Movimientos en el plano
    moves_x = {'L': -1, 'R': 1}
    moves_y = {'D': -1, 'U': 1}
    
    x_y = [0, 0]  # Coordenadas iniciales
    visited = set()  # Para movimientos únicos con '?'
    invert_next = False  # Controla el modificador '!'
    multiplier = 1  # Controla el modificador '*'
    
    for i, val in enumerate(moves):
        if multiplier == 0:
            multiplier = 1
            continue
        if val in moves_x or val in moves_y:
            # Aplica modificadores previos
            if invert_next:
                if val in moves_x:
                    val = 'L' if val == 'R' else 'R'
                elif val in moves_y:
                    val = 'D' if val == 'U' else 'U'
                invert_next = False
            
            if multiplier > 1:
                for _ in range(multiplier):
                    if val in moves_x:
                        x_y[0] += moves_x[val]
                    elif val in moves_y:
                        x_y[1] += moves_y[val]
                multiplier = 1
            else:
                if val in moves_x:
                    x_y[0] += moves_x[val]
                elif val in moves_y:
                    x_y[1] += moves_y[val]
        
        # Procesar modificadores
        elif val == '*':
            multiplier = 2
        elif val == '!':
            invert_next = True
        elif val == '?':
            if i + 1 < len(moves) and moves[i + 1] in visited:
                multiplier = 0
        visited.add(val)

    # Verifica la posición final
    return True if x_y == [0, 0] else x_y

print(is_robot_back('R'))     # [1, 0]
print(is_robot_back('RL'))    # true
print(is_robot_back('RLUD'))  # true
print(is_robot_back('*RU'))   # [2, 1]
print(is_robot_back('R*U'))   # [1, 2]
print(is_robot_back('LLL!R')) # [-4, 0]
print(is_robot_back('R?R'))   # [1, 0]
print(is_robot_back('U?D'))   # true
print(is_robot_back('R!L'))   # [2,0]
print(is_robot_back('U!D'))   # [0,2]
print(is_robot_back('R?L'))   # true
print(is_robot_back('U?U'))   # [0,1]
print(is_robot_back('*U?U'))  # [0,2]
print(is_robot_back('U?D?U')) # true