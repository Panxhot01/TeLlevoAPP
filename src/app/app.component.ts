<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { initializeApp } from 'firebase/app';
import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
>>>>>>> d23a56fe0694267a1ac22e4928cbab3993523980

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
<<<<<<< HEAD
  constructor() {}
}
=======

  constructor() {
    
  }
  
  ngOnInit(){
    this.cargarFirebase();
  }

  async cargarFirebase(){

    const firebaseConfig = {
      apiKey: "AIzaSyDqANhKAAp35O5adM5gBjwyyshRfhhXrGs",
      authDomain: "tellevoapp-acft.firebaseapp.com",
      projectId: "tellevoapp-acft",
      storageBucket: "tellevoapp-acft.appspot.com",
      messagingSenderId: "329342037158",
      appId: "1:329342037158:web:7075ceb3974f1d686dd867",
      measurementId: "G-JT4P6PCK62"
    }

    if(Capacitor.isNativePlatform() == false)
    {
      initializeApp(firebaseConfig);
    }
  }
}
>>>>>>> d23a56fe0694267a1ac22e4928cbab3993523980
