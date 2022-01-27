import { Injectable } from '@angular/core';
import { Aluno } from './aluno.model';

@Injectable()
export class AlunosService {
  private alunos: Array<Aluno> = [
    { id: 1, nome: 'Aluno 01', email: 'aluno01@mail.com' },
    { id: 2, nome: 'Aluno 02', email: 'aluno02@mail.com' },
    { id: 3, nome: 'Aluno 03', email: 'aluno03@mail.com' },
    { id: 4, nome: 'Aluno 04', email: 'aluno04@mail.com' },
    { id: 5, nome: 'Aluno 05', email: 'aluno05@mail.com' },
  ];

  constructor() {}

  getAlunos(): Array<Aluno> {
    return this.alunos;
  }

  getAluno(id: number): Aluno {
    for (let aluno of this.getAlunos()) {
      if (id == aluno.id) return aluno;
    }
    return { id: null!, nome: '', email: '' };
  }

  atualizarAluno(data: Aluno) {}
}
