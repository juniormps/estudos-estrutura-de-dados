//Exemplo de implementação de uma tabela hash com tratamento de colisões

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size); // Cria o array para armazenar os valores
    }

    // Função hash para gerar um índice com base na chave
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31; // Número primo ajuda a distribuir os hashes
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96; // Converte cada caractere em número
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    // Método para inserir pares chave-valor
    set(key, value) {
        const index = this._hash(key); // Gera o índice usando a função hash
        if (!this.keyMap[index]) {
            this.keyMap[index] = []; // Se não houver colisão, cria um novo array para aquele índice
        }
        // Armazena o par chave-valor no array (trata colisão armazenando no mesmo índice)
        this.keyMap[index].push([key, value]);
    }

    // Método para buscar um valor pela chave
    get(key) {
        const index = this._hash(key); // Calcula o índice hash da chave
        if (this.keyMap[index]) {
            // Verifica se existe alguma entrada com a mesma chave
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]; // Retorna o valor se a chave for encontrada
                }
            }
        }
        return undefined; // Retorna undefined se a chave não for encontrada
    }

    // Método para remover uma chave-valor
    remove(key) {
        const index = this._hash(key); // Calcula o índice da chave
        if (this.keyMap[index]) {
            this.keyMap[index] = this.keyMap[index].filter(pair => pair[0] !== key);
        }
    }

    // Método para visualizar todas as chaves na tabela
    keys() {
        let keysArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    keysArray.push(this.keyMap[i][j][0]);
                }
            }
        }
        return keysArray;
    }

    // Método para visualizar todos os valores na tabela
    values() {
        let valuesArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    valuesArray.push(this.keyMap[i][j][1]);
                }
            }
        }
        return valuesArray;
    }
}

// Exemplo de uso
let ht = new HashTable();

ht.set("pink", "#FFC0CB");
ht.set("blue", "#0000FF");
ht.set("green", "#008000");
ht.set("yellow", "#FFFF00");

// Lidando com colisões (chaves diferentes geram o mesmo índice)
ht.set("cyan", "#00FFFF");
ht.set("lime", "#00FF00");

console.log(ht.get("pink"));   // #FFC0CB
console.log(ht.get("yellow")); // #FFFF00
console.log(ht.get("cyan"));   // #00FFFF

console.log(ht.keys());        // ['pink', 'blue', 'green', 'yellow', 'cyan', 'lime']
console.log(ht.values());      // ['#FFC0CB', '#0000FF', '#008000', '#FFFF00', '#00FFFF', '#00FF00']
