import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificar-tarea',
  templateUrl: './modificar-tarea.component.html',
  styleUrls: ['./modificar-tarea.component.css']
})
export class ModificarTareaComponent implements OnInit {
  cursos:string[];
  asignaturas:string[];
  tareas:any;
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
    ];
    this.tareas=[
      {
        descripcion:"multiplicaciones basicas",
        arcivo:"multiplicaciones1.pdf"
      },
      {
        descripcion:"multiplicaciones de fracciones",
        arcivo:"multiplicaciones3.pdf"
      },
      {
        descripcion:"diviciones basicas",
        arcivo:"diviciones1.pdf"
      }
    ]
  }
  ngOnInit() {
  }

}
