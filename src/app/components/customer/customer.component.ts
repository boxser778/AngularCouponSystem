import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/models/customer';
import { CustomersService } from 'src/services/customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public customers: Customer[];
  loginservice: any;
  router: any;
  
  public constructor (private customersService: CustomersService) { }

public ngOnInit():void{
  this.customersService
  .getAllCustomers()
  .subscribe(
      customers=> this.customers = customers,
      err=>alert(err.message));
  } 
  
  public logoutDemo(): void {
   
    this.loginservice.logout();
    this.router.navigate (["/login"]);
  }


}
