import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno.model';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css'],
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  subscriptions: Array<Subscription> = [];
  id!: number;
  aluno!: Aluno;

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.params.subscribe((params) => {
        this.id = params['id'];
        this.aluno = this.alunoService.getAluno(this.id);
      })
    );
  }

  editarAluno(): void {
    this.router.navigate(['/alunos', this.id, 'editar']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe;
    });
  }
}
