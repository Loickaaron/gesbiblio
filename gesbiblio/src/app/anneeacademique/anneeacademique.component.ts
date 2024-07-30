import { Component, OnInit } from '@angular/core';
import { AnneeAcademiqueService } from '../services/annee-academique.service';

@Component({
  selector: 'app-anneeacademique',
  templateUrl: './anneeacademique.component.html',
  styleUrls: ['./anneeacademique.component.css']
})
export class AnneeacademiqueComponent implements OnInit {

  anneeAcademinique = {
    id: 0,
    code: "",
    libelle: ""
  };

  anneeAcademiquesList: any[] = [];

  constructor(
    private anneeAcademiqueService: AnneeAcademiqueService,
  ) { 

  }

  ngOnInit(): void {
    this.anneeAcademiqueService.getAll().subscribe(
      (data) => {
        this.anneeAcademiquesList = data;
        console.log('data ===', data.length);
      })

  }


  enregistrer(): void {
    if(this.anneeAcademinique.code == "" || this.anneeAcademinique.libelle == "") {
        alert("Champs vides ")
    } else {
       if(this.anneeAcademinique.id == 0) {
          this.anneeAcademinique.id = this.getMaxId();
          this.anneeAcademiqueService.create(this.anneeAcademinique).subscribe(
            (data) => {
                this.anneeAcademiquesList.unshift(data);
            });
            this.anneeAcademinique = {
              id: 0,
              code: "",
              libelle: ""
            };
          
       } else {
        const i = this.anneeAcademiquesList.findIndex((element) => element.id == this.anneeAcademinique.id);
        this.anneeAcademiqueService.update(this.anneeAcademinique.id.toString(), this.anneeAcademinique).subscribe(
          (data) => {
              this.anneeAcademiquesList[i] = this.anneeAcademinique;
          });
         
          
       }
    }
  }

  editer(element: any): void {
    this.anneeAcademinique = element;
    console.log(this.anneeAcademinique);
  }

  getMaxId(): number {
    let id = 0;
    this.anneeAcademiquesList.forEach((element)  => {
      if(element.id > id) {
        id = element.id;
      }
    });
    return (id + 1);
  }

  deleteElement(element: any): void {
    
    const i = confirm("VOUSLEZ-VOUS SUPPRIMER "+element.libelle+" ?");
    if(i == true) {
      const j = this.anneeAcademiquesList.findIndex((element) => element.id == this.anneeAcademinique.id);
      this.anneeAcademiquesList.splice(j, 1);
      this.anneeAcademiqueService.delete(element.id).subscribe()
    }
  }

}
