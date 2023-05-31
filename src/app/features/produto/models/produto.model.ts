export interface Produto {
    // o atributo imagem pode ou não vir..
    nome: string;
    descricao: string;
    imagemUrl?: string;     // a '?' diz que é opcional eu passar ou não uma imagem quando eu estiver criando um Produto
    preco: number;
    estoque: number;
    id: number;
}

// A interface Produtos é um array de tipos Produto
export interface Produtos extends Array<Produto> {}