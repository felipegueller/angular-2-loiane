import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, UnsubscriptionError } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  id: number = 0;
  inscricao !: Subscription;
  curso?: any;

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router,
  ){
    // this.id = this.route.snapshot.params['id'];
    // console.log('Now: ', this.id)
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(params => {
      this.id = params['id'];

      this.curso = this.cursosService.getCurso(this.id)

      if(!this.curso)
      this.router.navigate(['/not-found'])
    })

  }

  ngOnDestroy (): void {
    this.inscricao.unsubscribe;
  }

}
