def tree_height(tree):
    if tree is None:
        return 0
    left_height = tree_height(tree['left'])
    right_height = tree_height(tree['right'])
    return max(left_height, right_height) + 1

tree = {
    'value': '🎁',
    'left': {
        'value': '🎄',
        'left': {
        'value': '⭐',
        'left': None,
        'right': None
        },
        'right': {
        'value': '🎅',
        'left': None,
        'right': None
        }
    },
    'right': {
        'value': '❄️',
        'left': None,
        'right': {
        'value': '🦌',
        'left': None,
        'right': None
        }
    }
}

print(tree_height(tree))  # 3