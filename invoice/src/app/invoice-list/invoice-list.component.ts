import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

usersList:any = [];
invoiceList:any = [];
public idClicked: string = null;
  constructor(private authService: AuthService, private router: Router) {
  }

  async ngOnInit() {
    //console.log("ONINGIT");
    let x = await this.authService.getData();
    x.snapshotChanges().subscribe(item => {
      this.usersList = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        y["$key"] = element.key;
        console.log(y);
        console.log(JSON.stringify(y));
        this.usersList.push(y);
      })

    })

  }

  async getDetails(event)
  {
    const id=event.srcElement.innerText;
   // console.log(id);
    let y = await this.authService.getInvoiceDetails(id);
    y.snapshotChanges().subscribe(item => {
      this.invoiceList = [];
      item.forEach(element=> {
        let z = element.payload.toJSON();
        z["$key"] = element.key;
        console.log(z);
        this.invoiceList.push(z);
      })
    })
  }


  onSelect(id) {
    this.idClicked = id;
    console.log("Inside the step 1");
    console.log("ID CLICKED"  + this.idClicked);
    this.router.navigate(['/invoice_details',this.idClicked])
  }
}



