def execute(code: str) -> str:
    counter = 0
    aux = 0
    while aux < len(code):
        #print(code[aux])
        if code[aux] == '+':
            counter += 1
        elif code[aux] == '-':
            counter -= 1
        elif code[aux] == '[':
            counter = 0
            while code[aux] != ']':
                aux += 1
        elif code[aux] == '{':
            if counter == 0:
                while code[aux] != '}':
                    aux += 1
        #print(aux)
        aux += 1
    return counter

print(execute('>+++[-]')) #0
print(execute('+--')) #-1
print(execute('+{+}')) #2
print(execute('-[++{-}]+{++++}')) #5