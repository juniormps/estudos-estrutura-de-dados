//Implementação de uma Fila Estática

class Fila {
    constructor(tamanhoMaximo = 5) {
        this.itens = []
        this.tamanhoMaximo = tamanhoMaximo
    }

    // Adiciona um elemento no final da fila  (ENFILEIRAR)
    enqueue(elemento) {
        if (this.isFull()) {
            console.log("A fila está cheia")
        }
        return this.itens.push(elemento)

    }

    // Remove o elemento do início da fila (DESENFILEIRAR)
    dequeue() {
        if (this.isEmpty()) {
            console.log("A fila está vazia")
        }
        return this.itens.shift()
    }

    // Retorna o elemento no início da fila sem removê-lo
    front() {
        if (this.isEmpty()) {
            return "A fila está vazia"
        }
        return this.itens[0];
    }

    // Verifica se a fila está vazia
    isEmpty() {
        return this.itens.length === 0
    }

    //Verifica se a fila está cheia
    isFull() {
        return this.itens.length >= this.tamanhoMaximo
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
fila.enqueue(40)
fila.enqueue(50)
console.log(fila)
console.log(fila.front())
fila.dequeue()
console.log(fila)
console.log(fila.tamanho())
fila.enqueue(60)
console.log(fila)
console.log(fila.tamanho())
console.log(fila)
fila.enqueue(70)
console.log(fila)
fila.limpar()
console.log(fila)
fila.dequeue()
