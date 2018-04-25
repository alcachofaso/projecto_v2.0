import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enviar-tarea',
  templateUrl: './enviar-tarea.component.html',
  styleUrls: ['./enviar-tarea.component.css']
})
export class EnviarTareaComponent implements OnInit {
  cursos:string[];
  asignaturas:string[];
  constructor() { 
    this.cursos=[
      "1° Basico A",
      "1° Basico B",
      "1° Basico C",
      "1° Basico D",
    ]
    this.asignaturas=[
      "Matematicas",
      "Musica"
    ]}

  ngOnInit() {
  }

}
