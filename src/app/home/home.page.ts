import { Component, inject, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email = '';
  password = '';

  toastSrv = inject(ToastController);
  loginSrv = inject(LoginService);
  nav = inject(NavController);

  constructor() {}

  ngOnInit() {
  }

  async ingresar(){
    try {
      await this.loginSrv.login(this.email,this.password);
      this.nav.navigateRoot('/inicio');
    } catch (error:any) {
      const toast = await this.toastSrv.create({
        message:error.message,
        duration:3000,
        position:'top'
      });
      console.log(error);
      toast.present();
    }
  }

}

