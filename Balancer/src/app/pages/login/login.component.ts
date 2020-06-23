import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SocialService } from 'src/app/services/social.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user = {
    email : '',
    password : '',
    phone : ''
  };

  loginForm: FormGroup;
  loginForm2: FormGroup;

  constructor(
    private router: Router,
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private socialService : SocialService
  ) {
    this.loginForm = this.formBuilder.group({
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [this.user.password, [Validators.required]]
    });
    this.loginForm2 = this.formBuilder.group({
      phone: [this.user.phone, [Validators.required, Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  register() {
    this.router.navigate(['register']);
  }

  login(userData) {
    this.auth.login(userData).subscribe(data => {
      console.log(data);
      this.auth.setToken(data['token']);
      this.auth.setId(data['id']);
      this.router.navigate(['discover']);
    });
  }

  loginfb() {
    this.socialService.signInWithFB().then( data => {
      console.log(data);
    });
  }

}
