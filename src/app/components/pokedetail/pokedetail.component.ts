import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrl: './pokedetail.component.css'
})
export class PokedetailComponent {
  @Input() set url(url:string) {
    this.loadData(url)
  }

  pokemon! : Pokemon

  constructor(private client : HttpClient){}

  loadData(url : string) {
    this.client.get<Pokemon>(url).subscribe( {
      next : (data: Pokemon) => this.pokemon = data
    })
  }
}
