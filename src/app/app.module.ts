import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

//Routing
import { RouterModule } from '@angular/router';


//components

//Docentes
import { DocenteComponent } from './components/docente/docente.component';
import { AtrasosComponent } from './components/docente/atrasos/atrasos.component';
import { EnviarNotaComponent } from './components/docente/notas/enviar-nota/enviar-nota.component';
import { EditarNotaComponent } from './components/docente/notas/editar-nota/editar-nota.component';
import { EnviarTareaComponent } from './components/docente/tareas/enviar-tarea/enviar-tarea.component';
import { ModificarTareaComponent } from './components/docente/tareas/modificar-tarea/modificar-tarea.component';
import { HistorialComponent } from './components/docente/comunicado/historial/historial.component';
import { CursoComunicadoComponent } from './components/docente/comunicado/curso-comunicado/curso-comunicado.component';
import { ApoderadoComunicadoComponent } from './components/docente/comunicado/apoderado-comunicado/apoderado-comunicado.component';
import { MensajesComponent } from './components/docente/mensajes/mensajes.component';

//Institucion
import { InstitucionComponent } from './components/institucion/institucion.component';

import { InformacionInstitucionComponent } from './components/institucion/informacion-institucion/informacion-institucion.component';
import { InicioInstitucionComponent } from './components/institucion/inicio-institucion/inicio-institucion.component';
import { MensajesInstitucionComponent } from './components/institucion/mensajes-institucion/mensajes-institucion.component';
import { SoloCursoComponent } from './components/institucion/mensajes-institucion/solo-curso/solo-curso.component';
import { SoloNivelComponent } from './components/institucion/mensajes-institucion/solo-nivel/solo-nivel.component';
import { ComunidadCompletaComponent } from './components/institucion/mensajes-institucion/comunidad-completa/comunidad-completa.component';
import { ApoderadoParticularComponent } from './components/institucion/mensajes-institucion/apoderado-particular/apoderado-particular.component';
import { InicioEstudianteComponent } from './components/institucion/estudiante-institucion/inicio-estudiante/inicio-estudiante.component';
import { AsignarEstudianteComponent } from './components/institucion/estudiante-institucion/asignar-estudiante/asignar-estudiante.component';
import { AgregarEstudianteComponent } from './components/institucion/estudiante-institucion/agregar-estudiante/agregar-estudiante.component';
import { CrearCursoComponent } from './components/institucion/curso-institucion/crear-curso/crear-curso.component';
import { HomeDocenteInstitucionComponent } from './components/institucion/docente-institucion/home-docente-institucion/home-docente-institucion.component';
import { AgregarDocenteInstitucionComponent } from './components/institucion/docente-institucion/agregar-docente-institucion/agregar-docente-institucion.component';
import { InicioCursoComponent } from './components/institucion/curso-institucion/inicio-curso/inicio-curso.component';


//Psicologo
import { PsicologoComponent } from './components/psicologo/psicologo.component';


//PSicopedagogo
import { PsicopedaComponent } from './components/psicopeda/psicopeda.component';


//Sistema
import { SistemaComponent } from './components/sistema/sistema.component';
import { InicioDocenteComponent } from './components/docente/inicio-docente/inicio-docente.component';
import { HomeComponent } from './components/home/home/home.component';
import { QuienesSomosComponent } from './components/home/quienes-somos/quienes-somos.component';
import { ContactoComponent } from './components/home/contacto/contacto.component';



@NgModule({
  declarations: [
    AppComponent,
    //Docentes//
    DocenteComponent,
    AtrasosComponent,
    EnviarNotaComponent,
    EditarNotaComponent,
    EnviarTareaComponent,
    ModificarTareaComponent,
    HistorialComponent,
    CursoComunicadoComponent,
    ApoderadoComunicadoComponent,
    MensajesComponent,
    InicioDocenteComponent,
    //-----------//

    InstitucionComponent,
    PsicologoComponent,
    PsicopedaComponent,
    SistemaComponent,
    InformacionInstitucionComponent,
    InicioInstitucionComponent,
    MensajesInstitucionComponent,
    SoloCursoComponent,
    SoloNivelComponent,
    ComunidadCompletaComponent,
    ApoderadoParticularComponent,
    InicioEstudianteComponent,
    AsignarEstudianteComponent,
    AgregarEstudianteComponent,
    CrearCursoComponent,
    HomeDocenteInstitucionComponent,
    AgregarDocenteInstitucionComponent,
    InicioCursoComponent,
    HomeComponent,
    QuienesSomosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    
    //routing
    RouterModule.forRoot([
      {path: '', component: AppComponent,
      children:[
        {path: '', component: HomeComponent},
        {path: 'QuienesSomos', component: QuienesSomosComponent},
        {path: 'Contacto', component: ContactoComponent},
      ]},





      //Sistema
      {path: 'Sistema', component: SistemaComponent},

      //Administrador Institucion
      {path: 'Institucion', component: InstitucionComponent ,
      children:[
      {path: '', component: InicioInstitucionComponent},
      {path: 'Docentes/Listado', component: HomeDocenteInstitucionComponent},
      {path: 'Docentes/Nuevo', component: AgregarDocenteInstitucionComponent},
      {path: 'Cursos/Listado', component: InicioCursoComponent},
      {path: 'Cursos/Nuevo', component: CrearCursoComponent},
      {path: 'Estudiante/Listado', component: InicioEstudianteComponent},
      {path: 'Estudiante/Nuevo', component: AgregarEstudianteComponent},
      {path: 'Informacion', component: InformacionInstitucionComponent},
      {path: 'Comunicados', component: MensajesInstitucionComponent},
      {path: 'Comunicados/Curso', component: SoloCursoComponent},
      {path: 'Comunicados/Nivel', component: SoloNivelComponent},
      {path: 'Comunicados/comunidad', component: ComunidadCompletaComponent},
      {path: 'Comunicados/apoderado', component: ApoderadoParticularComponent},
      ]
    },


      //Psicopedagogo
      {path: 'Psicopedagogo', component: PsicopedaComponent},

      //Docente
      {path: 'Docentes', component: DocenteComponent,
      children:[
        {path: '', component: InicioDocenteComponent},
        {path: 'Notas/Envio', component: EnviarNotaComponent},
        {path: 'Notas/Modificar', component: EditarNotaComponent},
        {path: 'Tareas/Envio', component: EnviarTareaComponent},
        {path: 'Tareas/Modificar', component: ModificarTareaComponent},
        {path: 'Comunicados/Historial', component: HistorialComponent},
        {path: 'Comunicados/Curso', component: CursoComunicadoComponent},
        {path: 'Comunicados/Apoderado', component: ApoderadoComunicadoComponent},
        {path: 'Mensajes', component: MensajesComponent},
        {path: 'Atrasos', component: AtrasosComponent}
      ]},

      //Psicologo
      {path: 'Psicologo', component: PsicologoComponent}
     /* {path: "**", redirectTo: "/"},
      {path: "", redirectTo: "/"}*/
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
