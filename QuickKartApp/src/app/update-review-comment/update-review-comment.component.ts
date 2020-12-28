import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../quickKart-Services/user-service/user.service';

@Component({
  selector: 'app-update-review-comment',
  templateUrl: './update-review-comment.component.html',
  styleUrls: ['./update-review-comment.component.css']
})
export class UpdateReviewCommentComponent implements OnInit {

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }
  emailId: string;
  productId: string;
  productName: string;
  reviewRating: number;
  reviewComments: string;
  errorMsg: string;
  ngOnInit(): void {
    this.emailId = this.route.snapshot.params['emailId'];
    this.productId = this.route.snapshot.params['productId'];
    this.productName = this.route.snapshot.params['productName'];
    this.reviewRating = this.route.snapshot.params['reviewRating'];
    this.reviewComments = this.route.snapshot.params['reviewComments'];

  }
  updateReviewComment(form: NgForm) {
    console.log(form.value.ReviewRating);
    this.userService.updateReviewComments(this.emailId, this.productId, this.productName, form.value.ReviewRating, form.value.ReviewComments).subscribe(
      responseData => {
        console.log(responseData);
        if (responseData) {
          alert("Your Review Updated Succesfully");
          this.router.navigate(['/rating']);
        }
        else {
          alert("some error occured");
        }
      },
      responseErrorData => {
        this.errorMsg = responseErrorData;
      },
      () => { console.log("Code Excecuted Succesfully"); }
    );

  }

}
