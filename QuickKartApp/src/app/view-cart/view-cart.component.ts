import { Component, OnInit } from '@angular/core';
import { CartService } from '../quickKart-Services/cart-service/cart.service';
import { ICartProduct } from '../quickKart-Interfaces/cartproduct';
import { Router } from '@angular/router';
import { UserService } from '../quickKart-Services/user-service/user.service';
import { IRating } from '../quickKart-Interfaces/rating';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  emailId: string;
  userRole: string;
  commonLayout: boolean = false;
  customerLayout: boolean = false;
  imageSrc: string;
  constructor(private _cartService: CartService, private userService: UserService, private router: Router) {
    this.emailId = sessionStorage.getItem("userName");
    this.userRole = sessionStorage.getItem("userRole");
    if (this.userRole == "Customer") {
      this.customerLayout = true;
    }
    else {
      this.commonLayout = true;
    }
  }

  errorMsg: string;
  Products: ICartProduct[];
  showError: boolean = false;
  status: boolean = false;

  ngOnInit(): void {
    this.getCarts();
    this.imageSrc = "../../assets/quickKart-images/delete-item.jpg";
  }
  getCarts() {
    this._cartService.getCartProducts(this.emailId)
      .subscribe(
        resCartProductData => {
          this.Products = resCartProductData;
          if (this.Products.length == 0) {
            this.showError = true;
            this.errorMsg = "Your cart is empty.";
          }
        },
        resCartProductError => {
          this.Products = null;
          this.errorMsg = resCartProductError;
          console.log(this.errorMsg);
          if (this.Products.length == 0) {
            this.showError = true;
            this.errorMsg = "No records found.";
          }
        },
        () => console.log("GetCartProducts method executed successfully")
      );
  }
  updateCart(prod: ICartProduct) {
    this.router.navigate(['/updateCart', prod.ProductId, prod.ProductName, prod.Quantity, prod.QuantityAvailable]);
  }
  removeCart(prod: ICartProduct) {
    this.userService.deleteCartProduct(prod.ProductId, this.emailId).subscribe(
      responseData => {
        if (responseData) {
          this.router.navigate(['/cart']);
          alert("the Product is removed from cart");
          this.router.navigate(['/cart']);
        } else {
          alert("Some error occured, please try after some time.");
        }
      },
      responseErrorData => {
        console.log(responseErrorData)
      },
      () => { console.log("Code Succesfully Excecuted") }
    );
  }
  

}
