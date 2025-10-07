import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-notificacoes',
  imports: [],
  templateUrl: './notificacoes.component.html',
  styleUrl: './notificacoes.component.css'
})
export class NotificacoesComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = document.querySelector('.notificacoes-container');
    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight - 100) {
        this.isVisible = true;
      }
    }
  }
}
