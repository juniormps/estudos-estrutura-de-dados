//Implementação de um exemplo didático de uma estrutura de dados do tipo "Árvore Binária de Busca" em JavaScript.

class Aluno {
  constructor(ra, nome) {
    this.ra = ra
    this.nome = nome
  }
}

class No {
  constructor(aluno) {
    this.aluno = aluno
    this.esquerda = null
    this.direita = null
  }
}

class ArvoreBinariaBusca {
  constructor() {
    this.raiz = null
  }

  inserir(aluno) {
    const novoNo = new No(aluno)

    if (this.raiz === null) {
      this.raiz = novoNo
      return
    }

    let atual = this.raiz

    while (true) {
      if (aluno.ra < atual.aluno.ra) {
        if (atual.esquerda === null) {
          atual.esquerda = novoNo
          return
        }

        atual = atual.esquerda
      } else {
        if (atual.direita === null) {
          atual.direita = novoNo
          return
        }

        atual = atual.direita
      }
    }
  }

  buscar(ra) {
    let atual = this.raiz

    while (atual !== null) {
      if (ra < atual.aluno.ra) {
        atual = atual.esquerda
      } else if (ra > atual.aluno.ra) {
        atual = atual.direita
      } else {
        return atual.aluno
      }
    }

    return null
  }

  emOrdem(no = this.raiz) {
    if (no !== null) {
      this.emOrdem(no.esquerda)

      console.log(
        `${no.aluno.nome}: ${no.aluno.ra}`
      )

      this.emOrdem(no.direita)
    }
  }

  preOrdem(no = this.raiz) {
    if (no !== null) {
      console.log(
        `${no.aluno.nome}: ${no.aluno.ra}`
      )

      this.preOrdem(no.esquerda)
      this.preOrdem(no.direita)
    }
  }

  posOrdem(no = this.raiz) {
    if (no !== null) {
      this.posOrdem(no.esquerda)
      this.posOrdem(no.direita)

      console.log(
        `${no.aluno.nome}: ${no.aluno.ra}`
      )
    }
  }
}