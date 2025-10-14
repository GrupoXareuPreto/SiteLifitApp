import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { FeatureSectionComponent } from "./components/feature-section/feature-section.component";
import { NotificacoesComponent } from "./components/notificacoes/notificacoes.component";
import { MetasComponent } from "./components/metas/metas.component";
import { ConversasComponent } from "./components/conversas/conversas.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { EventosfotoComponent } from "./components/eventosfoto/eventosfoto.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { PostagemComponent } from './components/postagem/postagem.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HeroComponent, FeatureSectionComponent, NotificacoesComponent, MetasComponent, ConversasComponent, EventosComponent, EventosfotoComponent, FooterComponent, PostagemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
