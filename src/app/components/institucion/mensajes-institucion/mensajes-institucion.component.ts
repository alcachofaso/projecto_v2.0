import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajes-institucion',
  templateUrl: './mensajes-institucion.component.html',
  styleUrls: ['./mensajes-institucion.component.css']
})
export class MensajesInstitucionComponent implements OnInit {
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
