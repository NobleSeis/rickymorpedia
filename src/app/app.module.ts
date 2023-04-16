import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonajesComponent } from './personaje/personajes/personajes.component';
import { PersonajeViewComponent } from './personaje/personaje-view/personaje-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PersonajesComponent,
    PersonajeViewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
