import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { CustomerInvoices } from '../../shared/customer-invoices';
@Injectable({
  providedIn: 'root'
})

export class CustomerInvoicesService {
  private baseUrl = 'https://localhost:44352/api/customerInvoices';
  selectedCustomerInvoices: any;
  isUpdate:boolean=false;
  customerInvoicesList:CustomerInvoices | undefined;
  constructor(private http:HttpClient) { }

  getcustomerInvoicesList()
  {
    return this.http.get("https://localhost:44352/api/customerInvoices");
  }
  PostCustomer_Invoices(r: CustomerInvoices)
  {
    return this.http.post<CustomerInvoices>("https://localhost:44352/api/customerInvoices",r);
  }
  DeleteCustomer_Invoices(id: number) {
    return this.http.delete('https://localhost:44352/api/customerInvoices/' + id);
  }
  PutCustomer_Invoices(id: string, emp: CustomerInvoices): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    const body = JSON.stringify(emp);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
    
    return this.http.put<any>(url, body, options)
      .pipe(
        catchError(this.selectedCustomerInvoices)
      );
  }
}