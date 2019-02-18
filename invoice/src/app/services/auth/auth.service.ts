import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";


import {AngularFireDatabase,AngularFireList }from 'angularfire2/database'
import {authToken} from "@firebase/storage/dist/test/testshared";
import GenUtil from "../../utils/GenUtil";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
usersList: AngularFireList<any>;
invoiceDetails: AngularFireList<any>;
  constructor(private fireAuth: AngularFireAuth, private firebase: AngularFireDatabase) {
  }

  async doLogin({password, email}: { password: string; email: string; }) {
    const res = await this.fireAuth.auth.signInWithEmailAndPassword(email, password);

  }

  async getInvoiceList() {
    const email = await this.fireAuth.auth.currentUser.email;
    const emailAfterConversion = GenUtil.base64Email(email);
    this.usersList = await this.firebase.list(`users/${emailAfterConversion}/invoice_list`);
    return this.usersList;
  }

  async getInvoiceDetails(id: string) {
    const email = this.fireAuth.auth.currentUser.email;
    const emailAfterConversion = GenUtil.base64Email(email);
    this.invoiceDetails = await this.firebase.list(`users/${emailAfterConversion}/invoice_details/${id}`);
    return this.invoiceDetails;
  }

  async insertData(){
    return await this.firebase.list('users').push({
      name: "test1",
      amount: "Alpha"
    });
  }

}

