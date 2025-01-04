def distribute_weight(weight: int) -> str:
    box_representations = {
        1: [" _ ", "|_|"] ,
        2: [" ___ ", "|___|"],
        5: [" _____ ", "|     |", "|_____|"],
        10: [" _________ ", "|         |", "|_________|"]
    }

    boxes = {}

    for i in [10, 5, 2, 1]:
        boxes[i] = weight // i
        weight = weight % i

    result = []
    prev = False

    for i in [1, 2, 5, 10]:
        if boxes[i] > 0:
            if prev:
                pad = len(box_representations[i][0]) - 1
                border = result.pop().ljust(pad, '_')
                result.append(border)
                result.extend(box_representations[i][1:])
            else:
                prev = True
                result.extend(box_representations[i])
            for _ in range(1, boxes[i]):
                result.extend(box_representations[i][1:])

    return '\n'.join(result)



print(distribute_weight(3))
print(distribute_weight(5))
print(distribute_weight(10))
print(distribute_weight(12))