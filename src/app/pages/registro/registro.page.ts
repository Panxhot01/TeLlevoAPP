import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  form = new FormGroup({
    uid: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
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


      this.firebaseSvc.sigUp(this.form.value as User).then(async res => {

        await this.firebaseSvc.updateUser(this.form.value.name);
        
        let uid = res.user.uid;
        this.form.controls.uid.setValue(uid);
        this.setUserInfo(uid);
        console.log(res);

        this.utilsSvc.presentToast({ 
          message: 'Registrado con exito ', 
          duration: 2000,
          color: 'success',
          position:'middle',
          icon: 'person-circle-outline' 
        });


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

  async setUserInfo(uid: string){
    if (this.form.valid) {

     

      let path = `users/${uid}`;
      delete this.form.value.password;

      this.firebaseSvc.setDocument(path, this.form.value).then(async res => {

        this.utilsSvc.saveLocalStorage('user', this.form.value);
        this.utilsSvc.routerLink('/home');
        this.form.reset();


      }).catch(error => {
        this.utilsSvc.presentToast({
          message: 'Error verifique que los datos esten correctos',
          color: 'danger',
          duration: 2500,
          position: 'middle',
          icon: 'alert-circle-outline'
        })
        

      })
    }
  }

}
