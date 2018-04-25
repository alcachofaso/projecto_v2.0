import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-inicio-curso',
  templateUrl: './inicio-curso.component.html',
  styleUrls: ['./inicio-curso.component.css']
})
export class InicioCursoComponent implements OnInit {

  public cursos:any;
  
  constructor() {
    this.cursos=[{
        nivel:'1° Basico ',
        identificador:'A',
        pJefe:'Ulloa Medina, Angel  Maximo',
        cAlumnos:'15',},
        {nivel:'1° Basico ',
        identificador:'B',
        pJefe:'Moya Jara, Amanda Rayen',
        cAlumnos:'20',},
        {nivel:'1° Basico ',
        identificador:'C',
        pJefe:'Venegas  Gonzalez, Emilio Daniel ',
        cAlumnos:'18',},
        {nivel:'1° Basico ',
        identificador:'D',
        pJefe:'Perez Lara, Camila Genesis',
        cAlumnos:'22',},
        {nivel:'2° Basico ',
        identificador:'A',
        pJefe:'Valdivia Godoy,  Fernando Mateo',
        cAlumnos:'25',},
        {nivel:'2° Basico ',
        identificador:'B',
        pJefe:'Espinoza Garrido, Javiera Josefina',
        cAlumnos:'23',},
        {nivel:'2° Basico ',
        identificador:'C',
        pJefe:'Garcia Gutierrez, Maria Anahis',
        cAlumnos:'19',},
        {nivel:'2° Basico ',
        identificador:'D',
        pJefe:'Castillo Diaz, Joaquin Juan',
        cAlumnos:'20',}];
   }

  ngOnInit() {
  }

}