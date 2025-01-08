def is_trees_synchronized(tree1, tree2):
    def are_mirrors(node1, node2):
        # Ambos nodos son None, son espejos
        if not node1 and not node2:
            return True
        # Uno de los nodos es None, no son espejos
        if not node1 or not node2:
            return False
        # Verificar valor y si los subárboles son espejos
        return (
            node1['value'] == node2['value'] and
            are_mirrors(node1.get('left'), node2.get('right')) and
            are_mirrors(node1.get('right'), node2.get('left'))
        )

    synchronized = are_mirrors(tree1, tree2)
    return [synchronized, tree1['value']]



ree1 = {
    'value': '🎄',
    'left': { 'value': '⭐' },
    'right': { 'value': '🎅' }
}

ree2 = {
    'value': '🎄',
    'left': { 'value': '🎅' },
    'right': { 'value': '⭐' }
}

print(is_trees_synchronized(ree1, ree2)) #[True, '🎄']