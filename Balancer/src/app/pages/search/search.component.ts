import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/users.service';
import { ShareService } from 'src/app/services/share.service';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public users = [];
  public query = '';
  private page = 1;

  constructor(
    private router: Router,
    private userService: UserService,
    private auth: AuthService,
    private shareService: ShareService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.list(this.page).subscribe(data => {
      console.log(data);
      this.users =  this.users.concat(data['document'] as Array<any>);
      this.page++;
    });
  }

  search() {
    this.userService.search({query : this.query}).subscribe(data => {
      console.log(data);
      this.users = data['document'] as Array<any>;
    });
  }

  create(){
    this.router.navigate(['details']);
  }

  delete(index){
      console.log({id : this.users[index]._id , createdBy : this.auth.getId(), token : this.auth.getToken()});
      this.userService.delete({id : this.users[index]._id , createdBy : this.auth.getId(), token : this.auth.getToken()}).subscribe( data => {
        this.users.splice(index, 1);
      });
  }

  details(index){
    this.shareService.setData(this.users[index]);
    this.router.navigate(['details']);
  }

  logout() {
    this.auth.logout();
  }

}
