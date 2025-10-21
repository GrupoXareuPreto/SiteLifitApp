import { Component, HostListener, OnInit } from '@angular/core';
import {trigger,style,transition,animate} from '@angular/animations';
import { HeaderComponent } from '../../../../shared/header/header.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',


})
export class HeroComponent implements OnInit {
  isVisible = false;
  mensagem = ''

  ngOnInit(): void {
    this.isVisible = true
    this.mensagem = 'Seu Impulso para uma vida melhor'
  }
}
