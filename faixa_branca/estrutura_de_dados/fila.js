function fila() {
    elementos = [];

    this.adiciona = (elemento) => {
        elementos.push(elemento);
    };

    this.remove = () => {
        if (elementos.length > 0) {
            return elementos.shift();
        } else {
            console.log("fila vazia");
        }
    };

    this.exibeElementos = () => {
        return elementos;
    };

    this.vazio = () => {
        return elementos.length == 0;
    };

    this.esvaziar = () => {
        elementos = [];
    };

    this.tamanho = () => {
        return elementos.length;
    };
}

const novaFila = new fila();
novaFila.adiciona(1);
novaFila.adiciona(4);
novaFila.adiciona(5);
novaFila.adiciona(2);

console.log(novaFila.exibeElementos());
console.log(novaFila.remove());
console.log(novaFila.remove());
console.log(novaFila.tamanho());
console.log(novaFila.exibeElementos());
