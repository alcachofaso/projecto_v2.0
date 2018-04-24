import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-docente-institucion',
  templateUrl: './home-docente-institucion.component.html',
  styleUrls: ['./home-docente-institucion.component.css']
})
export class HomeDocenteInstitucionComponent implements OnInit {
  profesores:string[];
  asignaturas:string[];
  constructor() { 
    this.profesores=[
      "Mella Ibarra, JOSEFA THIARE",
    "Moya Jara, AMANDA RAYEN",
    "Perez Lara, CAMILA GENESIS",
    "Quiroz Leon, DANIEL	IGNACIO",
    "Rivera Lopez, LUIS FRANCISCO",
    "Soto Mardones, GASPAR RENATO",
    "Ulloa Medina, ANGEL	MAXIMO",
    "Valdivia Godoy,	FERNANDO MATEO",
    "Varas Gonzalez,	CARLOS JAVIER",
    "Venegas	Gonzalez, EMILIO DANIEL"
    ];
    this.asignaturas=[
      "Matematicas",
      "Historia",
      "Lenguaje y Comunicaciones",
      "Qumica",
      "Fisica",
      "Religion",
      "Musica",
      "Artes Plasticas",
      "Filosofia",
      "Educación Fisica",
      "Todas las Asignaturas"
    ]
  }
mensaje(tipo:string){
  alert(tipo);
}
  ngOnInit() {
  }

}
