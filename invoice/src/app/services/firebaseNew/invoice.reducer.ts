import {Invoice} from "./invoice.model";
import * as InvoiceActions from './invoice.actions'
import on from 'await-handler';
import * as firebase from "firebase";

let initialState: Invoice = {
  invoiceList: ["Hello"],
  success: false,
  userId: "123",
};


 export async function invoiceReducer(state: Invoice[] = [initialState], action: InvoiceActions.Actions) {

   switch (action.type) {
       case InvoiceActions.LOGIN:
        const[err,res] = await on(firebase.auth().signInWithEmailAndPassword(action.payload.email,action.payload.password));
        if(err){
         console.log(err);
         return {...state, success: false};
        }
        else {
           console.log(res);
           const email = firebase.auth().currentUser.email;
          return {...state,success: true,userId: email};
        }

     case InvoiceActions.READ:
        const email = firebase.auth().currentUser.email;
        console.log(email);
        return {...state, userId : email};

     default:
       return state;
   }
 }
