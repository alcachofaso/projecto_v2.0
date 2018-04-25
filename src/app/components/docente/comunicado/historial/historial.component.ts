import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  public mensajes;

  constructor(){
    this.mensajes = [{
        titulo: "Copia en prueba",
        fecha: "12/03/2018",
        contenido: "El alumno fue sorprendido copiando en la prueba de matematicas realizada el 22/03/2018.",
        destinatario: "Epecifico",
      },
      {
        titulo: "Colecta",
        fecha: "08/03/2018",
        contenido: "El dia 20/03/2018 se realizara una colecta a beneficio.",
        destinatario: "Curso"
      }];
    }

  ngOnInit() {
  }

}
