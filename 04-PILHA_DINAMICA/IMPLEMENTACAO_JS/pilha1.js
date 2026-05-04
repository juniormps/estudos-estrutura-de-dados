/* Implementação de uma estrutura de dados do tipo "Pilha Dinâmica", utilizando uma lista encadeada. 

Na implementação, a classe "No" representa um nó da lista, contendo um valor e uma referência para o próximo nó. A classe "PilhaDinamica" possui métodos para verificar se a pilha está vazia, adicionar um elemento (push), remover o elemento do topo (pop) e imprimir os elementos da pilha. */

class No {
    constructor(valor) {
        this.valor = valor
        this.proximo = null
    }
}

class PilhaDinamica {
    constructor() {
        this.topo = null
    }

    isEmpty() {
        return this.topo === null
    }

    push(valor) {
        const novoNo = new No(valor)

        novoNo.proximo = this.topo
        this.topo = novoNo
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Pilha vazia")
            return null
        }

        const valorRemovido = this.topo.valor

        this.topo = this.topo.proximo

        return valorRemovido
    }

    print() {
        let atual = this.topo
        let resultado = []

        while (atual !== null) {
            resultado.push(atual.valor)
            atual = atual.proximo
        }

        console.log(resultado)
    }
}