import { Component } from '@angular/core';
import { HeroesService,Heroe } from '../../../services/heroes.service';
import { Router } from '@angular/router';
//import {SearchComponent} from '../../search/search.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})


export class NavbarComponent  {

  heroes:Heroe[] = [];
  constructor( private _router:Router) { 
  
  }

  buscarHeroe( termino:string ){
    //console.log(termino)
    if(termino.length > 0){
      this._router.navigate( ['/buscar',termino] );
    }else{
      console.log("la variable termino esta vacia");
    }
  }



  
  


}
