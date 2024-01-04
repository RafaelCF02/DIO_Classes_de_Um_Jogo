'''# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada'''

while True: 
    
    nome = str(input("Digite o nome do seu Heroi: "))
    idade = int(input("Digite a idade do seu Heroi: "))
    
    while True:
        tipo = input("Escolha o tipo do se Heroi [Mago, Guerreiro, Monge, Ninja]: ")

        if tipo.lower() in ["mago", "guerreiro", "monge", "ninja"]:
            print(f"Heroi criado com sucesso")
            print(f"Seu Heroi se chama {nome}, tem {idade} anos e é do tipo {tipo}")
            break
        else:
            print("Tipo inválido escolha novamente")

    class Heroi:
        def __init__(self,nome,idade,tipo):
            self.nome = nome
            self.idade = idade
            self.tipo = tipo
            self.ataque = ""

        def Atacar(self):
            if self.tipo.lower == "mago":
                self.ataque = "Magia"
            elif self.tipo.lower == "guerreiro":
                self.ataque = "Espada"
            elif self.tipo.lower == "monge":
                self.ataque = "Arte Marciais"
            elif self.tipo.lower == "ninja":
                self.ataque = "Shuriken"

        def Escrever(self):
            print("-=-=-=-=-=-=-=-=-=-=-=-=-=")
            print(f"O {self.tipo} Atacou usando {self.ataque}")
            print("-=-=-=-=-=-=-=-=-=-=-=-=-=")

    heroi = Heroi(nome,idade,tipo)
    heroi.Atacar()
    heroi.Escrever()

    Criar = str(input("Deseja criar um novo Heroi? [s/n]: ")).lower()

    if Criar[0] == "n":
        break