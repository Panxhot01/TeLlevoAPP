import { Component, inject, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';
import { AddUpdateComponent } from '../shared/components/add-update/add-update.component';
import { FirebaseService } from '../services/firebase.service';
import { User } from 'firebase/auth';
import { Viajes } from '../models/viajes.model';
@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.page.html',
  styleUrls: ['./solicitud.page.scss'],
})
export class SolicitudPage implements OnInit {
 
  utilsSvc = inject(UtilsService);
  firebaseSvc = inject(FirebaseService);
  viajes: Viajes[]=[];


  constructor() { }

  ngOnInit() {
  }
  user(): User{
    return this.utilsSvc.getFromLocalStorage('user');
  }

  ionViewWillEnter(){
    this.getProducts();
  }

  getProducts(){
    let path =`viajes/${this.user().uid}/viajes`;

    let sub = this.firebaseSvc.getCollectionData(path).subscribe({
      next: (res: any) =>{
        this.viajes = res;
       sub.unsubscribe();
      }
    })
  }

  

}
