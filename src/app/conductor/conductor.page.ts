import { Component, inject, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {
  alertSrv = inject(AlertController);
  navController = inject(NavController);
  

  constructor() { }

  ngOnInit() {
  }
  async mostrarAlerta() {
    const alert = await this.alertSrv.create({
      header: 'Viaje Creado',
      message: 'Has creado un viaje.',
      buttons: [
        {
          text: 'ok'
        }

      ]
      
    });
  this.navController.navigateRoot('inicio')
    await alert.present();
  }
  

  

}
