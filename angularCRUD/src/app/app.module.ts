import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerInvoicesListComponent } from './Pages/customer-invoices-list/customer-invoices-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CustomerInvoiceAddComponent } from './Pages/customer-invoice-add/customer-invoice-add.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CustomerInvoicesListComponent,
    CustomerInvoiceAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
