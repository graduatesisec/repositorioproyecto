import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.css']
})
export class ResultadoBusquedaComponent {
  mensajeNoResultados: string = '';
  carrera: string = '';
  tipoFiltro: string = '';
  textoFiltro: string = '';

  // Agrega una propiedad para almacenar los resultados
  resultados: any[] = [];  // Reemplaza 'any[]' con el tipo de datos real de tus resultados si es posible

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.carrera = params.get('carrera') || '';
      this.tipoFiltro = params.get('tipoFiltro') || '';
      this.textoFiltro = params.get('textoFiltro') || '';

      // Simulación de resultados, deberías cargar los resultados de acuerdo a tu lógica
      if (this.validarResultados()) {
        this.mensajeNoResultados = `Se encontró un registro para la carrera: ${this.carrera}`;
      } else {
        this.mensajeNoResultados = 'No se encontraron coincidencias';
      }
    });
  }

  validarResultados(): boolean {
    // Lógica para validar y cargar resultados según filtros y carrera
    if (this.carrera === 'Todo el repositorio') {
      // Lógica para Todo el Repositorio
      if (this.textoFiltro.trim() !== '') {
        // Simulación de resultados para Todo el Repositorio
        this.resultados = [
          { fecha: '2024-2025', titulo: 'Ejemplo de Título', autores: [{ nombre: 'Autor 1', enlace: '#' }] }
        ];
        return true;
      }
    } else if (this.carrera === 'subtema2') {
      // Lógica para Tecnología Superior en Desarrollo de Software
      if (this.tipoFiltro === 'Titulo' && this.textoFiltro === 'SINDROME METABOLICO LA PANDEMIA DEL SIGLO') {
        // Simulación de resultados para subtema2 con filtro de Título
        this.resultados = [
          { fecha: '2024-2025', titulo: 'SINDROME METABOLICO LA PANDEMIA DEL SIGLO', autores: [{ nombre: 'Autor 1', enlace: '#' }] }
        ];
        return true;
      }
    }

    // Si no hay coincidencias, redirige a la página principal
    this.router.navigate(['/']);
    return false;
  }
}
