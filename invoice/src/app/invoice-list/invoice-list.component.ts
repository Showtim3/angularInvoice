import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth/auth.service";
import {Router} from "@angular/router";
import {DataService} from "../services/data/data.service";

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {


invoiceList:any = [];
public idClicked: string = null;
public value = null;
public showDetails = false;
  constructor(private authService: AuthService, private router: Router, public dataService: DataService) {}

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
    this.dataService.id = id;
    console.log(this.dataService.id);
    this.showDetails = true;
  }

  setData(){
    this.dataService.serviceData = this.value;
  }
  getData(){
    this.value = this.dataService.serviceData;
    return this.dataService.serviceData;
  }

}



