import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-eventosfoto',
  imports: [],
  templateUrl: './eventosfoto.component.html',
  styleUrl: './eventosfoto.component.css'
})
export class EventosfotoComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = document.querySelector('.eventosfoto-container');
    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight - 100) {
        this.isVisible = true;
      }
    }
  }
}
