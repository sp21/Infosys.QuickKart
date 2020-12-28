import { Component, OnInit } from '@angular/core';
import { RatingService } from '../quickKart-Services/rating-service/rating.service';
import { IRating } from '../quickKart-Interfaces/rating';
import { Router } from '@angular/router';
import { IAddReview } from '../quickKart-Interfaces/addreview';

@Component({
  selector: 'app-view-rating',
  templateUrl: './view-rating.component.html',
  styleUrls: ['./view-rating.component.css']
})
export class ViewRatingComponent implements OnInit {

  userRole: string;
  userName: string;
  commonLayout: boolean = false;
  customerLayout: boolean = false;

  constructor(private _rating: RatingService,private router:Router) {
    this.userRole = sessionStorage.getItem("userRole");
    this.userName = sessionStorage.getItem("userName");
    if (this.userRole == "Customer") {
      this.customerLayout = true;
    }
    else {
      this.commonLayout = true;
    }
  }

  rating: IRating[];
  showMessage: boolean=false;
  ngOnInit(): void {
    this.getRating();
    if (this.rating==null) {
      this.showMessage = true;
    }
    else {
      this.showMessage = false;
    }
  }
  getRating() {
    this._rating.getRating(this.userName).subscribe(responseRatingData => { this.rating = responseRatingData; });
  }

  updateReview(rating: IRating) {
    this.router.navigate(['/updateReview', rating.EmailId, rating.ProductId, rating.ProductName, rating.ReviewRating, rating.ReviewComments]);
  }
  deleteReview(ratingObj: IAddReview) {
    this._rating.deleteRating(ratingObj.EmailId, ratingObj.ProductId, ratingObj.ProductName, ratingObj.ReviewRating, ratingObj.ReviewComments).
      subscribe(responseData => {
        console.log(responseData);
        if (responseData) {
          alert("The Review Deleted Succesfully");
          this.router.navigate(['/rating']);
        }
      },
        responseErrorData => {
          console.log(responseErrorData);
          alert("Something Went Wrong Try Later");
        },
      () => { console.log("Code run succesfully"); });
  }
}
