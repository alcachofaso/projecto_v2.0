import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajes-psicologo',
  templateUrl: './mensajes-psicologo.component.html',
  styleUrls: ['./mensajes-psicologo.component.css']
})
export class MensajesPsicologoComponent implements OnInit {
  mensajes:any;
  constructor() {
    this.mensajes=[
      {origen:"Cid	Farias,	CATALINA MIA",
      content:"mi hijo a estado desanimado despues de una prueba, que puedo hacer para ayudarlo?",
      fecha:"18/03/2018",
      respondido:"Contestado",
      curso:"3°Basico A"},
      {origen:"Espinoza Garrido, JAVIERA JOSEFINA",
      content:"mi hijo a bajado sus notas y se a puesto muy violento, qyue devo hacer?",
      fecha:"05/03/2018",
      respondido:"Contestado",
      curso:"2° Basico C"},
      {origen:"Moya Jara, AMANDA RAYEN",
      content:"desde hace algunos dias, mi hijo se empeso a despertas en la mitad de la noche, e inventa estar enfermo para no ir a clases, que le puede estar pasando?",
      fecha:"15/03/2018",
      respondido:"Contestar",
      curso:"4° Basico A"}
    ]
   }
  ngOnInit() {
  }

}
