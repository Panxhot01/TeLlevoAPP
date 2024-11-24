import { Component, inject, OnInit } from '@angular/core';
<<<<<<< HEAD
import { UtilsService } from '../services/utils.service';
import { AddUpdateComponent } from '../shared/components/add-update/add-update.component';
import { FirebaseService } from '../services/firebase.service';
import { User } from 'firebase/auth';
import { Viajes } from '../models/viajes.model';
=======
import { AlertController, NavController } from '@ionic/angular';
>>>>>>> d23a56fe0694267a1ac22e4928cbab3993523980

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

<<<<<<< HEAD
  utilsSvc = inject(UtilsService);
  firebaseSvc = inject(FirebaseService);
  viajes: Viajes[]=[];
=======
  
>>>>>>> d23a56fe0694267a1ac22e4928cbab3993523980

  constructor() { }

  ngOnInit() {
  }
<<<<<<< HEAD
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
=======
  

  
>>>>>>> d23a56fe0694267a1ac22e4928cbab3993523980

}
