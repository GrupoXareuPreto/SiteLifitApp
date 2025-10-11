import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MetasComponent } from './pages/home/components/metas/metas.component';
import { NotificacoesComponent } from './pages/home/components/notificacoes/notificacoes.component';
import { ConversasComponent } from './pages/home/components/conversas/conversas.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: 'home' }
];
