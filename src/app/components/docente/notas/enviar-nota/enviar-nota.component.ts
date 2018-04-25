import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enviar-nota',
  templateUrl: './enviar-nota.component.html',
  styleUrls: ['./enviar-nota.component.css']
})
export class EnviarNotaComponent implements OnInit {
  cursos:string[];
  alumnos:string[];
  asignaturas:string[];
  constructor() { 
    this.cursos=[
      "1° Basico A",
      "1° Basico B",
      "1° Basico C",
      "1° Basico D",
    ]
    this.alumnos=[
      "Canales	Cruz, MATIAS BASTIAN",
    "Castillo Diaz, JOAQUIN JUAN",
    "Cid	Farias,	CATALINA MIA",
    "Contreras Flores, FERNANDA GABRIELA",
    "Cortes Gajardo, CONSTANZA BARBARA",
    "Espinoza Garrido, JAVIERA JOSEFINA",
    "Fuenzalida Guajardo, MAITE MATILDE",
    "Garcia Gutierrez, MARIA ANAHIS",
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
      "Musica"
    ]
  }

  ngOnInit() {
  }

}
