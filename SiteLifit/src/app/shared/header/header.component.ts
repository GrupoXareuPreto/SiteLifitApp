import { Component, HostListener} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isScrolled = false;
  isDropdownOpen = false;
  
  constructor(private router: Router) {}
  
  ngOnInit() {
    // Garante que o scroll funcione após navegação
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Verifica se há hash na URL para fazer scroll
        const hash = window.location.hash;
        if (hash) {
          setTimeout(() => {
            this.scrollToHash(hash);
          }, 300);
        }
      });
  }

  navigateToPage(route: string) {
  const currentRoute = this.router.url.split('?')[0].split('#')[0];
  
  if (currentRoute === route) {
    // Se já está na mesma página, só faz scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    // Se está em outra página, navega normalmente
    this.router.navigate([route]);
  }
}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 100;
  }

  toggleDropdown(state: boolean) {
    this.isDropdownOpen = state;
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    
    // Fecha o dropdown
    this.isDropdownOpen = false;

    // Verifica se já está na Home
    const currentUrl = this.router.url.split('#')[0]; // Remove hash atual se existir
    const isOnHomePage = currentUrl === '/Home' || currentUrl === '/' || currentUrl === '';
    
    if (isOnHomePage) {
      // Se já está na Home, apenas faz o scroll
      this.scrollSmooth(sectionId);
    } else {
      // Se está em outra página, navega para Home com hash
      this.router.navigate(['/Home'], { fragment: sectionId });
    }
  }

  private scrollSmooth(sectionId: string) {
    setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbar = document.querySelector('.navbar') as HTMLElement;
      const navbarHeight = navbar?.offsetHeight || 0;
      
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      
      const duration = 1500; 
      
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function para ficar extra fofinho
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        window.scrollTo(0, startPosition + (distance * easeOutQuart));

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  }, 100);
  }

  private scrollToHash(hash: string) {
    const sectionId = hash.replace('#', '');
    this.scrollSmooth(sectionId);
  }

}
