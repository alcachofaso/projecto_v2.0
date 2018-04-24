import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solo-nivel',
  templateUrl: './solo-nivel.component.html',
  styleUrls: ['./solo-nivel.component.css']
})
export class SoloNivelComponent implements OnInit {

  niveles:string[];

  constructor() { 
    this.niveles=["1° Basico","2° Basico","3° Basico","4° Basico","5° Basico","6° Basico","7° Basico","8° Basico"];

  }

  ngOnInit() {
  }

}
