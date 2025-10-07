import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.css']
})
export class MetasComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = document.querySelector('.metas-container');
    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight - 100) {
        this.isVisible = true;
      }
    }
  }
}
