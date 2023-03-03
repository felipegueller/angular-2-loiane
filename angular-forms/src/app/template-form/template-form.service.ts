import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TemplateFormService {
  constructor(private http: HttpClient) {}

  searchCep(cep: string) {
    return this.http
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .pipe(map((resp) => resp));
  }
}
