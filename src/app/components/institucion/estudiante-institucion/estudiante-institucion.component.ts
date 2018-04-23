import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiante-institucion',
  templateUrl: './estudiante-institucion.component.html',
  styleUrls: ['./estudiante-institucion.component.css']
})
export class EstudianteInstitucionComponent implements OnInit {
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
