notas = []
soma = 0
x = 0
entrada = ''

while True:
    entrada = input("digite a nota ou x para calcular a média: ")
    if entrada == 'x':
        break
    else:
        notas.append(int(entrada))
        x += 1

x = 0

while x < len(notas):
    soma += notas[x]
    x += 1

print(f"média {soma/x}")
