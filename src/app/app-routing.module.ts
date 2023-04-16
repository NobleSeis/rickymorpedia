import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './personaje/personajes/personajes.component';
import { PersonajeViewComponent } from './personaje/personaje-view/personaje-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'personajes',
    component: PersonajesComponent,
  },
  {
    path: 'personajes/:id',
    component: PersonajeViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
