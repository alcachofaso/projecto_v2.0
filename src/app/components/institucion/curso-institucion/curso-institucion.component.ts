import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-institucion',
  templateUrl: './curso-institucion.component.html',
  styleUrls: ['./curso-institucion.component.css']
})
export class CursoInstitucionComponent implements OnInit {
  accion:number;

  constructor() {
    this.accion=0;
   }

  opcion(_opcion)
  {
    if(_opcion!=this.accion)
      this.accion=_opcion;
  }
  ngOnInit() {
  }

}
