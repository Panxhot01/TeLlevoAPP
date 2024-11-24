import { Component, inject, OnInit } from '@angular/core';
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
