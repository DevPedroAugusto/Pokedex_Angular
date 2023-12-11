import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallCardComponent } from './small-card/small-card.component';
import { BigCardComponent } from './big-card/big-card.component';
import { LoadingCardComponent } from './loading-card/loading-card.component';
import { MoreCardComponent } from './more-card/more-card.component';
import { PokedexComponent } from './pokedex/pokedex.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, PokedexComponent, SmallCardComponent, BigCardComponent, LoadingCardComponent, MoreCardComponent],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css', './page.response.component.css']
})
export class PageComponent {
  card: HTMLSelectElement | null;
  inputRange: HTMLSelectElement | null;
  inputPokeNumber: HTMLSelectElement | null;
  // smallCard: HTMLSelectElement | null;

  selectedElement: any = "default";
  attackStats: any = "8"
  pokeNumber: any = "107"


  constructor() {

    this.card = null;
    this.inputRange = null;
    this.inputPokeNumber = null;

    // Agora, card será atribuído após o carregamento do DOM
    document.addEventListener('DOMContentLoaded', () => {
      this.card = document.getElementById("elements") as HTMLSelectElement;
      this.inputRange = document.getElementById("slide-bar") as HTMLSelectElement;
      this.inputPokeNumber = document.getElementById("input-number") as HTMLSelectElement;
    });
  }

  oninit() {

  }

  updatePokemom() {
    var PokeNumberValue = this.inputPokeNumber?.value
    if (this.inputPokeNumber) {
      this.pokeNumber = PokeNumberValue
    } else {
      console.log("Erro ao tentar atualizar o numero")
    }
  }

  updatePokeStats() {
    var inputRangeValue = this.inputRange?.value
    if (this.inputRange) {
      this.attackStats = inputRangeValue
    } else {
      console.log("Erro ao tentar atualizar o status")
    }
  }

  updateSmallCard() {
    var inputElementValue = this.card?.value
    if (this.card) {
      this.selectedElement = inputElementValue;
    } else {
      console.log("Erro ao tentar atualizar o elemento")
    }
  }
}



