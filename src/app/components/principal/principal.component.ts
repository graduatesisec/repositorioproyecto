import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  
  constructor(private router: Router) { }

  regresar(): void {
    // Agrega la lógica de redirección según tus necesidades
    this.router.navigate(['/PrincipalComponent']);
  }

}
