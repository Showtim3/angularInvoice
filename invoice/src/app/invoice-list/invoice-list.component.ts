import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {


invoiceList:any = [];
public idClicked: string = null;
  constructor(private authService: AuthService, private router: Router) {}

  async ngOnInit() {

    let x = await this.authService.getInvoiceList();
    x.snapshotChanges().subscribe(item => {
      this.invoiceList = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        this.invoiceList.push(y);
      })

    })

  }


  onSelect(id) {
    this.idClicked = id;
    this.router.navigate(['/invoice_details',this.idClicked])
  }
}



