import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer";
import {CustomerService} from "../customer.service";
import {Router} from "@angular/router";
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer: Customer = new Customer();
  constructor(private customerService: CustomerService, private router: Router) { }


  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required,Validators.maxLength(12)]),
    lname: new FormControl('',[Validators.required]),
    mobile:new FormControl('')
     });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }
  ngOnInit(): void {
  }

  saveCustomer(){
   this.customerService.createCustomer(this.customer).subscribe(data =>
      {
        console.log(data);
        this.getToCustomerList();
      },
    error => console.log(error)
   );

  }

  getToCustomerList(){
    this.router.navigate(['/customers']);
  }

  onSubmit(){
    console.log(this.customer);
    this.saveCustomer();
  }

}
