import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer.service";

import {Customer} from "../customer";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-display-by-email',
  templateUrl: './display-by-email.component.html',
  styleUrls: ['./display-by-email.component.css']
})
export class DisplayByEmailComponent implements OnInit {
  email: string;
  customer: Customer = new Customer();
  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) {
    alert("constructor called for email...")
   }

  ngOnInit(): void {
    this.email = this.route.snapshot.params['email'];
    alert("inside ngonint"+this.email)
    this.customerService.getCustomerByEmail(this.email).subscribe(data=>{
        this.customer=data;
        alert(this.customer.id+" "+this.customer.email+" for email")
      },
      error => console.log(error)
    );
  }

}
