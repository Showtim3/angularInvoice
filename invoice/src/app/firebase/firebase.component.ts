import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import * as InvoiceActions from '../services/firebaseNew/invoice.actions'
import {Observable} from "rxjs";
import {AngularFireDatabase} from "@angular/fire/database";
import {Invoice} from "../services/firebaseNew/invoice.model";

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {


  invoices: Observable<Invoice[]>;

   constructor(public store: Store<AppState>, public db: AngularFireDatabase) {
    this.invoices = store.select('invoice');
  }

 async login(userName,password){
     this.store.dispatch(new InvoiceActions.Login({email: userName, password: password}) );

   }
   async get(){
//console.log(this.invoices);
//console.log(this.store);
this.store.select('reducer').subscribe((data: AppState) => console.log((data)));

   }

  ngOnInit() {


   }

}
