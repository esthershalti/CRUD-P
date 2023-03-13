import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerInvoiceAddComponent } from './Pages/customer-invoice-add/customer-invoice-add.component';
import { CustomerInvoicesListComponent } from './Pages/customer-invoices-list/customer-invoices-list.component';

const routes: Routes = [

  { path: 'list-customerInv', component: CustomerInvoicesListComponent },
  
  { path: 'add-customerInv', component: CustomerInvoiceAddComponent },

  { path: '', redirectTo: '/list-customerInv', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


