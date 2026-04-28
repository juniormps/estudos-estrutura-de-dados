//Exemplo de implementação de uma Árvore Binária de Busca

class TreeNode {
    constructor(value) {
        this.value = value;  // Valor do nó
        this.left = null;    // Filho à esquerda
        this.right = null;   // Filho à direita
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;  // Raiz da árvore
    }

    // Método para inserir um novo valor
    insert(value) {
        const newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;  // Se a árvore estiver vazia, o novo nó se torna a raiz
        } else {
            this.insertNode(this.root, newNode);  // Caso contrário, insira o nó
        }
    }

    // Método auxiliar para inserir um nó na árvore
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            // Se o valor do novo nó for menor, vai para a esquerda
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            // Se o valor do novo nó for maior ou igual, vai para a direita
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Método para buscar um valor na árvore
    search(value) {
        return this.searchNode(this.root, value);
    }

    // Método auxiliar para buscar um valor na árvore
    searchNode(node, value) {
        if (node === null) {
            return false;  // Valor não encontrado
        }

        if (value === node.value) {
            return true;  // Valor encontrado
        }

        // Se o valor é menor, busca na subárvore à esquerda
        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else {
            // Se o valor é maior, busca na subárvore à direita
            return this.searchNode(node.right, value);
        }
    }

    // Método para percorrer a árvore em ordem (in-order)
    inOrderTraversal(node) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}


const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);

// Busca por um valor
console.log(bst.search(7));  // true
console.log(bst.search(20)); // false

// Percorrendo a árvore em ordem
console.log("Percurso em ordem:");
bst.inOrderTraversal(bst.root);  // Saída: 3, 5, 7, 10, 12, 15, 18
