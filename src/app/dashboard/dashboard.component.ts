import { Component, OnInit } from '@angular/core';
import { PersonajeService } from '../services/personaje.service';
import { Personaje } from '../models/personaje';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  personajes: Personaje[] = [];

  constructor(private personajeService: PersonajeService) {}

  ngOnInit(): void {
    this.personajeService
      .getAll()
      .subscribe((data: any) => (this.personajes = data.results));
  }
}
