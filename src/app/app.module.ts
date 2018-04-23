import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

//components
import { DocenteComponent } from './components/docente/docente.component';
import { InstitucionComponent } from './components/institucion/institucion.component';
import { PsicologoComponent } from './components/psicologo/psicologo.component';
import { PsicopedaComponent } from './components/psicopeda/psicopeda.component';
import { SistemaComponent } from './components/sistema/sistema.component';
import { DocenteInstitucionComponent } from './components/institucion/docente-institucion/docente-institucion.component';
import { EstudianteInstitucionComponent } from './components/institucion/estudiante-institucion/estudiante-institucion.component';
import { InformacionInstitucionComponent } from './components/institucion/informacion-institucion/informacion-institucion.component';
import { InicioInstitucionComponent } from './components/institucion/inicio-institucion/inicio-institucion.component';

//Routing
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    DocenteComponent,
    InstitucionComponent,
    PsicologoComponent,
    PsicopedaComponent,
    SistemaComponent,
    DocenteInstitucionComponent,
    EstudianteInstitucionComponent,
    InformacionInstitucionComponent,
    InicioInstitucionComponent,
  ],
  imports: [
    BrowserModule,
    
    //routing
    RouterModule.forRoot([
      {path: 'Sistema', component: SistemaComponent},
      {path: 'Insitucion', component: InstitucionComponent},
      {path: 'Psicopedagogo', component: PsicopedaComponent},
      {path: 'Docente', component: DocenteComponent},
      {path: 'Psicologo', component: PsicologoComponent}
     /* {path: "**", redirectTo: "/"},
      {path: "", redirectTo: "/"}*/
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
