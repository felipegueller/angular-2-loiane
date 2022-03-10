import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css'],
})
export class CicloComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  @Input() valorInicial: number = 10;

  constructor() {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { valorInicial } = changes;
    console.log('OnChanges', valorInicial.currentValue);
  }

  ngDoCheck(): void {
    console.log('DoCheck');
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
}
