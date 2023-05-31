import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, filter, map, of, tap } from 'rxjs';
import { ProdutoService } from 'src/app/features/produto/services/produto.service';
import { HomeService } from '../services/home.service';

export interface Pessoa {
  nome: string;
  idade: number;
  sexo: string;
  salario: number;
}

export interface Pessoas extends Array<Pessoa> {}   // criei uma interface Pessoas que vai ser um Array de Pessoa

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  clientes!: Pessoas;
  displayedColumns: string[] = ['nome', 'sexo', 'idade', 'salario'];
  dataSource!: MatTableDataSource<any>; // inicializando o dataSource
  
  // Pipe do rxjs
  // frutas: string[] = [];
  // frutas$: Observable<string> = of('banana', 'morango', 'abacaxi', 'pera', 'melancia');   // para representar que essa variável é um observable, eu adiciono o "$" no fim do nome

  constructor(private homeService: HomeService) {
    // Pipe do rxjs
    // this.frutas$.pipe(      // o operador pipe é usado para modificar os dados antes de entregar ao observador
      // tap(console.log), // visualiza o que tem dentro do observable
      // map(fruta => fruta.toUpperCase()),
      // tap(console.log),
      // filter(fruta => fruta.startsWith('B') || fruta.startsWith('M')),  // só vou mostrar frutas que começam com a letra B ou M
      // tap(console.log)
    // ).subscribe(resultado => {
      // this.frutas.push(resultado);    // isso da certo, pois o of é executado uma vez pra cada elemento
    // });  // para eu conseguir observar o que tem dentro de um observable eu preciso sobrescrever a ele, por isso preciso do método subscribe
  }

  ngOnInit(): void {    // método de inicialização de dados
    this.homeService.getClientes().subscribe(clientes => {
      this.clientes = clientes;
      this.dataSource = new MatTableDataSource(this.clientes);
    });
  }

}