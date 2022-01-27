import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Aluno } from '../aluno.model';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css'],
})
export class AlunosFormComponent implements OnInit {
  aluno: Aluno = {
    id: NaN,
    nome: '',
    email: '',
  };
  subscriptios: Array<Subscription> = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) {}

  ngOnInit(): void {
    this.subscriptios.push(
      this.route.params.subscribe((params) => (this.aluno.id = params['id']))
    );

    if (this.aluno.id) this.aluno = this.alunosService.getAluno(this.aluno.id);
    else this.router.navigate(['/alunos']);
  }

  atualizarAluno(data: NgForm) {
    this.alunosService.atualizarAluno(data.value);
  }
}
