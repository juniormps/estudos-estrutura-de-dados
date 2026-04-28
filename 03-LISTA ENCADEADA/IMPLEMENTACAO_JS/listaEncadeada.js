//Exemplo da Lista Encadeada

// Definindo um nó
class Node {
    constructor(value) {
        this.value = value; // Valor do nó
        this.next = null;   // Ponteiro para o próximo nó
    }
}

// Definindo a Lista Encadeada
class LinkedList {
    constructor() {
        this.head = null;  // O primeiro nó da lista
        this.size = 0;     // Tamanho da lista
    }

    // Adicionar um nó ao final da lista
    append(value) {
        const newNode = new Node(value);

        // Se a lista estiver vazia, o novo nó se torna o head
        if (!this.head) {
            this.head = newNode;
        } else {
            // Caso contrário, percorrer a lista até o final e adicionar o novo nó
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.size++;
    }

    // Inserir um nó no início da lista
    prepend(value) {
        const newNode = new Node(value);

        // Apontar o próximo do novo nó para o antigo head
        newNode.next = this.head;
        this.head = newNode;

        this.size++;
    }

    // Exibir os valores da lista
    print() {
        if (!this.head) {
            console.log('A lista está vazia');
            return;
        }

        let current = this.head;
        let listValues = '';

        while (current) {
            listValues += current.value + ' -> ';
            current = current.next;
        }

        console.log(listValues + 'null');
    }

    // Remover um nó com um valor específico
    remove(value) {
        if (!this.head) {
            return null;
        }

        // Se o nó a ser removido for o head
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        let previous = null;

        while (current && current.value !== value) {
            previous = current;
            current = current.next;
        }

        // Se o nó foi encontrado
        if (current) {
            previous.next = current.next;
            this.size--;
        }
    }

    // Buscar um valor na lista
    search(value) {
        let current = this.head;

        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }

        return false;
    }
}

// Usando a Lista Encadeada
const list = new LinkedList();
list.append(10);   // Lista: 10 -> null
list.append(20);   // Lista: 10 -> 20 -> null
list.prepend(5);   // Lista: 5 -> 10 -> 20 -> null
list.print();      // Exibe: 5 -> 10 -> 20 -> null

console.log(list.search(10));  // true
console.log(list.search(30));  // false

list.remove(10);  // Remove o nó com valor 10
list.print();     // Exibe: 5 -> 20 -> null
