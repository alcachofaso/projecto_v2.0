import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-docente-institucion',
  templateUrl: './agregar-docente-institucion.component.html',
  styleUrls: ['./agregar-docente-institucion.component.css']
})
export class AgregarDocenteInstitucionComponent implements OnInit {
  asignaturas:string[];
  cursos:string[];
  constructor() {
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
    ];
    this.cursos=[
      '1° Basico A',
      '1° Basico B',
      '1° Basico C',
      '1° Basico D',
      '2° Basico A',
      '2° Basico B',
      '2° Basico C',
      '2° Basico D',
      '3° Basico A',
      '3° Basico B',
      '3° Basico C',
      '3° Basico D',
      '4° Basico A',
      '4° Basico B',
      '4° Basico C',
      '4° Basico D',
      '5° Basico A',
      '5° Basico B',
      '5° Basico C',
      '5° Basico D',
      '6° Basico A',
      '6° Basico B',
      '6° Basico C',
      '6° Basico D',
      '7° Basico A',
      '7° Basico B',
      '7° Basico C',
      '7° Basico D',
      '8° Basico A',
      '8° Basico B',
      '8° Basico C',
      '8° Basico D'
    ]
   }

  ngOnInit() {
  }

}
