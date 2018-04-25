import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent implements OnInit {


  cursos:string[];
  alumnos:any;
  asignaturas:string[];
  nombreEv:string[];


  constructor() { 


    this.cursos=[
      "1° Basico A",
      "1° Basico B",
      "1° Basico C",
      "1° Basico D",
    ];
    this.alumnos=[
      {nombre:"Canales	Cruz, MATIAS BASTIAN",
      nota:5},

      {nombre:"Castillo Diaz, JOAQUIN JUAN",
       nota:7},

      {nombre:"Cid	Farias,	CATALINA MIA",
      nota:3.5},

       {nombre:"Contreras Flores, FERNANDA GABRIELA",
      nota:4.5},

      {nombre:"Cortes Gajardo, CONSTANZA BARBARA",
      nota:4},

      {nombre:"Espinoza Garrido, JAVIERA JOSEFINA",
      nota:2},

      {nombre: "Fuenzalida Guajardo, MAITE MATILDE",
      nota:5},

      {nombre: "Garcia Gutierrez, MARIA ANAHIS",
    nota:6.7},

    {nombre: "Mella Ibarra, JOSEFA THIARE",
    nota:5.6},

    {nombre: "Moya Jara, AMANDA RAYEN",
    nota:4.8},
    
    {nombre:  "Perez Lara, CAMILA GENESIS",
    nota:7},

    {nombre:  "Quiroz Leon, DANIEL	IGNACIO",
    nota:6.7},

    {nombre:"Rivera Lopez, LUIS FRANCISCO",
    nota:4.8},

    {nombre:"Soto Mardones, GASPAR RENATO",
    nota:5.9},

    {nombre:"Ulloa Medina, ANGEL	MAXIMO",
    nota:5},

    {nombre:"Valdivia Godoy,	FERNANDO MATEO",
    nota:5.7},

    {nombre:"Varas Gonzalez,	CARLOS JAVIER",
    nota:4.6},

    {nombre:"Venegas	Gonzalez, EMILIO DANIEL",
    nota:3.9}
    ];
    this.asignaturas=[
      "Matematicas",
      "Musica"
    ];
    this.nombreEv=[
        "Prueba N°1",
        "Prueba N°2",
        "Control Lectura N°1"
    ];


  }

  ngOnInit() {
  }

}
