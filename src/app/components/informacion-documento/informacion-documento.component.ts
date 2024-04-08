import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informacion-documento',
  templateUrl: './informacion-documento.component.html',
  styleUrls: ['./informacion-documento.component.css']
})
export class InformacionDocumentoComponent {
  constructor(private router: Router) { }

  regresar(): void {
    // Agrega la lógica de redirección según tus necesidades
    this.router.navigate(['/PrincipalComponent']);
  }
}
