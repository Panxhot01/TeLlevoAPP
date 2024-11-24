import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form = new FormGroup({
    uid: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  constructor() { }

  ngOnInit() {

  }

  async submit(){
    if (this.form.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();


      this.firebaseSvc.sigIn(this.form.value as User).then(res => {

        this.getUserInfo(res.user.uid);

      }).catch(err => {
        console.error('Error al autenticar usuario:', err);
        this.utilsSvc.presentToast({ 
          message: 'Error al autenticar usuario', 
          duration: 2000,
          color: 'danger',
          position:'middle',
          icon: 'close-circle-outline' 
        });
      }).finally(() => {
        loading.dismiss();
      });
        

      
    }
  }

  //

  async getUserInfo(uid: string){
    if (this.form.valid) {
      
      const loading = await this.utilsSvc.loading();
      await loading.present();

      let path = `users/${uid}`;

      this.firebaseSvc.getDocument(path).then((user: User) => {

        this.utilsSvc.saveLocalStorage('user', user);
        this.utilsSvc.routerLink('/home');
        this.form.reset();

  


      }).catch(err => {
        console.error('Error al autenticar usuario:', err);
        this.utilsSvc.presentToast({ 
          message: 'Error al autenticar usuario', 
          duration: 2000,
          color: 'danger',
          position:'middle',
          icon: 'close-circle-outline' 
        });
      }).finally(() => {
        loading.dismiss();
      });

    
    }

  }

}
