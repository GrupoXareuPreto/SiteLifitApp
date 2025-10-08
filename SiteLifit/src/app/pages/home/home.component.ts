import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { FeatureSectionComponent } from "./components/feature-section/feature-section.component";
import { NotificacoesComponent } from "./components/notificacoes/notificacoes.component";
import { MetasComponent } from "./components/metas/metas.component";
import { ConversasComponent } from "./components/conversas/conversas.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HeroComponent, FeatureSectionComponent, NotificacoesComponent, MetasComponent, ConversasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
