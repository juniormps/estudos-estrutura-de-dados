// Implementação de uma estrutura de dados do tipo fila em JavaScript, utilizando o conceito de fila circular para otimizar o uso do array.

class Fila {
    constructor(tamanhoMaximo = 5) {
        this.itens = new Array(tamanhoMaximo)
        this.tamanhoMaximo = tamanhoMaximo
        this.primeiro = 0
        this.ultimo = 0
    }

    isEmpty() {
        return this.primeiro === this.ultimo
    }

    isFull() {
        return (this.ultimo - this.primeiro) === this.tamanhoMaximo
    }

    enqueue(elemento) {
        if (this.isFull()) {
            console.log("Fila cheia")
            return
        }

        this.itens[this.ultimo % this.tamanhoMaximo] = elemento
        this.ultimo++
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Fila vazia")
            return null
        }

        const item = this.itens[this.primeiro % this.tamanhoMaximo]
        this.primeiro++

        return item
    }

    print() {
        let resultado = []

        for (let i = this.primeiro; i < this.ultimo; i++) {
            resultado.push(
                this.itens[i % this.tamanhoMaximo]
            )
        }

        console.log(resultado)
    }
}