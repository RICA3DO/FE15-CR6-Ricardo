import { foods } from './foods';
import { Injectable } from '@angular/core';
import { Imenu } from './menu';

@Injectable({
    providedIn: 'root'
})
export class order{
    foods: Imenu[] = [];
    constructor() { }

    addToCart(foods: Imenu) {
        this.foods.push(foods);
    }
    getFoods() {

        return this.foods;
    }
    sum: any = 0;
    total() {

        for (let val of this.foods)
            this.sum = this.sum + val.price;
        return this.sum;

    }

    clearCart() {
        this.foods = [];
        return this.foods;
    }
}