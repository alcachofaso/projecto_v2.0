import { Component, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';

@Component({
  selector: 'app-inicio-docente',
  templateUrl: './inicio-docente.component.html',
  styleUrls: ['./inicio-docente.component.css']
})
export class InicioDocenteComponent implements OnInit {
  alumnos:any;
  constructor() { 
    this.alumnos=[
      {nombre:"Canales	Cruz, MATIAS BASTIAN",
      nota:"enlazado"},

      {nombre:"Castillo Diaz, JOAQUIN JUAN",
       nota:"enlazado"},

      {nombre:"Cid	Farias,	CATALINA MIA",
      nota:"enlazado"},

       {nombre:"Contreras Flores, FERNANDA GABRIELA",
      nota:"Sin Apoderado"},

      {nombre:"Cortes Gajardo, CONSTANZA BARBARA",
      nota:"enlazado"},

      {nombre:"Espinoza Garrido, JAVIERA JOSEFINA",
      nota:"enlazado"},

      {nombre: "Fuenzalida Guajardo, MAITE MATILDE",
      nota:"Sin Apoderado"},

      {nombre: "Garcia Gutierrez, MARIA ANAHIS",
    nota:"enlazado"},

    {nombre: "Mella Ibarra, JOSEFA THIARE",
    nota:"enlazado"},

    {nombre: "Moya Jara, AMANDA RAYEN",
    nota:"enlazado"},
    
    {nombre:  "Perez Lara, CAMILA GENESIS",
    nota:"Sin Apoderado"},

    {nombre:  "Quiroz Leon, DANIEL	IGNACIO",
    nota:"enlazado"},

    {nombre:"Rivera Lopez, LUIS FRANCISCO",
    nota:"enlazado"},

    {nombre:"Soto Mardones, GASPAR RENATO",
    nota:"enlazado"},

    {nombre:"Ulloa Medina, ANGEL	MAXIMO",
    nota:"Sin Apoderado"},

    {nombre:"Valdivia Godoy,	FERNANDO MATEO",
    nota:"enlazado"},

    {nombre:"Varas Gonzalez,	CARLOS JAVIER",
    nota:"Sin Apoderado"},

    {nombre:"Venegas	Gonzalez, EMILIO DANIEL",
    nota:"Sin Apoderado"}
    ];
  }

  ngOnInit() {
  }

}
