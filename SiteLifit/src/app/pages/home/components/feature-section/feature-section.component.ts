import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from '../../../../shared/header/header.component';

@Component({
  selector: 'app-feature-section',
  imports: [HeaderComponent],
  templateUrl: './feature-section.component.html',
  styleUrls: ['./feature-section.component.css']
})
export class FeatureSectionComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = document.querySelector('.feature-container');
    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight - 100) {
        this.isVisible = true;
      }
    }
  }
}
