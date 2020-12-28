import { Component, OnInit } from '@angular/core';
import { RatingService } from '../quickKart-Services/rating-service/rating.service';
import { NgForm } from '@angular/forms';
import { Alert } from 'selenium-webdriver';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  userRole: string;
  userName: string;
  commonLayout: boolean = false;
  customerLayout: boolean = false;
  productId: string;
  productName: string;
  rating: number;
  constructor(private ratingService: RatingService,private router:Router) {
    this.userName = sessionStorage.getItem("userName");
    this.userRole = sessionStorage.getItem("userRole");
    this.productId = sessionStorage.getItem("productId");
    this.productName = sessionStorage.getItem("productName")
    if (this.userRole == "Customer") {
      this.customerLayout = true;
    }
    else {
      this.commonLayout = true;
    }
  }

 
  comments: string;
  ratings: number;
  status: boolean = false;
  errMsg: string;
  ngOnInit(): void {
  }
  submitForm(form: NgForm) {
    this.comments = form.value.Comments;
    this.ratings = form.value.ReviewRating;
    this.ratingService.insertRating(this.userName, this.productId, this.productName, form.value.ReviewRating, form.value.Comments).subscribe(
      responseData => {
        this.status = responseData;
        console.log(this.status);
        if (this.status) {
          sessionStorage.removeItem("productId");
          sessionStorage.removeItem("productName");
          alert("Thank You For your Rating");
          this.router.navigate(['/home']);
          
        }
      },
      reponseErrorData => {
        this.errMsg = reponseErrorData;
        console.log(this.errMsg);
        alert("Something went wrong please try again later");
      },
      () => { console.log("Code Excecuted Succesfully"); }
    );
  }
}
