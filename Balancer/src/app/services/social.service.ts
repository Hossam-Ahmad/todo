import { Injectable } from '@angular/core';
import { FacebookLoginProvider, SocialAuthService } from "angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor(
    private socialAuthService: SocialAuthService
  ) { }

  signInWithFB() {
    return this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
}
