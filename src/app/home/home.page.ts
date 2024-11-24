import { Component, inject, OnInit } from '@angular/core';
<<<<<<< HEAD
import { UtilsService } from '../services/utils.service';
import { FirebaseService } from '../services/firebase.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
 

  form = new FormGroup({
    uid: new FormControl(''),
  })

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  constructor() { }

  ngOnInit() {
  }
  

  signOut(){
    this.firebaseSvc.signOut();
  }

}
=======
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

>>>>>>> d23a56fe0694267a1ac22e4928cbab3993523980
