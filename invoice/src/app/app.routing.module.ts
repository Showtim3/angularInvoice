import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {InvoiceListComponent} from "./invoice-list/invoice-list.component";
import {LoginComponent} from "./login/login.component";
import {InvoiceDetailsComponent} from "./invoice-details/invoice-details.component";


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path : 'invoice_list' , component: InvoiceListComponent},
  {path: 'invoice_details/:id', component: InvoiceDetailsComponent},
  {path:'login' , component:LoginComponent}
  //{path: "**" , component:PageNotFoundComponent}
//5127535674
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

export const routingComponents = [InvoiceListComponent,LoginComponent,InvoiceDetailsComponent];
