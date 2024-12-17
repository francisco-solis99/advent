def compile(instructions):
    registers = {} 
    i = 0
    
    while i < len(instructions):
        parts = instructions[i].split()
        command = parts[0] 
        
        if command == 'MOV':
            x, y = parts[1], parts[2]
            # Si x es un número convierte, si no toma su valor en registros
            value = int(x) if x.lstrip('-').isdigit() else registers.setdefault(x, 0)
            registers[y] = value

        elif command == 'INC':
            x = parts[1]
            registers[x] = registers.setdefault(x, 0) + 1
        
        elif command == 'DEC':
            x = parts[1]
            registers[x] = registers.setdefault(x, 0) - 1
        
        elif command == 'JMP':
            x, y = parts[1], int(parts[2])
            if registers.setdefault(x, 0) == 0:
                i = y 
                continue  # Evita incrementar i después del salto
        
        i += 1 
    
    return registers.get('A', None)


instructions = [
    'MOV -1 C',  # copia -1 al registro 'C'
    'INC C',     # incrementa el valor del registro 'C'
    'JMP C 1',   # salta a la instrucción en el índice 1 si 'C' es 0
    'MOV C A',   # copia el registro 'C' al registro 'A'
    'INC A'      # incrementa el valor del registro 'A'
]

instructions2 = [
    'MOV 0 A',
    'INC A'
]

instructions3 = [
    "MOV 5 B",
    "DEC B",
    "MOV B A",
    "INC A"
]

instructions4 = [
    "MOV 2 X",
    "DEC X",
    "DEC X",
    "JMP X 1",
    "MOV X A"
]

print(compile(instructions4))
