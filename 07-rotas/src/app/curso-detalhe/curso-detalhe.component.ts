import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, UnsubscriptionError } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  id: number = 0;
  inscricao !: Subscription;

  constructor(private route: ActivatedRoute) {
    // this.id = this.route.snapshot.params['id'];
    // console.log('Now: ', this.id)
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(params => {
      this.id = params['id']
    })
  }

  ngOnDestroy (): void {
    this.inscricao.unsubscribe;
  }

}
