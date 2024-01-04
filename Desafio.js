/*# 3️⃣ Escrevendo as classes de um Jogo

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
  guerreiro atacou usando espada*/

  const input = require('readline-sync');

do{
  let nome, idade, tipo;
  
  
      nome = input.question("Qual e o nome do seu Heroi? ")
      idade = input.question("Qual a idade do seu Heroi? ")
      do {
      tipo = input.question("Escolha o tipo do seu Heroi [Mago, Guerreiro, Monge, Ninja]: ")
  
      switch (tipo.toLowerCase()) {
          case "mago":
          case "guerreiro":
          case "monge":
          case "ninja":
              console.log(`Parabéns ${nome}, você escolheu a classe ${tipo}`)
              break;
          default:
              console.log("O tipo escolhido não existe. Por favor, escolha novamente.")
      }
  } while (!["mago", "guerreiro", "monge", "ninja"].includes(tipo.toLowerCase()))

  class Heroi {
      constructor(nome, idade, tipo) {
          this.nome = nome
          this.idade = idade
          this.tipo = tipo
          this.ataque = ''
      }
  
      atacar() {
          switch (this.tipo.toLowerCase()) {
              case "mago":
                  this.ataque = "Magia"
                  break
              case "guerreiro":
                  this.ataque = "Espada"
                  break
              case "monge":
                  this.ataque = "Artes Marciais"
                  break
              case "ninja":
                  this.ataque = "Shuriken"
                  break
          }
      }
  
      escrever() {
          console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
          console.log(`O ${this.tipo}, atacou usando ${this.ataque}`)
          console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
      }
  }
  
  const heroi = new Heroi(nome, idade, tipo)
  heroi.atacar()
  heroi.escrever()

  let criar = input.question("Deseja criar outro Heroi? [s/n]: ")

  if(criar.toLowerCase() == "n"){
    break 
}

}while(true)


    


