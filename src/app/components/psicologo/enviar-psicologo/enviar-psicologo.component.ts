import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enviar-psicologo',
  templateUrl: './enviar-psicologo.component.html',
  styleUrls: ['./enviar-psicologo.component.css']
})
export class EnviarPsicologoComponent implements OnInit {
  public mensajes;

  constructor() {
    this.mensajes=[ 
      {origen:"Cid	Farias,	CATALINA MIA",
      content:"Agalo sentir que usted esta interesada en sus problemas, para que se sienta apoyado",
      fecha:"18/03/2018",
      respondido:"mi hijo a estado desanimado despues de una prueba, que puedo hacer para ayudarlo?",
      curso:"3°Basico A"},
      {origen:"Espinoza Garrido, JAVIERA JOSEFINA",
      content:"Agalo sentir que usted esta interesada en sus problemas, para que se sienta apoyado",
      fecha:"05/03/2018",
      respondido:"mi hijo a bajado sus notas y se a puesto muy violento, qyue devo hacer?",
      curso:"2° Basico C"},
      {origen:"Moya Jara, AMANDA RAYEN",
      content:"Solicito una reunión para hablar hacerca del comportamiento de su hijo",
      fecha:"15/03/2018",
      respondido:"",
      curso:"4° Basico A"}
    ]
   }

  ngOnInit() {
  }

}
