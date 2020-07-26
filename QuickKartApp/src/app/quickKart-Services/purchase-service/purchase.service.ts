import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import { Observable } from 'rxjs';
import { IPurchase } from 'src/app/quickKart-Interfaces/purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http: HttpClient) { }

  getPurchaseDetails(): Observable<IPurchase[]> {
    let purchaseDetail = this.http.get<IPurchase[]>("http://localhost:11990/api/Purchase/GetPurchaseDetailsByEmailId?emailId=Franken@gmail.com");
    return purchaseDetail;
  }
}
