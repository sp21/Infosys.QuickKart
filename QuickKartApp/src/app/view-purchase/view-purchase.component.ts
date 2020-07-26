import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../quickKart-Services/purchase-service/purchase.service';
import { IPurchase } from '../quickKart-Interfaces/purchase';

@Component({
  selector: 'app-view-purchase',
  templateUrl: './view-purchase.component.html',
  styleUrls: ['./view-purchase.component.css']
})
export class ViewPurchaseComponent implements OnInit {

  constructor(private _purchaseService: PurchaseService) { }

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
}
