import { Component, OnInit,Input } from '@angular/core';
import { HeroesService} from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router'; // captura ruta enviada



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  
  ]
})

export class SearchComponent implements OnInit {

  @Input() heroes: any[] = [];
  @Input() termino : string;

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService: HeroesService) { 
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{// se pasa el valor obtenido por medio de la funcion subscribe a la funcion buscarHeroes()
      this.termino=params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino']);
      console.log(this.heroes);
    })

  }

}
