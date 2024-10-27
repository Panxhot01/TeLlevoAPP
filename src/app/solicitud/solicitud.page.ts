import { Component, inject, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.page.html',
  styleUrls: ['./solicitud.page.scss'],
})
export class SolicitudPage implements OnInit {

  alertSrv=inject(AlertController);
  navController=inject(NavController);

  solicitudes = [
    {nombre: 'Alejandra Morales', Destino: 'Maipu' },
    {nombre: 'Alfonso Castillo', Destino: 'Maipu'},
    {nombre: 'Antonia Lopez', Destino: 'Maipu'},
    {nombre: 'David Soto', Destino: 'Maipu'}
  ]

  constructor() { }

  ngOnInit() {
  }


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


  


}
