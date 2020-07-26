import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import { Observable } from 'rxjs';
import { ICart } from 'src/app/quickKart-Interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartDetails(): Observable<ICart[]> {
    let cartdetails = this.http.get<ICart[]>("http://localhost:11990/api/User/GetCartProducts?emailId=Albert@gmail.com");
    return cartdetails;
  }
}
