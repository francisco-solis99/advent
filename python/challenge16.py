def remove_snow(s):
    nueva_cadena = []
    i = 0

    while i < len(s):
        if i < len(s) - 1 and s[i] == s[i + 1]:
            i += 2
        else:
            nueva_cadena.append(s[i])
            i += 1

    nueva_cadena = ''.join(nueva_cadena)
    # caso base una cadena igual indica que no hay cambios
    if nueva_cadena == s:
        return nueva_cadena
    # Si hubo cambios, llamamos recursivamente a la función
    return remove_snow(nueva_cadena)

word = 'zxxzoz'
resultado = remove_snow(word)
print(resultado)
