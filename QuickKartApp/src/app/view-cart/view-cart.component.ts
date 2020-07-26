import { Component, OnInit } from '@angular/core';
import { CartService } from '../quickKart-Services/cart-service/cart.service';
import { ICart } from '../quickKart-Interfaces/cart';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  constructor(private _cartService: CartService) { }
  cart: ICart[];
  ngOnInit(): void {
    this.getCarts();
  }
  getCarts() {
    this._cartService.getCartDetails().subscribe(responseCartData => { this.cart = responseCartData });
  }

}
