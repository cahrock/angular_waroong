import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { LoginService } from '../../services/login.service';
import { AppConst } from '../../constants/app-const';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  private serverPath = AppConst.serverPath;
  private loginError:boolean = false;
  private loggedIn = false;
  private credential = {'username': '', 'password': ''};

  private emailSent:boolean = false;
  private usernameExist:boolean;
  private emailExist:boolean;
  private username:string;
  private email:string;

  private emailNotExist:boolean;
  private forgetPasswordEmailSent:boolean;
  private recoverEmail:string;  

  private fieldRequired: boolean;

  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private router: Router
  ) { }

  onLogin() {
  	this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(
  		res => {
  			console.log(res);
  			localStorage.setItem("xAuthToken", res.json().token);
  			this.loggedIn = true;
  			location.reload();
  			this.router.navigate(['/home']);
  		}, 
  		error => {
  			this.loggedIn = false;
  			this.loginError = true;
  		}
  	);
  }

  onNewAccount() {
  	this.usernameExist = false;
  	this.emailExist = false;
  	this.emailSent = false;

  	this.userService.newUser(this.username, this.email).subscribe(
  		res => {
  			console.log(res);
  			this.emailSent = true;
  		}, 
  		error => {
  			console.log(error.text());
        let errorMessage = error.text();
  			if(errorMessage==="usernameExist") this.usernameExist=true;
  			if(errorMessage==="emailExist") this.emailExist=true;
  		}
  	);
  }

  onForgetPassword() {
  	this.forgetPasswordEmailSent = false;
  	this.emailNotExist = false;
	
  	this.userService.retrievePassword(this.recoverEmail).subscribe(
  		res => {
  			console.log(res);
  			this.forgetPasswordEmailSent = true;
  		},
  		error => {
  			console.log(error.text());
  			let errorMessage = error.text();
  			if(errorMessage==="Email not found") this.emailNotExist=true;
  		}
  	);
  }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res =>{
        this.loggedIn = true;
      },
      error =>{
        this.loggedIn = false;
      }
    );
  }

}
