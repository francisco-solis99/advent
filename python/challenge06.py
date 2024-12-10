import re

def in_box(box):
    expression = r"\#\s*\*\s*\#"
    for i in box[1:-1]:
        finding = re.search(expression, i)
        if finding:
            return True
    return False


box1 = [
    "###",
    "#*#",
    "###"
]

box2 = [
    "####",
    "#* #",
    "#  #",
    "####"
]

box3 = [
    "#####",
    "#   #",
    "#  #*",
    "#####"
]

print(in_box(box1))
