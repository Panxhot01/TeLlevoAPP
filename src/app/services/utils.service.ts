import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  loadingCtrl = inject(LoadingController);
  toastCtrl = inject(ToastController);
  router = inject(Router)
  modalCtrl = inject(ModalController);




  // loading
  loading(){
    return this.loadingCtrl.create({spinner: 'crescent'})
  }

// == Toast ==
  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }

// === Enrutar a cualquier pagina ===
  routerLink(url: string){
    return this.router.navigateByUrl(url)};

  // == Guardar un elemento en local storage ==
  saveLocalStorage(key: string, value:any){
    return localStorage.setItem(key, JSON.stringify(value))
  }

  // == Obtener un elemento en localStorage ==
  getFromLocalStorage(key:string){
    return JSON.parse(localStorage.getItem(key))
  }


  // == Modal ==
  async presentModal(opts: ModalOptions) {
    const modal = await this.modalCtrl.create(opts);
    await modal.present();
  
    const {data } = await modal.onDidDismiss();
    if (data) return data;
  
  }
  dismissModal(data? : any){
    return this.modalCtrl.dismiss(data);
  }
  
}


