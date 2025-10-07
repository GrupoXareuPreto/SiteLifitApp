import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-conversas',
  imports: [],
  templateUrl: './conversas.component.html',
  styleUrls: ['./conversas.component.css']
})
export class ConversasComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = document.querySelector('.conversas-container');
    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight - 100) {
        this.isVisible = true;
      }
    }
  }
}
