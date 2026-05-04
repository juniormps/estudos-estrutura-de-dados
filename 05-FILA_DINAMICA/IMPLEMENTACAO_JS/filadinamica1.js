/* Implementação de uma estrutura de dados do tipo "Fila Dinâmica", utilizando uma lista encadeada. 

Na implementação, a classe "No" representa um nó da lista, contendo um valor e uma referência para o próximo nó. A classe "FilaDinamica" possui métodos para verificar se a fila está vazia, adicionar um elemento (enqueue), remover o elemento do início (dequeue) e imprimir os elementos da fila. */

class No {
  constructor(valor) {
    this.valor = valor
    this.proximo = null
  }
}

class FilaDinamica {
  constructor() {
    this.primeiro = null
    this.ultimo = null
  }

  isEmpty() {
    return this.primeiro === null
  }

  enqueue(valor) {
    const novoNo = new No(valor)

    if (this.isEmpty()) {
      this.primeiro = novoNo
      this.ultimo = novoNo
    } else {
      this.ultimo.proximo = novoNo
      this.ultimo = novoNo
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Fila vazia")
      return null
    }

    const valor = this.primeiro.valor
    this.primeiro = this.primeiro.proximo

    if (this.primeiro === null) {
      this.ultimo = null
    }

    return valor
  }

  print() {
    let atual = this.primeiro
    let resultado = []

    while (atual !== null) {
      resultado.push(atual.valor)
      atual = atual.proximo
    }

    console.log(resultado)
  }
}