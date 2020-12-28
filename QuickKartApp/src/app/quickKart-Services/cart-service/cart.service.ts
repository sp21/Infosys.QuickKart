import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/Http';
import { Observable, throwError } from 'rxjs';
import { ICartProduct } from 'src/app/quickKart-Interfaces/cartproduct';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartProducts(emailId: string): Observable<ICartProduct[]> {
    let cartdetails = this.http.get<ICartProduct[]>("http://localhost:11990/api/User/GetCartProducts?emailId=" + emailId).pipe(catchError(this.errorHandler));
    return cartdetails;
  }
  errorHandler(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error || "Server Error");
  }
}
