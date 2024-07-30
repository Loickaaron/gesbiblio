import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiliereComponent } from './filiere/filiere.component';
import { AnneeacademiqueComponent } from './anneeacademique/anneeacademique.component';
import { NiveauetudeComponent } from './niveauetude/niveauetude.component';
import { EnseignantComponent } from './enseignant/enseignant.component';

const routes: Routes = [
  { path: 'configuration/filiere', component: FiliereComponent},
 {path: 'configuration/anneeacademique', component:AnneeacademiqueComponent},
 {path: 'configuration/niveauetude', component:NiveauetudeComponent}, 
 {path : 'configuration/Enseignant', component: EnseignantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
