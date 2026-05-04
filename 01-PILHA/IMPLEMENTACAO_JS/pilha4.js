// Implementação de uma pilha usando uma classe em JavaScript e campos privados.

class Pilha {
    #itens = []

    push(valor) {
        this.#itens.push(valor)
    }

    pop() {
        return this.#itens.pop()
    }

    peek() {
        return this.#itens[this.#itens.length - 1]
    }

    isEmpty() {
        return this.#itens.length === 0
    }
}