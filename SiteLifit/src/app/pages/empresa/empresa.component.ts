import { Component } from '@angular/core';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent {
  membros = [
    { nome: 'André Nogueira', foto: 'assets/pfp_placeholder.jpeg' },
    { nome: 'Arthur Bergamaschi', foto: 'assets/pfp_placeholder.jpeg' },
    { nome: 'João Pedro Correia', foto: 'assets/pfp_placeholder.jpeg' },
    { nome: 'Marina Santos', foto: 'pfp_placeholder.jpeg' },
    { nome: 'Matheus Bernadino', foto: 'pfp_placeholder.jpeg' },
    { nome: 'Miguel Pifani', foto: 'pfp_placeholder.jpeg' },
    { nome: 'Rogério Zanzarini', foto: 'pfp_placeholder.jpeg' }
  ];
}
