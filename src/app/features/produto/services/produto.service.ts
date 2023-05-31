import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos, Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'    // significa que esse serviço pode ser utilizado por qualquer componente que eu tiver dentro do meu modulo (no caso o modulo produto)
})
export class ProdutoService {

  private baseUrl: string = 'http://localhost:3000/';    // defino como private por questão de segurança

  // Injeção de dependências -> eu posso adicionar referências dentro do meu construtor e gerar uma nova instância de uma classe
  constructor(private http: HttpClient) { }

  // recuperar a lista de produtos
  getProdutos(): Observable<Produtos> {
    return this.http.get<Produtos>(`${this.baseUrl}produtos`);    // faz o get na url 'http://localhost:3000/produtos'
  }
 
  getProdutoPeloId(id: string): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseUrl}produtos/${id}`);   // faz o get na url 'http://localhost:3000/produtos/id'
  }

  atualizarProduto(produto: Produto): Observable<any> {
    return this.http.put(`${this.baseUrl}produtos/${produto.id}`, produto);   // para usar o método put eu preciso passar como parametro a rota e o elemento que qro atualizar..
  }

  criarProduto(produto: Produto): Observable<any> {
    return this.http.post(`${this.baseUrl}produtos`, produto);
  }

  excluirProduto(id: string): Observable<any> {
    return this.http.delete<Produto>(`${this.baseUrl}produtos/${id}`);
  }
 
}
