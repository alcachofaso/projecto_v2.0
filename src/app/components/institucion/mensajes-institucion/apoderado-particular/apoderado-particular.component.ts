import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apoderado-particular',
  templateUrl: './apoderado-particular.component.html',
  styleUrls: ['./apoderado-particular.component.css']
})
export class ApoderadoParticularComponent implements OnInit {
  lista:string[];
  niveles:string[];
  identificadores:string[];
  constructor() {  
    this.lista=['Abarca Alvarado, MARTINA RENATA',
    "Abarca Baeza, SOFIA MAGDALENA",
    "Aguilar Calderon, FLORENCIA ISABELLA",
    "Barra Carrasco, VALENTINA MATILDA",
    "Bravo Chavez, VICENTE LUCAS",
    "Cabrera	Contreras, MARTIN ALONSO",
    "Canales	Cruz, MATIAS BASTIAN",
    "Castillo Diaz, JOAQUIN JUAN",
    "Cid	Farias,	CATALINA MIA",
    "Contreras Flores, FERNANDA GABRIELA",
    "Cortes Gajardo, CONSTANZA BARBARA",
    "Espinoza Garrido, JAVIERA JOSEFINA",
    "Fuenzalida Guajardo, MAITE MATILDE",
    "Garcia Gutierrez, MARIA ANAHIS",
    "Gonzales Henriquez,	FRANCISCA PASCAL",
    "Guzman Hidalgo,	AGUSTINA PAULA",
    "Mella Ibarra, JOSEFA THIARE",
    "Moya Jara, AMANDA RAYEN",
    "Perez Lara, CAMILA GENESIS",
    "Quiroz Leon, DANIEL	IGNACIO",
    "Rivera Lopez, LUIS FRANCISCO",
    "Soto Mardones, GASPAR RENATO",
    "Ulloa Medina, ANGEL	MAXIMO",
    "Valdivia Godoy,	FERNANDO MATEO",
    "Varas Gonzalez,	CARLOS JAVIER",
    "Venegas	Gonzalez, EMILIO DANIEL",
    "Vidal Guerrero,	FRANCO LUIS",
    "Villegas Hernandez, PIA PIA"];
    this.niveles=["1° Basico","2° Basico","3° Basico","4° Basico","5° Basico","6° Basico","7° Basico","8° Basico"];
    this.identificadores=["A","B","C","D",];
  }

  ngOnInit() {
  }

}
