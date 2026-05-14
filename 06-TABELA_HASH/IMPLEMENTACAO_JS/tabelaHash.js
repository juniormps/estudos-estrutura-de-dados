//Implementação em JavaScript de um exemplo de estrutura de dados Tabela Hash com tratamento de colisões

class HashTable {
  constructor(tamanho = 10) {
    this.tabela = new Array(tamanho).fill(null)
    this.tamanho = tamanho
  }

  hash(chave) {
    return chave % this.tamanho
  }

  inserir(chave, valor) {
    let indice = this.hash(chave)

    while (this.tabela[indice] !== null) {
      indice = (indice + 1) % this.tamanho
    }

    this.tabela[indice] = { chave, valor }
  }
}