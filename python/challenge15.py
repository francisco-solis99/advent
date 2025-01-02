def draw_table(data):
    columns = list(data[0].keys())
    
    header = [col.capitalize() for col in columns]
    
    # Calcular el ancho máximo para cada columna
    column_widths = []
    for col in columns:
        # Obtener todos los valores de la columna (incluyendo la cabecera)
        valores_columna = [str(row[col]) for row in data] + [header[columns.index(col)]]

        column_widths.append(len(max(valores_columna, key=len)))
    
    separator = "+".join("-" * (width + 2) for width in column_widths)
    separator = f"+{separator}+"
    

    header_row = "|".join(f" {header[i].ljust(column_widths[i])} " for i in range(len(header)))
    header_row = f"|{header_row}|"
    
    rows = []
    for row in data:
        row_text = "|".join(f" {str(row[col]).ljust(column_widths[i])} " for i, col in enumerate(columns))
        rows.append(f"|{row_text}|")
    
    # Combinar la tabla
    table = [separator, header_row, separator] + rows + [separator]
    return "\n".join(table)


datos = [
    { 'name': 'Alice', 'city': 'London' },
    { 'name': 'Bob', 'city': 'Paris' },
    { 'name': 'Charlie', 'city': 'New York' }
]

datos2 = [
    { "gift": 'Doll', "quantity": 10 },
    { "gift": 'Book', "quantity": 5 },
    { "gift": 'Music', "quantity": 1 }
]

print(draw_table(datos))
print(draw_table(datos2))