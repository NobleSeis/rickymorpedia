import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/models/personaje';
import { PersonajeService } from 'src/app/services/personaje.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent implements OnInit {
  page = 1;
  personajes: Personaje[] = [];

  constructor(private personajeService: PersonajeService) {}

  ngOnInit(): void {
    this.personajeService
      .getAll(this.page)
      .subscribe((data: any) => (this.personajes = data.results));
  }

  onScroll(): void {
    this.personajeService.getAll(++this.page).subscribe((personajes: any) => {
      this.personajes.push(...personajes.results);
    });
  }
}
