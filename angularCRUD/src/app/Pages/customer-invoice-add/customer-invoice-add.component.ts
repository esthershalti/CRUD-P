import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerInvoicesService } from 'src/app/Core/services/customer-invoices.service';

@Component({
  selector: 'app-customer-invoice-add',
  templateUrl: './customer-invoice-add.component.html',
  styleUrls: ['./customer-invoice-add.component.css']
})
export class CustomerInvoiceAddComponent  implements OnInit{
  customerInvoices: any;
  constructor(public customerInvSer: CustomerInvoicesService,private router: Router) { }

  ngOnInit() {
    console.log(this.customerInvSer.selectedCustomerInvoices)
  if(!this.customerInvSer.isUpdate)
  {this.resetForm();}
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.customerInvSer.selectedCustomerInvoices = {
      InvId: '',
      InvDate: '',
      InvStatus: '',
      InvAmount: null
    }
  }

   onSubmit(form: NgForm) {
    console.log("submit", form.value)

    if(!this.customerInvSer.isUpdate){
    this.customerInvSer.PostCustomer_Invoices(form.value)
      .subscribe(res => {
        this.resetForm();
        console.log("Succeed Add");
        this.router.navigate(['/list-customerInv']);     
      })}
      else{
        this.customerInvSer.isUpdate=false;
        this.customerInvSer.PutCustomer_Invoices(form.value.InvId,form.value)
        .subscribe(res => {
          console.log("Succeed Update");
          this.router.navigate(['/list-customerInv']);
      })
  }}

}
