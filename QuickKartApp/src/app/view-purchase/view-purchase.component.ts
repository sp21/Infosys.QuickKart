import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../quickKart-Services/purchase-service/purchase.service';
import { IPurchase } from '../quickKart-Interfaces/purchase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-purchase',
  templateUrl: './view-purchase.component.html',
  styleUrls: ['./view-purchase.component.css']
})
export class ViewPurchaseComponent implements OnInit {

  userRole: string;
  commonLayout: boolean = false;
  customerLayout: boolean = false;

  constructor(private _purchaseService: PurchaseService,private router:Router) {
    this.userRole = sessionStorage.getItem("userRole");
    if (this.userRole == "Customer") {
      this.customerLayout = true;
    }
    else {
      this.commonLayout = true;
    }
  }

  purchase: IPurchase[];
  showMessage: boolean;

  
  ngOnInit(): void {
    this.getPurchaseDetails();
    if (this.purchase == null) {
      this.showMessage = true;
    }

  }
  getPurchaseDetails() {
      this._purchaseService.getPurchaseDetails().subscribe(
      responsePurchaseData => {
        this.purchase = responsePurchaseData;
        this.showMessage = false;
      }
    );
  }

  rateProduct(product: IPurchase) {
    if (this.userRole != "Customer") {
      this.router.navigate(['/login']);
    }
    else {
      sessionStorage.setItem("productId", product.ProductId);
      sessionStorage.setItem("productName", product.ProductName);
      this.router.navigate(['/addReview']);
    }
  }
}
