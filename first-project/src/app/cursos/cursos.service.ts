import { Injectable } from '@angular/core';

/*
   A injeção de dependência providencia uma instância da classe service, sem a necessidade de fazer também as intâncias que a classe service utiliza. Sendo assim, você tem a possibiliade de usar as propriedades e métodos da classe service
*/
@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor() {}

  getCursos() {
    return ['Java', 'Javascript', 'C#', 'Ruby', 'Python'];
  }
}
