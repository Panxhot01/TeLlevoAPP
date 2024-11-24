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
  selector: 'app-solicitud',
  templateUrl: './solicitud.page.html',
  styleUrls: ['./solicitud.page.scss'],
})
export class SolicitudPage implements OnInit {
<<<<<<< HEAD
 
  utilsSvc = inject(UtilsService);
  firebaseSvc = inject(FirebaseService);
  viajes: Viajes[]=[];

=======

  alertSrv=inject(AlertController);
  navController=inject(NavController);

  solicitudes = [
    {nombre: 'Alejandra Morales', Destino: 'Maipu' },
    {nombre: 'Alfonso Castillo', Destino: 'Maipu'},
    {nombre: 'Antonia Lopez', Destino: 'Maipu'},
    {nombre: 'David Soto', Destino: 'Maipu'}
  ]
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
        this.viajes = res;
       sub.unsubscribe();
      }
    })
  }

  

=======


  async eliminarSolicitud(solicitud: any) {
    this.solicitudes = this.solicitudes.filter(s => s !== solicitud);
  }

  async aceptarSolicitud(solicitud:any){
    const alert = await this.alertSrv.create({
      header: 'Aceptada',
      message: `Solicitud aceptada de ${solicitud.nombre}.`,
      buttons: ['OK']
      
    });
    await alert.present();
    this.eliminarSolicitud(solicitud); 
  }

  async rechazarSolicitud(solicitud: any) {
    const alert = await this.alertSrv.create({
      header: 'Solicitud rechazada',
      message: `Has rechazado la solicitud de ${solicitud.nombre}.`,
      buttons: ['OK']
    });

    await alert.present();
    this.eliminarSolicitud(solicitud); 
  }


  


>>>>>>> d23a56fe0694267a1ac22e4928cbab3993523980
}
