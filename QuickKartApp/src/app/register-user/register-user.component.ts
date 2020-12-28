import { Component, OnInit } from '@angular/core';
import { UserService } from '../quickKart-Services/user-service/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
  }
  status: boolean;
  errMessage: boolean;
  submitForm(form: NgForm) {
    console.log(form.value.Email + "\n" + form.value.ConfirmPassword + "\n" + form.value.Gender + "\n" + form.value.DateOfBirth +"\n"+ form.value.Address);

    this.userService.registerUser(form.value.Email, form.value.ConfirmPassword, form.value.Gender, form.value.DateOfBirth, form.value.Address).subscribe(
      responseData => {
        this.status = responseData;
        console.log(responseData);
        if (this.status) {
          alert("Your User Registeration is Succesfull");
          this.router.navigate(['/login']);
        }
      },
      responseErrorData => {
        this.errMessage = responseErrorData;
        alert("Something went wrong try again later");
      },
      () => { console.log("The service Excecuted succesfully") }

    );

  }
}
