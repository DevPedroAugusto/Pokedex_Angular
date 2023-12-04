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
    // smallCard: HTMLSelectElement | null;

    selectedElement:any = "default";
  
    constructor() {
      // Inicialize card como null
      this.card = null;
  
      // Agora, card será atribuído após o carregamento do DOM
      document.addEventListener('DOMContentLoaded', () => {
        this.card = document.getElementById("elements") as HTMLSelectElement;
      });
    }
  
    oninit() {
    }
    
    updateSmallCard() {
      var smallCard = document.getElementById("1");
      var inputedElement = this.card?.value

      
      if (this.card) {
        this.selectedElement = inputedElement;
        // console.log(smallCard) 
        // console.log(inputedElement); 
      } else {
        console.log("Card é nulo.");
      }
    }
  }
  
  