import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isScrolled = false;
  isDropdownOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 100;
  }

  toggleDropdown(state: boolean) {
    this.isDropdownOpen = state;
  }

  navigateTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navigateToSection(section: string) {
    console.log('Indo para:', section);
    this.isDropdownOpen = false;
  }

}
