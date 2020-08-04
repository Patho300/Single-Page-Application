import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';//carga de input,output y eventemitter
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})

export class HeroeTarjetaComponent implements OnInit {


  @Input() heroe: any = {};
  @Input() index: number; // argumento recibido desde afuera

  @Output() heroeSeleccionado: EventEmitter<number>; //emitidor de evento

  constructor(private router:Router) { 
    this.heroeSeleccionado = new EventEmitter()
  }

  ngOnInit(): void {
  }


  verHeroe(){
    //console.log( this.index);
    this.router.navigate( ['/heroe',this.index] );
    //this.heroeSeleccionado.emit(this.index); //emision del dato a emitir
  }

  


}
