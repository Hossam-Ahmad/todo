import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SearchComponent } from './pages/search/search.component';
import { DetailsComponent } from './pages/details/details.component';
import { AuthService } from './services/auth-service.service';


const routes: Routes = [
  { path: '', redirectTo: 'discover', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, canActivate: [AuthService]},
  { path: 'register', component: RegisterComponent, canActivate: [AuthService] },
  { path: 'discover', component: SearchComponent, canActivate: [AuthService] },
  { path: 'details', component: DetailsComponent, canActivate: [AuthService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
