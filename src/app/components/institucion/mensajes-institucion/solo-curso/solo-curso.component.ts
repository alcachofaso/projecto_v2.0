import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solo-curso',
  templateUrl: './solo-curso.component.html',
  styleUrls: ['./solo-curso.component.css']
})
export class SoloCursoComponent implements OnInit {
  niveles:string[];
  identificadores:string[];
  constructor() {
    this.niveles=["1° Basico","2° Basico","3° Basico","4° Basico","5° Basico","6° Basico","7° Basico","8° Basico"];
    this.identificadores=["A","B","C","D",];
   }

  ngOnInit() {
  }

}
