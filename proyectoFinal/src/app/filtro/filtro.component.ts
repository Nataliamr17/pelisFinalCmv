import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  // storedTheme: any = localStorage.getItem('theme-color');

  @Output() onSearchByAnno = new EventEmitter<any>();
  @Output() onSearchByTitle = new EventEmitter<any>();

  value: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    this.onSearchByAnno.emit(this.value);
  }

  onReset() {
    this.value = undefined;
    this.onSearchByAnno.emit(this.value);
  }
  onSearchT() {
    this.onSearchByTitle.emit(this.value);
  }
  
  
  // setTheme(theme: string){
  //   localStorage.setItem('theme-color', theme);
  //   this.storedTheme = localStorage.getItem('theme-color');
  // }
}
