import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexo'
})
export class SexoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {    // value é o valor que o pipe vai receber como parâmetro
    let sexo = "Masculino";   // valor padrão
    
    if(value === 'f') {   // o "===" ignora caracteres minusculos e maiusculos
      sexo = "Feminino";
    } 

    return sexo;
  }
 
}
