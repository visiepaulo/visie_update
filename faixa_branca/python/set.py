# Criando um conjunto vazio
palavras = set()

# Adicionando elementos ao conjunto
palavras.add("casa")
palavras.add("carro")
palavras.add("árvore")
palavras.add("árvore") # este elemento será ignorado, pois já existe no conjunto

# Verificando se um elemento está no conjunto
if "carro" in palavras:
    print("carro está presente no conjunto")
else:
    print("carro não está presente no conjunto")

# Removendo um elemento do conjunto
palavras.remove("casa")

# Criando um conjunto a partir de uma lista
outras_palavras = set(["gato", "cachorro", "pássaro", "pássaro"])

# Operações matemáticas
uniao = palavras.union(outras_palavras)
print(uniao) # {"árvore", "carro", "gato", "cachorro", "pássaro"}

intersecao = palavras.intersection(outras_palavras)
print(intersecao) # set()

diferenca = palavras.difference(outras_palavras)
print(diferenca) # {"árvore", "carro"}