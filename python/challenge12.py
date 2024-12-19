def calculate_price(ornaments: str) -> int:
    ornaments_dict = {
        '*':1,
        'o':5,
        '^':10,
        '#':50,
        '@':100
    }
    values = []
    for i, j in enumerate(ornaments):
        if j not in ornaments_dict:
            return 'undefined'
        if i > 0:
            if ornaments_dict[j] > ornaments_dict[ornaments[i-1]]:
                values.append(ornaments_dict[ornaments[i-1]]*-1)
            else:
                values.append(ornaments_dict[ornaments[i-1]])
    values.append(ornaments_dict[ornaments[-1]])
    #print(values)
    return sum(values)

print(calculate_price('***'))
print(calculate_price('*o'))
print(calculate_price('*o*'))
print(calculate_price('*o@'))