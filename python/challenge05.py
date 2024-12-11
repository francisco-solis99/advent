def organizeShoes(shoes):
    dictpairs = {}
    pairs = []
    for shoe in shoes:
        side = shoe['type']
        size = shoe['size']
        dictpairs.setdefault(size,[]).append(side)
        if len(dictpairs[size]) == 2:
            if dictpairs[size][0] != dictpairs[size][1]:
                pairs.append(list(dictpairs.keys())[0])
                dictpairs={}
            else:
                dictpairs[size].pop()
    return pairs


shoes = [
    { "type": 'I', "size": 38 },
    { "type": 'R', "size": 38 },
    { "type": 'R', "size": 42 },
    { "type": 'I', "size": 41 },
    { "type": 'I', "size": 42 }
]

shoes2 = [
    { "type": 'I', "size": 38 },
    { "type": 'R', "size": 38 },
    { "type": 'I', "size": 38 },
    { "type": 'I', "size": 38 },
    { "type": 'R', "size": 38 }
]


print(organizeShoes(shoes2))




