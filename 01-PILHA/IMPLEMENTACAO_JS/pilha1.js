//Implementando uma Pilha Dinâmica

class Pilha {
  constructor() {
    this.itens = [];
  }

  // Adiciona um elemento no topo da pilha
  push(elemento) {
    this.itens.push(elemento);
  }

  // Remove e retorna o elemento do topo da pilha
  pop() {
    if (this.isEmpty()) {
      return "A pilha está vazia";
    }
    return this.itens.pop();
  }

  // Retorna o elemento no topo sem removê-lo
  peek() {
    if (this.isEmpty()) {
      return "A pilha está vazia";
    }
    return this.itens[this.itens.length - 1];
  }

  // Verifica se a pilha está vazia
  isEmpty() {
    return this.itens.length === 0;
  }

  // Retorna o tamanho da pilha
  tamanho() {
    return this.itens.length;
  }

  // Limpa a pilha
  limpar() {
    this.itens = [];
  }
}

// Testando a pilha
const pilha = new Pilha();
pilha.push(10);  // Adiciona 10
pilha.push(20);  // Adiciona 20
console.log(pilha.peek());  // Retorna 20
pilha.pop();  // Remove o 20
console.log(pilha.tamanho());  // Retorna 1
