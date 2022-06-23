import { Injectable } from "@angular/core";
import { MaladoRequest } from "../../model/maladoRequest.model";
import { maladoRegisterRequest } from "../../model/maladoRegisterRequest.model";
import { DemandeRequest } from "../../model/demandeRequest.model";
import { deleteDemandeRequest} from '../../model/deleteDemandeRequest.model';
import { environnement } from "../shared/environnement";
import { config } from "../config/config";
import { HttpClient} from '@angular/common/http';
import { changePasswordRequest } from '../../model/changePasswordRequest.model';

@Injectable({
    providedIn: 'root'
 })
export class AuthService {
    constructor(private http: HttpClient){ }
    public pointoracle: string= "services/oracle/api/"
    public pointwindows: string= "services/windows/api/"
    public pointnessico: string= "services/nessico/api/"
    public url: string= "api/"

    register(data:maladoRegisterRequest): any{
       return this.http.post(environnement.localurl + this.url + 'register', data, {headers:config.jsonHeader, responseType: 'text', observe: 'response'});
    }
    maladoconnexion(data:MaladoRequest){
        return this.http.post(environnement.localurl + this.url + 'password', data, {headers:config.jsonHeader, responseType: 'text'});
     }
     demandeOracle(data:DemandeRequest){
        return this.http.post(environnement.localurl + this.pointoracle + 'demande-oracles', data, {headers:config.jsonHeader, responseType: 'text'});
     }
     demandeWindows(data:DemandeRequest){
        return this.http.post(environnement.localurl + this.pointwindows + 'demande-windows', data, {headers:config.jsonHeader, responseType: 'text'});
     }
     demandeNessico(data:DemandeRequest){
        return this.http.post(environnement.localurl + this.pointnessico + 'demande-nessicos', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});
     }
     getDemandeOracle(data:DemandeRequest){
        return this.http.post(environnement.localurl + this.pointoracle + 'demande-oracles-login', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});
     }
    deleteDemandeOracle(data:deleteDemandeRequest){
        return this.http.post(environnement.localurl + this.pointoracle + 'demande-oracles-delete', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});
     }
     getDemandeNessico(data:DemandeRequest){
        return this.http.post(environnement.localurl + this.pointnessico + 'demande-nessicos-login', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});
     }
    deleteDemandeNessico(data:deleteDemandeRequest){
        return this.http.post(environnement.localurl + this.pointnessico + 'demande-nessicos-delete', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});
     }
     getDemandeWindows(data:DemandeRequest){
        return this.http.post(environnement.localurl + this.pointwindows + 'demande-windows-login', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});
     }
    deleteDemandeWindows(data:deleteDemandeRequest){
        return this.http.post(environnement.localurl + this.pointwindows + 'demande-windows-delete', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});
     }
    isEnabled(data:maladoRegisterRequest) : any{
        return this.http.post(environnement.localurl + this.url + 'enable', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});
    }
    confirmpassword(data:MaladoRequest){
        return this.http.post(environnement.localurl + this.url +'confirmpassword', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});
    }
    connexion(data:MaladoRequest): any{
        return this.http.post(environnement.localurl + this.url + 'authenticate', data, { headers:config.jsonHeader, responseType: 'text',observe: 'response'});
    }
    forgotpassword(data:changePasswordRequest){
        return this.http.post(environnement.localurl + this.url + 'account/reset-password/init', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});
    } 
    verificationKey(data:changePasswordRequest){
         return this.http.post(environnement.localurl + this.url + 'verificationKey', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});
    }
    finishforgotpassword(data:changePasswordRequest){
      return this.http.post(environnement.localurl + this.url + 'account/reset-password/finish', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});
    }
   // userInfo(data:getToken){
    //     return this.http.post(environnement.localurl + this.url +'userinfo', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});
    // }
}


