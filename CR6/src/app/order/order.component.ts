import { Component, OnInit } from '@angular/core';
import { order } from "../order";
import { foods } from './../foods';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Imenu } from '../menu';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  foods: Imenu[] = [];
  checkoutForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    address: new FormControl('', Validators.required)

  })
  constructor(private order: order) { }

  successInfo: string = "Order Sent!";
  rejectInfo: string = "Invalid information, try again!";

  onClick() {

    (document.getElementById("total1") as HTMLElement).innerHTML = `Total - ${this.order.total()} €`;
    (document.getElementById("total1") as HTMLElement).classList.add("btn-warning");
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      this.checkoutForm.value;

      (document.getElementById("total") as HTMLElement).innerHTML = `Total - ${this.order.total()} €`;
      (document.getElementById("total") as HTMLElement).classList.add("alert-warning");
      (document.getElementById("success-Info") as HTMLElement).innerHTML = this.successInfo;
      (document.getElementById("success-Info") as HTMLElement).classList.add("alert-success");
      this.foods = this.order.clearCart();

      this.checkoutForm.reset();
    }
    else {
      (document.getElementById("success-Info") as HTMLElement).innerHTML = this.rejectInfo;
      (document.getElementById("success-Info") as HTMLElement).classList.add("alert-danger");

    }


  }

  ngOnInit(): void {
    this.foods = this.order.getFoods();

  }

}
