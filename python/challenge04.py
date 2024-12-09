def create_xmas_tree(height, ornament):
    aux = 1
    nmax = (height*2)-1
    results = []

    
    while aux <= nmax:
        result = (ornament*aux).center(nmax,"_")
        results.append(result)
        aux+=2
    
    trunk = "#".center(nmax,"_")
    results += [trunk]*2

    style = '\n'.join(results)
    return style


print(create_xmas_tree(7,"+"))