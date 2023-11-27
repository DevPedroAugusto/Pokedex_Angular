import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallCardComponent } from './small-card/small-card.component';
import { BigCardComponent } from './big-card/big-card.component';
import { LoadingCardComponent } from './loading-card/loading-card.component';
import { MoreCardComponent } from './more-card/more-card.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, SmallCardComponent, BigCardComponent, LoadingCardComponent, MoreCardComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {

}
