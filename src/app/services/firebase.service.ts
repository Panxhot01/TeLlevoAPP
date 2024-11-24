import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile,sendPasswordResetEmail, } from 'firebase/auth'
import {User} from '../models/user.model';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import {getFirestore, setDoc, doc, getDoc,  collection, addDoc, collectionData, query,} from '@angular/fire/firestore'
import { UtilsService } from './utils.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {getStorage, uploadString, ref, getDownloadURL} from 'firebase/storage'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore)
  storage = inject(AngularFireStorage);
  utilsSvc = inject(UtilsService);

// autenticacion

getAuth(){
  return getAuth();
}

//acceder

sigIn(user: User){
  return signInWithEmailAndPassword(getAuth(), user.email, user.password)
}

// crear usario

sigUp(user: User){
  return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
}

// actualizar usuario
updateUser(displayName: string){
  return updateProfile(getAuth().currentUser, {displayName })
}



//  === Enviar email para recuperar contraseña ===
sendRecoveryEmail(email: string){
  return sendPasswordResetEmail(getAuth(),email);
}

//CerraSesion
signOut(){
  getAuth().signOut();
  localStorage.removeItem('user');
  this.utilsSvc.routerLink('/login');
}

// ===== BASE DE DATOS =========

getCollectionData(path: string, collectionQuery?: any){
  const ref = collection(getFirestore(), path);
  return collectionData(query(ref, collectionQuery), {idField: 'id'})
}

// ======== Set =======

setDocument(path: string , data:any){
  return setDoc(doc(getFirestore(), path), data);
}

// ======== Obtener ==========
async getDocument(path: string){
  return (await getDoc(doc(getFirestore(), path))).data();
}

// ====== Agregar =======
addDocument(path: string , data:any){
  return addDoc(collection(getFirestore(), path), data);
}




}
