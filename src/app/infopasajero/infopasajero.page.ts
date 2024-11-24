import { Component, inject, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-infopasajero',
  templateUrl: './infopasajero.page.html',
  styleUrls: ['./infopasajero.page.scss'],
})
export class InfopasajeroPage implements OnInit {
  alertSrv = inject(AlertController);
  navController = inject(NavController);
  constructor() { }

  ngOnInit() {
  }

  async mostrarAlerta() {
    const alert = await this.alertSrv.create({
      header: 'Solicitud aceptada',
      message: 'Ya se ha aceptado la solicitud.',
      buttons: [
        {
          text: 'ok'
        }

      ]
      
    });
  this.navController.navigateRoot('inicio')
    await alert.present();
  }
  
  async volver(){
    this.navController.pop();
  }

}
