//Implementação de uma Fila Dinâmica

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
