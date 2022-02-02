import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  mostrarMenuEmmiter = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  doLogin(usuario: Usuario) {
    if (usuario.email === 'usuario@gmail.com' && usuario.password === '123') {
      this.usuarioAutenticado = true;
      this.router.navigate(['/']);

      this.mostrarMenuEmmiter.emit(true);
    } else {
      this.usuarioAutenticado = false;

      this.mostrarMenuEmmiter.emit(false);
    }
  }
}
