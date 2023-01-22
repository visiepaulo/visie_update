function pilha() {
    let elementos = [];

    this.adiciona = (elemento) => {
        elementos.push(elemento);
    };

    this.remove = () => {
        if (elementos.length > 0) {
            return elementos.pop();
        } else {
            console.log("pilha vazia");
        }
    };

    this.topo = () => {
        return elementos[elementos.length - 1];
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

    this.exibeElementos = () => {
        return elementos;
    };
}
