import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiliereComponent } from './filiere/filiere.component';
import { RouterModule } from '@angular/router';
import { AnneeacademiqueComponent } from './anneeacademique/anneeacademique.component';
import { NiveauetudeComponent } from './niveauetude/niveauetude.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { MaBibliothequeComponent } from './ma-bibliotheque/ma-bibliotheque.component';

@NgModule({
  declarations: [
    AppComponent,
    FiliereComponent,
    AnneeacademiqueComponent,
    NiveauetudeComponent,
    EnseignantComponent,
    MaBibliothequeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
