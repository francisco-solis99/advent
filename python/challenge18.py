import re
def find_in_agenda(agenda: str, phone: str) -> dict | None:
    phones = re.findall(r"\+\d{1,2}-\d{3}-\d{3}-\d{3}", agenda)
    names = re.findall(r"<([A-Za-z\s]+)>",agenda)

    # Eliminar los teléfonos y los nombres del texto original
    text_without_phones_and_names = re.sub(r"\+\d{1,2}-\d{3}-\d{3}-\d{3,4}", "", agenda)
    text_without_phones_and_names = re.sub(r"<([A-Za-z\s]+)>", "", text_without_phones_and_names)

    text_without_phones_and_names = text_without_phones_and_names.strip()

    addresses = [line for line in text_without_phones_and_names.splitlines()]
    addresses = [line.strip() for line in addresses]

    dict = {}
    count = 0
    for i, val in enumerate(phones):
        if phone in val and count<1:
            dict.setdefault('name',names[i])
            dict.setdefault('address', addresses[i])
            count+=1
        elif phone in val and count == 1:
            return None
    return dict if len(dict) > 0 else None



agenda1 = '''+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York'''
phone1 = '34-600-123-456'
print(find_in_agenda(agenda1,phone1))