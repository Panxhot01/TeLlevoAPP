import { Component, inject, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  email = '';
  password = '';
  password2 = '';


  loginSrv = inject(LoginService);
  nav = inject(NavController);
  alert = inject(AlertController);

  constructor() { }

  ngOnInit() {
  }

  async registro(){
    try{

      if(this.password != this.password2){
        throw {message:'Las contraseñas no coinciden'}
      }

      await this.loginSrv.registro(this.email,this.password);
      this.nav.navigateRoot('/home')
    }
    catch(error:any){
      if(error.message.includes('(auth/email-already-in-use)')){
        error.message = 'El usuario ya existe';
      }

      const alert = await this.alert.create({
        message:error.message,
        buttons:['Ok']
      });
      alert.present();
    }
  }
}
