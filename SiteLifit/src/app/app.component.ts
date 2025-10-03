import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeatureSectionComponent } from './feature-section/feature-section.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from "./hero/hero.component";
import { MetasComponent } from "./metas/metas.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroComponent, FeatureSectionComponent, MetasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SiteLifit';
}
