import { Injectable } from '@angular/core';
import { FirebaseAuthentication, User } from '@capacitor-firebase/authentication';
import { BehaviorSubject, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user:User|null = null;
  //creamos una promesa que se resuelve cuando firebase se haya cargado
  firebaseCargado: Promise<void>;

  constructor() {
    this.firebaseCargado = new Promise<void>((resolve)=>{
      FirebaseAuthentication.addListener('authStateChange',(status)=>{
        this.user = status.user;
        resolve();// con esto le decimos que ya cargo firebase, resolvemos la promesa
      })
    });
  }


  async registro(email:string,password:string){
    const resultado = await FirebaseAuthentication.createUserWithEmailAndPassword({
      email,
      password
    })
  }

  async login(email:string,password:string){
    const resultadoLogin = await FirebaseAuthentication.signInWithEmailAndPassword({
      email,
      password
    });
  }
  
  async cerrarSesion(){
    await FirebaseAuthentication.signOut();
  }
}