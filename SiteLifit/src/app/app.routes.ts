import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MetasComponent } from './pages/home/components/metas/metas.component';
import { NotificacoesComponent } from './pages/home/components/notificacoes/notificacoes.component';
import { ConversasComponent } from './pages/home/components/conversas/conversas.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },          // Página principal
    //{ path: 'metas', component: MetasComponent },    // Página de metas (se quiser isolada)
    //{ path: 'notificacoes', component: NotificacoesComponent },
    //{ path: 'conversas', component: ConversasComponent }
];
