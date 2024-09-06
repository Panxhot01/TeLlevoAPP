import { Component, inject, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-info-cond',
  templateUrl: './info-cond.page.html',
  styleUrls: ['./info-cond.page.scss'],
})
export class InfoCondPage implements OnInit {
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
  this.navController.navigateRoot('inicio')
    await alert.present();
  }
  
  async volver(){
    this.navController.pop();
  }

}
