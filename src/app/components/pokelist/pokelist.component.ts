import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Pokedex } from '../../models/pokedex.model';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrl: './pokelist.component.css'
})
export class PokelistComponent {

  pokedex! : Pokedex
  selectedPokemon! : string
  constructor(private client : HttpClient){
    this.loadData("https://pokeapi.co/api/v2/pokemon")
  }

  selectPokemon(url : string) {
    this.selectedPokemon = url
  }
  loadData(url : string) {
    this.client.get<Pokedex>(url).subscribe({
      next : (data : Pokedex) => this.pokedex = data
    })
  }

  previous() {
    this.loadData(this.pokedex.previous ?? "")
  }
  next() {
    this.loadData(this.pokedex.next ?? "")
  }
}
