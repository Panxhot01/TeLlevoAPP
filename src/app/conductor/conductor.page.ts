import { Component, inject, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';
import { AddUpdateComponent } from '../shared/components/add-update/add-update.component';
import { FirebaseService } from '../services/firebase.service';
import { User } from 'firebase/auth';
import { Viajes } from '../models/viajes.model';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

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
        console.log(res);
        this.viajes = res;
       sub.unsubscribe();
      }
    })
  }

  // == Agregar o actulizar producto ==
  addUpdate(){
    this.utilsSvc.presentModal({
      component: AddUpdateComponent,
      cssClass: 'add-update-modal'
    })
  }

}
