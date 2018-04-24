import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajes-institucion',
  templateUrl: './mensajes-institucion.component.html',
  styleUrls: ['./mensajes-institucion.component.css']
})


export class MensajesInstitucionComponent implements OnInit {

  public mensajes;

  constructor(){
    this.mensajes = [{
        titulo: "Suspencion de Clases",
        fecha: "12/03/2018",
        contenido: "Por motivos de fuerza mayor el dia 13 de marzo no habran actividades academicas.",
        destinatario: "Comunidad",
      },
      {
        titulo: "Colecta Benefica",
        fecha: "08/03/2018",
        contenido: "Colecta en ayuda de alguien.",
        destinatario: "8° basico"
      }];
  }

  ngOnInit() {
    
  }
  

}
