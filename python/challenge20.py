def fix_gift_list(received: list[str], expected: list[str]) -> dict[str, int]:
    missing_extra = {'missing': {}, 'extra': {}}
    expected_copy = expected.copy()
    for item in received:
        if item in expected_copy:
            expected_copy.remove(item)
        else:
            missing_extra['extra'][item] = missing_extra['extra'].get(item, 0) + 1
    
    for item in expected:
        if item in received:
            received.remove(item)
        else:
            missing_extra['missing'][item] = missing_extra['missing'].get(item, 0) + 1
    
    return missing_extra


recieved = ['puzzle', 'car', 'doll', 'car']
expected = ['car', 'puzzle', 'doll', 'ball']

print(fix_gift_list(recieved, expected))  # {'missing': {'ball': 1}, 'extra': {'car': 1}}

print(fix_gift_list(['train', 'book', 'kite'], ['train', 'kite', 'book', 'kite'])) # {'missing': {'kite':1}, 'extra': {}