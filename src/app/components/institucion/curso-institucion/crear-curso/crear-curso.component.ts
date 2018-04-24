import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {
  profesores:string[];
  alumnos:string[];
  cursos:string[];
  identificador:string[];
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
    this.alumnos=[
      "Canales	Cruz, MATIAS BASTIAN",
    "Castillo Diaz, JOAQUIN JUAN",
    "Cid	Farias,	CATALINA MIA",
    "Contreras Flores, FERNANDA GABRIELA",
    "Cortes Gajardo, CONSTANZA BARBARA",
    "Espinoza Garrido, JAVIERA JOSEFINA",
    "Fuenzalida Guajardo, MAITE MATILDE",
    "Garcia Gutierrez, MARIA ANAHIS"
    ];
    this.cursos=[
      "Pre Kinder",
      "Kinder",
      "1° Basico",
      "2° Basico",
      "3° Basico",
      "4° Basico",
      "5° Basico",
      "6° Basico",
      "7° Basico",
      "8° Basico",
    ];
    this.identificador=[
      "A","B","C","D","E","F","E"
    ]
   }

  ngOnInit() {
  }

}
