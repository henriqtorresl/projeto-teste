import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Produtos, Produto } from '../models/produto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  produtos!: Produtos;

  // Injeção de dependências
  constructor(private produtoService: ProdutoService,
      private router: Router
    ) {}

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe(produtos => {    // o resultado é uma interface Produtos, que é um array de Produto
      this.produtos = produtos;
      console.log(produtos);
    })
  }

  selecionarProduto(produto: Produto): void {
    this.router.navigate(['produto', 'editar-produto', produto.id]);
  }

  criarNovoProduto(): void {
    this.router.navigate(['produto', 'novo-produto']);    // navega para a rota de produto/novo-produto
  }

  excluirProduto(produto: Produto): void {
    this.produtoService.excluirProduto(produto.id.toString())
    .subscribe(resposta => {
      this.router.navigate(['produto']);    // após excluir um produto, eu vou navegar para a rota de 'localhost:4200/produto'
    });
  }

}