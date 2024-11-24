import { Component, inject, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.scss'],
})
export class AddUpdateComponent  implements OnInit {

  form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(8)]),
    destino: new FormControl('', [Validators.required, Validators.minLength(4)]),
    capacidad: new FormControl('', [Validators.required, Validators.min(0)]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),

  })
  user = {} as User;


  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  constructor() { }

  ngOnInit() {

  }



  async submit(){
    if (this.form.valid) {
      
      let path =`ùsers/${this.user.uid}/viajes`
      
      delete this.form.value.id

      this.firebaseSvc.addDocument(path, this.form.value).then(async res => {

        this.utilsSvc.dismissModal({success: true});
      
        this.utilsSvc.presentToast({
          message: 'Producto creado exitosamente',
          color: 'success',
          duration: 1500,
          position: 'middle',
          icon: 'checkmark-circle-outline'
        })
        
      


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
