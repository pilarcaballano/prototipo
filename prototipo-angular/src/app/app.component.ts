import { Component } from '@angular/core';

@Component({
  selector: 'protangu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prototipo-angular';

  constructor() {
    

    // // URL of the SPA to redirect the user to after login
    // this.oauthService.redirectUri = window.location.origin + "/index.html";

    // // The SPA's id. The SPA is registerd with this id at the auth-server
    // this.oauthService.clientId = "FG9IirEQwLfRjUAJ9Rr5eySWNK8a:TPojL8k6S2CEMfbOSK0w2RVgOn8a";

    // // set the scope for the permissions the client should request
    // // The first three are defined by OIDC. The 4th is a usecase-specific one
    // this.oauthService.scope = "openid";

    // // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
    // // OAuth2-based access_token
    // this.oauthService.oidc = true; // ID_Token

    // // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
    // // instead of localStorage
    // this.oauthService.setStorage(sessionStorage);

    // // Discovery Document of your AuthServer as defined by OIDC
    // let url = 'https://localhost:9443/oauth2/authorize/';

    // // Load Discovery Document and then try to login the user
    // this.oauthService.loadDiscoveryDocument(url).then(() => {

    //   // This method just tries to parse the token(s) within the url when
    //   // the auth-server redirects the user back to the web-app
    //   // It dosn't send the user the the login page
    //   this.oauthService.tryLogin({});

    // });

  }
}
