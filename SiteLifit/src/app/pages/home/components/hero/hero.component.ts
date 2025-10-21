import { Component, HostListener, OnInit } from '@angular/core';
import {trigger,style,transition,animate} from '@angular/animations';
import { HeaderComponent } from '../../../../shared/header/header.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],


})
export class HeroComponent implements OnInit {
   isVisible = false;
  mensagem = 'Inicie sua jornada com a gente';

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.startHeroAnimation();
  }

  startHeroAnimation(delay = 40) {
    this.isVisible = false;
    setTimeout(() => {
      this.isVisible = true;
    }, delay);
  }
}
