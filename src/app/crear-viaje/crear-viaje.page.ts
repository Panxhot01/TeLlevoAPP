import { Component, inject, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.page.html',
  styleUrls: ['./crear-viaje.page.scss'],
})
export class CrearViajePage implements OnInit {

  nombre: string = '';
  apellido: string = '';
  comuna:string = '';
  capacidad:number = 0;
  precio:number = 0;

  alertSrv = inject(AlertController);
  navController = inject(NavController);
  constructor() { }

  ngOnInit() {
  }

  async crearViaje() {
    if (!this.nombre || this.apellido ||this.comuna || this.capacidad <= 0 || this.precio <= 0)
      {
        const alert = await this.alertSrv.create({
          header: 'Error',
          message: 'Todos los campos son obligatorios.',
          buttons: ['OK']
        });
        await alert.present();
        return;
      }
  
    
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
