import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './components/principal/principal.component';
import { Subtema1Component } from './components/subtema1/subtema1.component';
import { Subtema2Component } from './components/subtema2/subtema2.component';
import { Subtema3Component } from './components/subtema3/subtema3.component';
import { Subtema4Component } from './components/subtema4/subtema4.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { PublicacionesEncontradasComponent } from './components/publicaciones-encontradas/publicaciones-encontradas.component';
import { InformacionDocumentoComponent } from './components/informacion-documento/informacion-documento.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    Subtema1Component,
    Subtema2Component,
    Subtema3Component,
    Subtema4Component,
    ResultadosComponent,
    NoEncontradoComponent,
    PublicacionesEncontradasComponent,
    InformacionDocumentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
