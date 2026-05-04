// Implementação de uma estrutura de dados do tipo pilha, de uma maneira ainda mais simples/resumida, utilizando apenas um array e os métodos nativos do JavaScript.

const pilha = []

// Inserir no topo
pilha.push(10)
pilha.push(20)
pilha.push(30)

console.log(pilha)

// Remover do topo
const removido = pilha.pop()

console.log(removido)
console.log(pilha)

// Ver topo
console.log(pilha[pilha.length - 1])

// Verificar vazia
console.log(pilha.length === 0)