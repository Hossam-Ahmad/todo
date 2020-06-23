import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/auth-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public user = {
    email : null,
    name : null,
    address : null,
    age : null,
    nationalId : null,
  };

  public flag = 0; //0 create , 1 update
  private sharedData;

  dataForm: FormGroup;

  constructor(
    private router: Router,
    private userService: UserService,
    private shareService: ShareService,
    private auth: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.dataForm = this.formBuilder.group({
      email: [this.user.email, [Validators.required, Validators.email]],
      name: [this.user.name, [Validators.required]],
      nationalId: [this.user.nationalId, [Validators.required]],
      age: [this.user.age, [Validators.required]],
      address: [this.user.address, [Validators.required]],
    });
    this.sharedData = this.shareService.getData()
    if(this.sharedData){
      this.user = this.sharedData;
      console.log(this.user);
      this.user.age = this.formateDate(this.user.age);
      this.flag = 1;
    }
   }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout();
  }

  perform(userData) {
    console.log(userData);
    if(this.flag == 0){
      userData.token = this.auth.getToken();
      userData.createdBy = this.auth.getId();
      this.userService.create(userData).subscribe(data => {
        this.router.navigate(['discover']);
      });
    } else {
      this.userService.update({id : this.sharedData._id, createdBy:this.auth.getId(), data : userData, token:this.auth.getToken()}).subscribe(data => {
        this.router.navigate(['discover']);
      });
    }
  }

  formateDate(date) {
    return date.toString().split('T')[0];
  }

}
