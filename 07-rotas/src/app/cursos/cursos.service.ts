import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return [
      { id: 1, name: 'Angular 2' },
      { id: 2, name: 'Javascrip puro' },
      { id: 3, name: 'VueJs 3' },
    ];
  }

  getCurso(id: number) {
    let cursos = this.getCursos()
    for(let curso of cursos) {
      if(curso.id == id)
        return curso
    }
    return null
  }
}
