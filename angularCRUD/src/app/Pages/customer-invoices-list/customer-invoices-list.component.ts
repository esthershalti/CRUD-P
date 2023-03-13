import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerInvoices } from 'src/app/shared/customer-invoices';
import { CustomerInvoicesService } from '../../Core/services/customer-invoices.service'

@Component({
  selector: 'app-customer-invoices-list',
  templateUrl: './customer-invoices-list.component.html',
  styleUrls: ['./customer-invoices-list.component.css']
})
export class CustomerInvoicesListComponent implements OnInit {

  customerInvoices :any;

  constructor(public customerInvSer: CustomerInvoicesService, private changeDetectorRef: ChangeDetectorRef
,    public datepipe: DatePipe,private router: Router) { }
  
  ngOnInit() {
    this.getAllInvoices();
    this.changeDetectorRef.detectChanges();
  }

  getAllInvoices() {
    this.customerInvSer.getcustomerInvoicesList().subscribe(res =>
      this.customerInvoices = res
    )
  }
  showForEdit(customerInv: CustomerInvoices){
    this.customerInvSer.isUpdate=true;  
    this.customerInvSer.selectedCustomerInvoices=customerInv;
    this.router.navigate(['/add-customerInv']);
    
  }
  onDel(id:number){
    if(confirm('Are you sure to delete this invoice?')==true){
    this.customerInvSer.DeleteCustomer_Invoices(id).subscribe(x=>{
      this.customerInvSer.getcustomerInvoicesList();
      this.ngOnInit();
    })
  }
  }
 
}
