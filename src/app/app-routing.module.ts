import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './components/principal/principal.component';
import { Subtema1Component } from './components/subtema1/subtema1.component';
import { Subtema2Component } from './components/subtema2/subtema2.component';
import { Subtema3Component } from './components/subtema3/subtema3.component';
import { Subtema4Component } from './components/subtema4/subtema4.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { PublicacionesEncontradasComponent } from './components/publicaciones-encontradas/publicaciones-encontradas.component';
import { InformacionDocumentoComponent } from './components/informacion-documento/informacion-documento.component';

const routes: Routes = [
  {path:'', redirectTo: 'PrincipalComponent', pathMatch: 'full'},
  { path: 'PrincipalComponent', component: PrincipalComponent },
  { path: 'subtema1', component: Subtema1Component },
  { path: 'subtema2', component: Subtema2Component },
  { path: 'subtema3', component: Subtema3Component },
  { path: 'subtema4', component: Subtema4Component },
  { path: 'resultados', component: ResultadosComponent },
  { path: 'noencontrado', component: NoEncontradoComponent},
  { path: 'publicacionesencontradas', component: PublicacionesEncontradasComponent},
  { path: 'informaciondocumento', component: InformacionDocumentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
