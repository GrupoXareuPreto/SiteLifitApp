import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FAQComponent } from './pages/faq/faq.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'FAQ', component: FAQComponent },
    { path: 'empresa', component: EmpresaComponent },
    { path: '**', redirectTo: 'home' }
];
