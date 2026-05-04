/* Implementação de uma estrutura de dados do tipo "Fila Dinâmica", sem a utilização de uma lista encadeada.

Este exemplo de implementação não é conceitualmente uma fila dinâmica, pois utiliza um array para armazenar os elementos e não uma lista encadeada. Porém, ela funciona como uma pilha dinâmica em javascript. 

Entretanto, aqui, Embora seja uma implementação mais simples, deve-se levar em conta que a complexidade do operador "dequeue" (desenfileirar um elemento) é da ordem de O(n), enquanto em uma implementação com lista encadeada é da ordem de O(1). 

Desta forma, a implementação com array é mais simples de entender e implementar, mas pode ser menos eficiente em termos de desempenho para operações frequentes. */

class Fila {
  constructor() {
    this.itens = []
  }

  // Adiciona um elemento no final da fila  (ENFILEIRAR)
  enqueue(elemento) {
    this.itens.push(elemento)
  }

  // Remove o elemento do início da fila (DESENFILEIRAR)
  dequeue() {
    if (this.isEmpty()) {
      return "A fila está vazia"
    }
    return this.itens.shift()
  }

  // Retorna o elemento no início da fila sem removê-lo
  front() {
    if (this.isEmpty()) {
      return "A fila está vazia"
    }
    return this.itens[0]
  }

  // Verifica se a fila está vazia
  isEmpty() {
    return this.itens.length === 0
  }

  // Retorna o tamanho da fila
  tamanho() {
    return this.itens.length
  }

  // Limpa a fila
  limpar() {
    this.itens = []
  }
}

// Testando a fila
const fila = new Fila()
fila.enqueue(10)
fila.enqueue(20)
fila.enqueue(30)
console.log(fila)
console.log(fila.front())
fila.dequeue()
console.log(fila)
console.log(fila.tamanho())
fila.enqueue(40)
console.log(fila)
console.log(fila.tamanho())
