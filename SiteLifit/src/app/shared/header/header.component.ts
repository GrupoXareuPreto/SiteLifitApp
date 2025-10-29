import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isScrolled = false;
  isDropdownOpen = false;
  isBrowser: boolean;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (!this.isBrowser) return; // evita acessar window no servidor

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const hash = window.location.hash;
        if (hash) {
          setTimeout(() => this.scrollToHash(hash), 300);
        }
      });
  }

  navigateToPage(route: string) {
    if (!this.isBrowser) return;

    const currentRoute = this.router.url.split('?')[0].split('#')[0];
    if (currentRoute === route) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.router.navigate([route]);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      this.isScrolled = window.scrollY > 100;
    }
  }

  toggleDropdown(state: boolean) {
    this.isDropdownOpen = state;
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    this.isDropdownOpen = false;

    const currentUrl = this.router.url.split('#')[0];
    const isOnHomePage = currentUrl === '/Home' || currentUrl === '/' || currentUrl === '';

    if (isOnHomePage) {
      if (this.isBrowser) this.scrollSmooth(sectionId);
    } else {
      this.router.navigate(['/Home'], { fragment: sectionId });
    }
  }

  private scrollSmooth(sectionId: string) {
    if (!this.isBrowser) return;

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
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          window.scrollTo(0, startPosition + (distance * easeOutQuart));

          if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
      }
    }, 100);
  }

  private scrollToHash(hash: string) {
    if (!this.isBrowser) return;
    const sectionId = hash.replace('#', '');
    this.scrollSmooth(sectionId);
  }
}
