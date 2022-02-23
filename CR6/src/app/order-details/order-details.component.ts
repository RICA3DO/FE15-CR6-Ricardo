import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { order } from '../order';
import { foods } from '../foods';
import { Imenu } from '../menu';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

 foods: Imenu = {} as Imenu;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private order: order
    ) { }
  

    successInfo: string = "Order Confirmed,Please proceed further to pay";
    addToCart()
      {
        this.order.addToCart(this.foods);
        (document.getElementById("success-Info")as HTMLElement).innerHTML = this.successInfo;
        (document.getElementById("success-Info")as HTMLElement).classList.add("alert-success");
      
      }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['foodsId'];
      this.foods = foods[this.id];

    })
  }}