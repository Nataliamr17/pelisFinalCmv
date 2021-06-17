import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

//  public titleStyles: {};
// @Output() onSearchByTitle = new EventEmitter<any>();

value : string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  // onSearchT() {
  //   this.onSearchByTitle.emit(this.value);
  // }
  // updateTitleStyles(){
  //   this.titleStyles = { 
  //     'background-color': 'white',
  //     'color': 'red' 
  //   }
  // }
}
