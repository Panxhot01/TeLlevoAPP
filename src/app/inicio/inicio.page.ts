import { Component, inject, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  loginSevice = inject(LoginService);
  toastSrv= inject(ToastController);
  nav = inject(NavController);

  constructor() { }

  ngOnInit() {
  }
  

}
