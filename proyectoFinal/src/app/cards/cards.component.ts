import { Component, Input, OnInit } from '@angular/core';
import { Console } from 'console';
import { CargaScriptsService } from '../service/carga-scripts.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() element: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.element)
  }

}
