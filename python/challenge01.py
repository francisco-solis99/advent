def prepare_gifts(gifts):
    gifts = sorted(list(set(gifts)))
    return gifts


gifts = [3, 1, 2, 3, 4, 2, 5]
preparegifts1 = prepare_gifts(gifts)

print(preparegifts1)