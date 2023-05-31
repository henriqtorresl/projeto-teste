import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // o primeiro método do componente a ser executado é o construtor e depois é o ngOnInit (que é basicamente um construtor do angular)
  constructor() {
    console.log("Componente Construtor");
  }

  ngOnInit(): void {
    console.log("Componente OnInit");
  }

}
