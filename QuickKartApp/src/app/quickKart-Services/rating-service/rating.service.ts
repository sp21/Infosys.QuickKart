import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/Http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IAddReview } from 'src/app/quickKart-Interfaces/addreview';
import { IRating } from 'src/app/quickKart-Interfaces/rating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private _http: HttpClient) { }

  getRating(emailId: string): Observable<IRating[]> {
    var viewDetails = this._http.get<IRating[]>("http://localhost:11990/api/Rating/DisplayAllReviewDetailsByEmailId?emailId=" + emailId).pipe(catchError(this.errorHandler));
    return viewDetails;
  }
  insertRating(emailId:string,productId:string,productName:string,rating:number,reviewComments:string): Observable<boolean> {
    var ratingObj: IAddReview;
    ratingObj = { EmailId: emailId, ProductId: productId, ProductName: productName, ReviewRating: rating, ReviewComments: reviewComments }
    return this._http.post<boolean>("http://localhost:11990/api/Rating/InsertRating", ratingObj).pipe(catchError(this.errorHandler));
  }
  deleteRating(emailId: string, productId: string, productName: string, rating: number, reviewComments: string): Observable<boolean> {
    var ratingObj: IAddReview;
    ratingObj = { EmailId: emailId, ProductId: productId, ProductName: productName, ReviewRating: rating, ReviewComments: reviewComments }
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: ratingObj };
    return this._http.delete<boolean>("http://localhost:11990/api/Rating/DeleteRating", httpOptions).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error || "Server Error");
  }
}
