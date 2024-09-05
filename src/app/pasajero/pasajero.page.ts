import { Component, inject, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {
  alertSrv = inject(AlertController);
  navController = inject(NavController);

  constructor() { }

  ngOnInit() {
  }
  async mostrarAlerta() {
    const alert = await this.alertSrv.create({
      header: 'Viaje Solicitado',
      message: 'Ya se ha solicitado el viaje.',
      buttons: [
        {
          text: 'ok'
        }

      ]
      
    });
  this.navController.navigateRoot('home')
    await alert.present();
  }
  
  async volver(){
    this.navController.pop();
  }
}
