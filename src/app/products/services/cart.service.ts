import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemArray: any = []
  cartItemList = new BehaviorSubject([])

  constructor() { }
  addToCart(product: any) {
    this.cartItemArray.push(product)
    this.cartItemList.next(this.cartItemArray)
    console.log(this.cartItemList);
  }

  //grantotal
  grantTotal() {
    let total = 0
    this.cartItemArray.map((item: any) => {
      total += item.price
      console.log(total);

    })
    return total
  }

  //remove item
  removeCartItem(product: any) {
    this.cartItemArray.map((item: any, index: any) => {
      if (product.id == item.id) {
        this.cartItemArray.splice(index, 1)
      }
    })
    this.cartItemList.next(this.cartItemArray)
  }
  //rem ove cart
  removeCart() {
    this.cartItemArray = []
    this.cartItemList.next(this.cartItemArray)
  }
}

