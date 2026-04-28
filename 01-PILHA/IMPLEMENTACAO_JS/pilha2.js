//Implementando uma Pilha Estática

class Pilha {
    constructor(tamanhoMaximo = 5) {
        this.itens = []
        this.tamanhoMaximo = tamanhoMaximo
    }

    // Adiciona um elemento no topo da pilha
    push(elemento) {
        if (this.isFull()) {
            return console.log("A pilha está cheia")
        }
        return this.itens.push(elemento)
    }

    // Remove e retorna o elemento do topo da pilha
    pop() {
        if (this.isEmpty()) {
            return "A pilha está vazia"
        }
        return this.itens.pop()
    }

    // Retorna o elemento no topo sem removê-lo
    peek() {
        if (this.isEmpty()) {
            return "A pilha está vazia"
        }
        return this.itens[this.itens.length - 1]
    }

    // Verifica se a pilha está vazia
    isEmpty() {
        return this.itens.length === 0
    }

    // Verifica se a pilha está cheia
    isFull() {
        return this.itens.length >= this.tamanhoMaximo
    }

    // Retorna o tamanho da pilha
    tamanho() {
        return this.itens.length
    }

    // Limpa a pilha
    limpar() {
        this.itens = []
    }
}

// Testando a pilha
const pilha = new Pilha()
pilha.push(10)  // Adiciona 10
pilha.push(20)  // Adiciona 20
pilha.push(30)
pilha.push(40)
pilha.push(50)
console.log(pilha)
pilha.push(60)
console.log(pilha)
pilha.push(70)
console.log(pilha)
console.log(pilha.peek()) 
pilha.pop()
console.log(pilha)
console.log(pilha.tamanho())
pilha.push(60)
console.log(pilha)
