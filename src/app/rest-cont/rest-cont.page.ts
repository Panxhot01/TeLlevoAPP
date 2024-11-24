import { Component, inject ,OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-rest-cont',
  templateUrl: './rest-cont.page.html',
  styleUrls: ['./rest-cont.page.scss'],
})
export class RestContPage implements OnInit {
  alertSrv = inject(AlertController);
  navController = inject(NavController);
  constructor() { }

  ngOnInit() {
  }
  async mostrarAlerta() {
    const alert = await this.alertSrv.create({
      header: 'Comprueba tu correo electrónico',
      message: 'Recibirás un correo electrónico para realizar el cambio de contraseña',
      buttons: [
        {
          text: 'ok'
        }

      ]
      
    });
  this.navController.navigateRoot('home')
    await alert.present();
  }
  

}