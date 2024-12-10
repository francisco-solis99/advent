#AdventJS has a bug and doesn´t work the text.center() method. This is a new version without that method!
def create_xmas_tree(height, ornament):
    aux = 1
    nmax = (height*2)-1
    results = []
    
    while aux <= nmax:
        fill = nmax - len(aux*ornament)
        fill_left = fill//2
        fill_right = fill - fill_left
        result = "_" * fill_left + aux*ornament + "_" * fill_right
        results.append(result)
        aux+=2
    
    fill_trunk = nmax-1
    fill_ltrunk = fill_trunk//2
    fill_rtrunk = fill_trunk-fill_ltrunk
    trunk = "_" * fill_ltrunk + "#" + "_" * fill_rtrunk
    results += [trunk]*2

    style = '\n'.join(results)
    return style


print(create_xmas_tree(5,"%"))