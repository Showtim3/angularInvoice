import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth/auth.service";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../services/data/data.service";

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
  public value='';


  constructor(private authService: AuthService,private route: ActivatedRoute, public dataService: DataService) { }

 async ngOnInit() {

    this.idClicked = this.dataService.id;
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
  setData(){
    this.dataService.serviceData = this.value;
    console.log(this.value);
  }

  getData(){
    this.value = this.dataService.serviceData;
    return this.dataService.serviceData;

  }

}



