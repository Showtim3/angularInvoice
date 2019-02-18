import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../services/auth/auth.service";
import {ActivatedRoute} from "@angular/router";
import {isObject} from "ngx-bootstrap/chronos/utils/type-checks";
import {__await} from "tslib";
import {resolve} from "q";

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css']
})
export class InvoiceDetailsComponent implements OnInit {

  public idClicked: string = null;
  invoiceDetails:any = [];
  itemsArray: any = [];
  count: number = 0;
  constructor(private authService: AuthService,private route: ActivatedRoute) { }
  isObject = function(a){
    return (!!a) && (a.constructor === Object)
  }
 async ngOnInit() {

    this.idClicked = this.route.snapshot.paramMap.get('id');
  const invoiceDetailsRaw = await this.authService.getInvoiceDetails(this.idClicked);

  invoiceDetailsRaw.snapshotChanges().subscribe(item => {
     this.invoiceDetails = [];
     item.forEach(element=> {
       let z = element.payload.toJSON();
    //   if(this.isObject(z)) z= JSON.stringify(z, null , 8);
      this.invoiceDetails.push(z);
     });
     console.log(this.invoiceDetails);
    this.printItem();
  });

  }

    printItem(){
     this.itemsArray =  this.invoiceDetails[2];
    for(let item in this.itemsArray){
      this.count++;
    }

    return true;
  }
}



