import { inject } from "@angular/core";
import { FirebaseAuthentication } from "@capacitor-firebase/authentication";
import { NavController } from "@ionic/angular";
import { lastValueFrom, timer } from "rxjs";
import { LoginService } from "../services/login.service";

export const logeadoGuard = async ()=>{
    const nav = inject(NavController);
    const login = inject(LoginService);
    await login.firebaseCargado;
    const user = await FirebaseAuthentication.getCurrentUser();
    console.log(user);
    if(user.user){ // hay un usuario logeado
        return true;
    }else{
        //mandar al login
        nav.navigateRoot('/home');
        return false;
    }
}

export const visitaGuard = async() => {
    const nav = inject(NavController);
    const login = inject(LoginService);
    await login.firebaseCargado;
    const user = await FirebaseAuthentication.getCurrentUser();
    if(user.user){ // hay un usuario logeado
        nav.navigateRoot('/inicio'); //mandamos a inicio
        return false;
    }else{        
        return true;
    }
}
