import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth/auth.service";
import {ActivatedRoute} from "@angular/router";

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

    this.printItem();
  });

  }

    printItem(){
     this.itemsArray =  this.invoiceDetails[2];
   //   console.log(this.invoiceDetails[2]);
     //console.log(this.itemsArray);
     let arrayFinal = [];
     for(let item in this.itemsArray){
        this.count++;
        arrayFinal.push(this.itemsArray[item]);
        }

     this.itemsArray= arrayFinal;
     //console.log(this.itemsArray);
    for(let item of this.itemsArray)
    {
      console.log(item);
    }


    return true;
  }
}



