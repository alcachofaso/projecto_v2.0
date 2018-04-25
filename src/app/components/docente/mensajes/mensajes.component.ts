import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {
mensajes:any;
  constructor() {
    this.mensajes=[
      {origen:"Cid	Farias,	CATALINA MIA",
      content:"Como se a portado mi hijo?",
      fecha:"18/03/2018",
      respondido:"Contestado"},
      {origen:"Espinoza Garrido, JAVIERA JOSEFINA",
      content:"mi hijo a estado enfermo, para que me avise cualquier cosa",
      fecha:"05/03/2018",
      respondido:"Contestado"},
      {origen:"Moya Jara, AMANDA RAYEN",
      content:"e notado a mi hijo decaido, usted a notado algun cambio?",
      fecha:"15/03/2018",
      respondido:"Contestar"}
    ]
   }

  ngOnInit() {
  }

}
