import { Component, OnInit } from '@angular/core';
import { PublicFeature } from '@angular/core/src/render3';

@Component({
  selector: 'app-mensajes-institucion',
  templateUrl: './mensajes-institucion.component.html',
  styleUrls: ['./mensajes-institucion.component.css']
})


export class MensajesInstitucionComponent implements OnInit {

  mensajes:mensaje[];

  men:mensaje;

  constructor(){
    this.men.titulo="Suspención de Clases";
    this.men.fecha="12/03/2018";
    this.men.contenido="Por motivos de fuerza mayor el dia 13 de marzo no habran actividades academicas.";
    this.men.destinatario="Comunidad";
    this.mensajes.push(this.men);
    this.men=null;
    this.men.titulo="colecta benefica";
    this.men.fecha="08/03/2018";
    this.men.contenido="Colecta en ayuda de alguien";
    this.men.destinatario="8° basico";
    this.mensajes.push(this.men);
  }

  ngOnInit() {
    
  }
  

}
class mensaje{
  titulo:string;
  fecha:string;
  contenido:string;
  destinatario:string
}