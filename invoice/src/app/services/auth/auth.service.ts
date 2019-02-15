import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) { }

  async doLogin({ password, email}: {password: string; email: string;}) {
   const res = await this.fireAuth.auth.signInWithEmailAndPassword(email,password);
   return res;
  }
}
