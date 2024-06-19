import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { PresencaComponent } from './components/presenca/presenca.component';
import { EnderecoComponent } from './components/endereco/endereco.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    HistoriaComponent,
    GaleriaComponent,
    PresencaComponent,
    EnderecoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
