import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../quickKart-Services/user-service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _userService: UserService, private router: Router) { }

  status: string;
  errorMsg: string;
  msg: string;
  showDivMsg: boolean;
  ngOnInit(): void {
  }
  submitLoginForm(form: NgForm) {
    console.log(form.value.email);
    console.log(form.value.password);

    this._userService.validateCredentials(form.value.email, form.value.password).subscribe(
      responseLoginStatus =>
      {
        this.status = responseLoginStatus;
        this.showDivMsg = true;
        console.log(this.status);
        if (this.status.toLowerCase() != "invalid credentials") {
          sessionStorage.setItem("userName", form.value.email);
          sessionStorage.setItem("userRole", this.status);
          this.router.navigate(['/home']);
          //this.msg = "Login Succesfull";
        }
        else {
          this.msg = this.status+"Try Again with Valid Credentials";
        }
      },
      responseLoginError => { this.errorMsg = responseLoginError; },
      () => { console.log("Submit Login Form Excecuted Succesfully"); }
    );

  }
}
