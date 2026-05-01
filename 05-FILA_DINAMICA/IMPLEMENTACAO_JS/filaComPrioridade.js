//Implementando uma fila com prioridade

class Elemento {
    constructor(valor, prioridade) {
        this.valor = valor;
        this.prioridade = prioridade;
    }
}

class FilaComPrioridade {
    constructor() {
        this.itens = [];
    }

    // Adiciona um elemento na fila com sua prioridade
    enqueue(valor, prioridade) {
        const novoElemento = new Elemento(valor, prioridade);

        if (this.isEmpty()) {
            this.itens.push(novoElemento);  // Se a fila estiver vazia, adiciona diretamente
        } else {
            let adicionado = false;
            // Inserção baseada na prioridade
            for (let i = 0; i < this.itens.length; i++) {
                if (novoElemento.prioridade < this.itens[i].prioridade) {
                    this.itens.splice(i, 0, novoElemento);  // Insere o elemento na posição correta
                    adicionado = true;
                    break;
                }
            }
            if (!adicionado) {
                this.itens.push(novoElemento);  // Se tiver a menor prioridade, insere no final
            }
        }
    }

    // Remove e retorna o elemento com maior prioridade (o primeiro da fila)
    dequeue() {
        if (this.isEmpty()) {
            return "A fila está vazia";
        }
        return this.itens.shift();  // Remove o primeiro elemento, que tem a maior prioridade
    }

    // Retorna o primeiro elemento (de maior prioridade) sem removê-lo
    front() {
        if (this.isEmpty()) {
            return "A fila está vazia";
        }
        return this.itens[0];
    }

    // Verifica se a fila está vazia
    isEmpty() {
        return this.itens.length === 0;
    }

    // Retorna o tamanho da fila
    tamanho() {
        return this.itens.length;
    }

    // Limpa a fila
    limpar() {
        this.itens = [];
    }
}

// Testando a fila de prioridade
const fila = new FilaComPrioridade();
fila.enqueue("Tarefa 1", 2);  // Prioridade 2
fila.enqueue("Tarefa 2", 1);  // Prioridade 1 (maior)
fila.enqueue("Tarefa 3", 3);  // Prioridade 3
console.log(fila.front());  // Retorna Tarefa 2 (maior prioridade)
fila.dequeue();  // Remove Tarefa 2
console.log(fila.front());  // Retorna Tarefa 1 (próxima maior prioridade)
