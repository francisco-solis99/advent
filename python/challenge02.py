def createFrame(names):
    nombre_max = max(names, key=len)
    line = '*' * (len(nombre_max)+4)
    elements = [line]
    for nombre in names:
        nombre_spaces = nombre.ljust(len(nombre) + (len(nombre_max)-len(nombre)))
        nombre_spaces = f"* {nombre_spaces} *"
        elements.append(nombre_spaces)
    elements.append(line)

    style = '\n'.join(elements)
    return style

print(createFrame(['midu', 'madeval', 'educalvolpz']))

print(type(createFrame(['midu', 'madeval', 'educalvolpz'])))