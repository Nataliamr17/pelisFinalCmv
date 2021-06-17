import { Component, OnInit } from '@angular/core';
import * as xml2js from 'xml2js';
import { CargaScriptsService } from './service/carga-scripts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProyectoFinalCMV';

  private elements: any[] = [];
  public filterElements: any[] = [];
  flag: boolean = true;

  constructor(private cargaScriptsService: CargaScriptsService)   {}

  ngOnInit(): void {
    this.cargaScriptsService.loadXML()
    .subscribe((data) => {
      this.parseXML(this.elements, data);
      this.filterElements = this.elements;
    });
  }
  cambia(){
    this.flag = !this.flag;
  }

  onSearchByAnno(anno: number) {
    if(anno !== undefined) {
      this.filterElements = this.elements.filter( x => x.pie.includes(anno));
    } else {
      this.filterElements = this.elements;
    }
  }

  onSearchByTitle(nombre: string){
    if( nombre!== undefined){
      this.filterElements = this.elements.filter( x => x.nombre.includes(nombre));
    }else {
      this.filterElements = this.elements;
    }
  }


  parseXML(elements: any[], data: any) {
    return new Promise(resolve => {
      var k: string | number,
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });
      parser.parseString(data, function (err: any, result: any) {
        var obj = result.orla;
        for (k in obj.elemento) {
          var item = obj.elemento[k];
          const result = {
            nombre: item.nombre[0],
            foto: item.foto[0],
            pie: item.pie[0],
            detalle: item.detalle[0]
          };

          elements.push(result);
        }
        resolve(elements);
      });
    });
  }
}
