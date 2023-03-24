import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';

import { FederativeStateBr } from './../../models/federative-state-br';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  constructor(private http: HttpClient) {}

  getFederativeStateBr(): Observable<FederativeStateBr[]> {
    return this.http
      .get<FederativeStateBr[]>('assets/data/federative-states-br.json')
      .pipe(map((resp) => resp));
  }
}
