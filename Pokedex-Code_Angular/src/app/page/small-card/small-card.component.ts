import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card-colors.component.css']
})
export class SmallCardComponent {
  @Input() pokeNumber: string = "1";
  @Input() selectedElement: string = "default";

  pokeFrontImage: string;
  pokeBackImage: string;
  pokeNumberFormat: string;

  @Input() attackStats:string = "8";
  @Input() defenseStats:string = "8";
  @Input() speedStats:string = "8";
  @Input() sAttackStats:string = "8";
  @Input() sDefenseStats:string = "8";

  get PokebolColor(): string {
    return `${this.selectedElement}-pokebol-color`;
  }

  get Flag1Color(): string {
    return `${this.selectedElement}-flag1-color`;
  }

  get Flag2Color(): string {
    return `${this.selectedElement}-flag2-color`;
  }

  get Flag3Color(): string {
    return `${this.selectedElement}-flag3-color`;
  }

  get BodyColor(): string {
    return `${this.selectedElement}-body-color`;
  }

  get StatsColor(): string {
    return `${this.selectedElement}-stats-color`;
  }
  
  constructor() {
    this.pokeFrontImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${this.pokeNumber}.gif`;
    this.pokeBackImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/${this.pokeNumber}.gif`;

    this.pokeNumberFormat = `${this.pokeNumber}`.padStart(3, '0');
  }
}
