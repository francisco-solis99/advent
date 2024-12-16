def draw_race(indices, length):
    race_text = []
    for i,j in enumerate(indices):
        if j == -1:
            race_text.append('~'*length)
            race_text[i] = race_text[i][:j] + 'r'
            race_text[i] = ' '*((len(indices)-1)-i) + race_text[i]
        elif j != 0:
            race_text.append('~'*length)
            race_text[i] = race_text[i][:j] + 'r' + race_text[i][j + 1:]
            race_text[i] = ' '*((len(indices)-1)-i) + race_text[i]
        else:
            race_text.append('~'*length)
            race_text[i] = ' '*((len(indices)-1)-i) + race_text[i]
        
        race_text[i] += f" /{i+1}"

    return '\n'.join(race_text)


race = [2, -1, 0, 5]
lens = 10

print(draw_race(race,lens))



