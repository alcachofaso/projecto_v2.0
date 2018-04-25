import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajes-psicopeda',
  templateUrl: './mensajes-psicopeda.component.html',
  styleUrls: ['./mensajes-psicopeda.component.css']
})
export class MensajesPsicopedaComponent implements OnInit {
  mensajes:any;
  constructor() {
    this.mensajes=[
      {origen:"Rivera Lopez, LUIS FRANCISCO",
      content:"a pesar de haber estudiado, a mi hijo le fue mal en una prueba, de que forma podria ayudarlo?",
      fecha:"18/03/2018",
      respondido:"Contestar",
      curso:"3°Basico A"},
      {origen:"Soto Mardones, GASPAR RENATO",
      content:"mi hijo a bajado sus notas en el ultimo mes, que hago?",
      fecha:"05/03/2018",
      respondido:"Contestado",
      curso:"2° Basico C"},
      {origen:"Venegas	Gonzalez, EMILIO DANIEL",
      content:"de que manera tengo que ayudar a mi hijo a estudiar?",
      fecha:"15/03/2018",
      respondido:"Contestar",
      curso:"4° Basico A"}
    ]
   }
  ngOnInit() {
  }

}
