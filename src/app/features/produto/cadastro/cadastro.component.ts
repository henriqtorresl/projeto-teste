import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../models/produto.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  id!: string;
  produto!: Produto;
  rota: string = '';
  isNovoProduto: boolean = false;
  tituloPagina: string = '';

  // por boas práticas inicia-se o nome do objeto que representa o formulario com form e depois o que ele representa, no caso um cadastro de produto, então: formCadastroProduto
  formCadastroProduto!: FormGroup;    // FormGroup: agrupamento de formulários

  constructor(private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder  // construtor de formulários
    ) { }

  ngOnInit(): void {
    // Recuperar o produto pelo id
    this.rota = this.activatedRoute.snapshot.url[0].path;
    this.criarFormulario();   // inicializando meu formulário

    if(this.rota == 'editar-produto') {
      this.id = this.activatedRoute.snapshot.url[1].path;   // pegando o id
    
      this.produtoService.getProdutoPeloId(this.id).subscribe((produto: Produto) => {
        this.produto = produto;
        // adicionando valor ao formulário:
        this.formCadastroProduto.controls['nome'].setValue(this.produto.nome);          // this.form.controls['campo'].setValue(valor);
        this.formCadastroProduto.controls['descricao'].setValue(this.produto.descricao);
        this.formCadastroProduto.controls['preco'].setValue(this.produto.preco);
        this.formCadastroProduto.controls['estoque'].setValue(this.produto.estoque);
        this.tituloPagina = 'Editar Produto';
      });
    } else {
      this.isNovoProduto = true;
      this.tituloPagina = 'Novo Produto';
    }

  }

  criarFormulario(): void {
    // criando um formulário reativo:
    this.formCadastroProduto = this.formBuilder.group({
      nome: '',
      descricao: '',
      preco: 0,
      estoque: 0
    }); 
  }

  salvarProduto() { /*
    const produtoParaSalvar: Produto = {
      id: parseInt(this.id),    // convertendo o id de uma string para um inteiro

    };

    console.log(produtoParaSalvar);

    if(this.isNovoProduto) {
      this.criarProduto(produtoParaSalvar);
    } else {
      produtoParaSalvar.imagemUrl = this.produto.imagemUrl;   // para manter a url da imagem do produto quando eu atualiza-lo
      this.atualizarProduto(produtoParaSalvar);
    }  */
  }

  atualizarProduto(produto: Produto): void {
    this.produtoService.atualizarProduto(produto).subscribe(resposta => {
      this.router.navigate(['produto','listagem']);   // apos atualizar o produto, voltar para a página 'localhost:4200/produto/listagem'
    });
  }

  criarProduto(produto: Produto) {
    this.produtoService.criarProduto(produto).subscribe(resposta => {
      this.router.navigate(['produto','listagem']);   // apos criar o produto, voltar para a página 'localhost:4200/produto/listagem'
    });
  }

}
