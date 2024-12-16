def fix_packages(packages):
    stack = []
    for char in packages:
        if char == ')':
            temp = []
            while stack and stack[-1] != '(':
                temp.append(stack.pop())  # Extraer hasta encontrar '('
            stack.pop()  
            
            stack.extend(temp)
        else:
            stack.append(char)
    
    return ''.join(stack)


text = 'a(bc(def)g)h'
print(fix_packages('a(bc(def)g)h'))