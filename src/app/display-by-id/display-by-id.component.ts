import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer";
import {CustomerService} from "../customer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-display-by-id',
  templateUrl: './display-by-id.component.html',
  styleUrls: ['./display-by-id.component.css']
})
export class DisplayByIdComponent implements OnInit {
  id:number;
  customer: Customer = new Customer();
  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) { 
    alert("constructor called...")
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    alert(this.id+" inside ngonint ")
    this.customerService.getCustomerById(this.id).subscribe(data=>{
        this.customer=data;
        alert(this.customer.id+" "+this.customer.email)
      },
      error => console.log(error)
    );
  }

}
