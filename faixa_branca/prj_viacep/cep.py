import requests

def buscaCep(cep):
    response = requests.get(f'https://viacep.com.br/ws/{entrada}/json/')
    return response.json()

entrada = input('digite o CEP que deseja consultar (somente números): ')

if(len(entrada) != 8): 
    while(len(entrada) != 8):
        entrada = input('CEP invalido, por favor digite novamente: ')

print(buscaCep(entrada))