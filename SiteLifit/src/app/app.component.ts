import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeatureSectionComponent } from './pages/home/components/feature-section/feature-section.component';
import { HeaderComponent } from './shared/header/header.component';
import { HeroComponent } from "./pages/home/components/hero/hero.component";
import { MetasComponent } from "./pages/home/components/metas/metas.component";
import { ConversasComponent } from "./pages/home/components/conversas/conversas.component";
import { NotificacoesComponent } from "./pages/home/components/notificacoes/notificacoes.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroComponent, FeatureSectionComponent, MetasComponent, ConversasComponent, NotificacoesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SiteLifit';
}
