import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-card.component.html',
  styleUrl: './loading-card.component.css'
})
export class LoadingCardComponent {

  constructor(){
    document.addEventListener('DOMContentLoaded', () => {
      this.animateLoading();
    });
  }

  animateLoading(){
    const firstPoint = document.getElementById ("first-point")
    const secondPoint = document.getElementById ("second-point")
    const threePoint = document.getElementById ("three-point")

  }

}
