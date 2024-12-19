def decode_filename(filename: str) -> str:

    name = filename.split('_', 1)[-1]

    name = name[::-1].split('.', 1)[-1][::-1]

    return name

archivo = '2023122512345678_sleighDesign.png.grin_chwa'
archivo2 = "42_chimney_dimensions.pdf.hack2023"
archivo3 = "987654321_elf-roster.csv.tempfile"
archivo4 = "2024120912345678_magic_wand-blueprint.jpg.grinchbackup"
archivo5 = "51231_trainSchedule.txt.extra"

print(decode_filename(archivo4))