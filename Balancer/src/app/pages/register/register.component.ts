import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SocialService } from 'src/app/services/social.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user = {
    name : '',
    email : '',
    password : '',
    phone : ''
  };

  registerForm: FormGroup;
  registerForm2: FormGroup;

  constructor(
    private router: Router,
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private socialService: SocialService
  ) {
    this.registerForm = this.formBuilder.group({
      name: [this.user.name, [Validators.required]],
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [this.user.password, [Validators.required]]
    });
    this.registerForm2 = this.formBuilder.group({
      name: [this.user.name, [Validators.required]],
      phone: [this.user.password, [Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  register(userData) {
    this.auth.register(userData).subscribe(data => {
      console.log(data);
      this.auth.setToken(data['token']);
      this.auth.setId(data['id']);
      this.router.navigate(['discover']);
    });
  }

  login() {
    this.router.navigate(['login']);
  }

  loginfb() {
    this.socialService.signInWithFB().then( data => {
      console.log(data);
    });
  }

}
