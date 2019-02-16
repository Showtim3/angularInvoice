import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../services/auth/auth.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css']
})
export class InvoiceDetailsComponent implements OnInit {

  public idClicked: string = null;
  invoiceDetails = [];
  converted = [];
  constructor(private authService: AuthService,private route: ActivatedRoute) { }

 async ngOnInit() {
  console.log("Value Received Successfully");
   this.idClicked = this.route.snapshot.paramMap.get('id');
   console.log(this.idClicked);
  const invoiceDetailsRaw = await this.authService.getInvoiceDetails(this.idClicked);


   invoiceDetailsRaw.snapshotChanges().subscribe(item => {

     item.forEach(element=> {
       let z = element.payload.toJSON();
      // z["$key"] = element.key;
       //console.log(z);
       console.log(JSON.stringify(z, null, 4));
       this.converted.push( JSON.stringify(z, null, 4) );
       this.invoiceDetails.push(z);
     })
   })
  }

}
