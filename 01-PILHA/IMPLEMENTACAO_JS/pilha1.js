// Exemplo de implementação de uma estrutura de dados do tipo pilha, sem utilizar os métodos nativos do JavaScript, como push e pop. Esta é uma implementação de uma pilha estática, onde o tamanho máximo é definido no momento da criação da pilha.

class Pilha {
    constructor(tamanhoMaximo = 5) {
        this.itens = new Array(tamanhoMaximo)
        this.topo = 0
        this.tamanhoMaximo = tamanhoMaximo
    }

    isEmpty() {
        return this.topo === 0
    }

    isFull() {
        return this.topo === this.tamanhoMaximo
    }

    push(elemento) {
        if (this.isFull()) {
            console.log("Pilha cheia")
            return
        }

        this.itens[this.topo] = elemento
        this.topo++
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Pilha vazia")
            return null
        }

        this.topo--
        return this.itens[this.topo]
    }

    print() {
        console.log(this.itens.slice(0, this.topo))
    }
}