import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/Http';
import { Observable, throwError } from 'rxjs';
import { IUser } from 'src/app/quickKart-Interfaces/user';
import { catchError } from 'rxjs/operators'
import { ICart } from '../../../app/quickKart-Interfaces/cart';
import { IRole } from 'src/app/quickKart-Interfaces/role';
import { IRegisterUser } from 'src/app/quickKart-Interfaces/registeruser';
import { IRating } from 'src/app/quickKart-Interfaces/rating';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  validateCredentials(id: string, password: string): Observable<string> {
    var userObj: IUser;
    userObj = { EmailId: id, UserPassword: password, Gender: null, RoleId: null, DateOfBirth: null, Address: null };
    return this.http.post<string>('http://localhost:11990/api/user/ValidateUserCredentials', userObj).pipe(catchError(this.errorHandler));
  }

  addProductToCart(productId: string, emailId: string): Observable<boolean> {
    var cartObj: ICart;
    cartObj = { ProductId: productId, EmailId: emailId, Quantity: 1 };
    return this.http.post<boolean>('http://localhost:11990/api/user/AddProductToCart', cartObj).pipe(catchError(this.errorHandler));

  }
  registerUser(emailId: string, userPassword: string, gender: string, dateOfBirth: Date, address: string): Observable<boolean> {
    var register: IUser;
    //var role: IRole=null;
    register = { EmailId: emailId, UserPassword: userPassword, RoleId: null, Gender: gender, DateOfBirth: dateOfBirth, Address: address}
    return this.http.post<boolean>('http://localhost:11990/api/user/InsertUserDetails',register).pipe(catchError(this.errorHandler));
  }
  updateCartProduct(emailId: string, productId: string, qty: number): Observable<boolean> {
    var cartObj: ICart;
    cartObj = { ProductId: productId, EmailId: emailId, Quantity: qty };
    return this.http.put<boolean>('http://localhost:11990/api/user/UpdateCartProducts', cartObj).pipe(catchError(this.errorHandler));
  }

  deleteCartProduct(prodId: string, emailId: string): Observable<boolean> {
    var cartObj: ICart;
    cartObj = { ProductId: prodId, EmailId: emailId, Quantity: null };
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: cartObj };
    return this.http.delete<boolean>('http://localhost:11990/api/user/DeleteCartProduct', httpOptions).pipe(catchError(this.errorHandler));
  }
  updateReviewComments(emailId: string,
    productId: string,
    productName: string,
    reviewRating: number,
    reviewComments: string): Observable<boolean>{
    var ratingObj: IRating;
    ratingObj = { EmailId: emailId, ProductId: productId, ProductName: productName, ReviewRating: reviewRating, ReviewComments: reviewComments };
    return this.http.put<boolean>("http://localhost:11990/api/Rating/UpdateReviewComments", ratingObj).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  }

}
