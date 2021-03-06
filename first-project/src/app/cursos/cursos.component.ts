import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  nomePortal!: string;
  cursos!: Array<string>;
  constructor(private cursosService: CursosService) {
    this.nomePortal = 'https://loiane.training.com';
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }
}
