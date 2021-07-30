import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TokenObj } from '../models/tokenObj';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  getJWTToken() {
    //   const httpOptions = {
    //     headers : new HttpHeaders({'Content-Type': "application/json",
    //     Authorization : "Basic Rkc5SWlyRVF3TGZSalVBSjlScjVleVNXTks4YTpUUG9qTDhrNlMyQ0VNZmJPU0swdzJSVmdPbjhh"})

    //   }
    //   const headers = new HttpHeaders({
    //     Authorization : 'Basic RWNmdVpmSm5yZlNSNDQ2amFsTXZBMnI1aUtBYTp2OHFlZngwdTl1STNmbjJiM09YZjc0RzhlOElh',
    //     'Content-Type': 'application/json; charset=UTF-8'
    // });

    // const body = ({'grant_type' : 'client_credentials'});

    // const json = JSON.stringify(body); 
    // });
    // console.log(httpOptions.headers.get('Authorization'));

    // console.log(json);
    const encodedClient = btoa('EcfuZfJnrfSR446jalMvA2r5iKAa:v8qefx0u9uI3fn2b3OXf74G8e8Ia');


    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + encodedClient
    });

  //   const headers={
  //     headers: new HttpHeaders({
  //       'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //         'Authorization': 'Basic ' + encodedClient
  //     })
  // }

    // const params = new HttpParams({
    //   grant_type: 'client_credentials'
    // });
    console.log(encodedClient);
    return this.http.post("http://localhost:8280/token?grant_type=client_credentials", {headers:headers})
    .pipe(map(res => res));
    // {Authorization : "Basic RWNmdVpmSm5yZlNSNDQ2amFsTXZBMnI1aUtBYTp2OHFlZngwdTl1STNmbjJiM09YZjc0RzhlOElh",
    //  'Content-Type': "application/x-www-form-urlencoded",
    //  "Accept-Encoding" : "gzip, deflate",
    //  "Accept": "*/*",
    //  "Content-Length" : "0"});
  }

  getToken(){
    return 'eyJ4NXQiOiJNell4TW1Ga09HWXdNV0kwWldObU5EY3hOR1l3WW1NNFpUQTNNV0kyTkRBelpHUXpOR00wWkdSbE5qSmtPREZrWkRSaU9URmtNV0ZoTXpVMlpHVmxOZyIsImtpZCI6Ik16WXhNbUZrT0dZd01XSTBaV05tTkRjeE5HWXdZbU00WlRBM01XSTJOREF6WkdRek5HTTBaR1JsTmpKa09ERmtaRFJpT1RGa01XRmhNelUyWkdWbE5nX1JTMjU2IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJhZG1pbkBjYXJib24uc3VwZXIiLCJhdXQiOiJBUFBMSUNBVElPTiIsImF1ZCI6IkVjZnVaZkpucmZTUjQ0NmphbE12QTJyNWlLQWEiLCJuYmYiOjE2Mjc0NjQ3MTAsImF6cCI6IkVjZnVaZkpucmZTUjQ0NmphbE12QTJyNWlLQWEiLCJzY29wZSI6ImFtX2FwcGxpY2F0aW9uX3Njb3BlIGRlZmF1bHQiLCJpc3MiOiJodHRwczpcL1wvbG9jYWxob3N0Ojk0NDNcL29hdXRoMlwvdG9rZW4iLCJleHAiOjE2Mjc0NjgzMTAsImlhdCI6MTYyNzQ2NDcxMCwianRpIjoiYjI0MDU2OTMtOTI2ZC00YjRhLThmYjMtOTdkYzljN2M0NTQ1In0.rLigNGnzLvcg3Trx-yfWR-EYCL7-BP7yZ62OJbChpMrrnEZlVsEHuPXC29WFZoeh3JF8a5L3kFDVvA9IhDfeSlu_4KB5A-67HmKObg2eWX9IUJlJmoi4Ir01nKBI2O2zMFdNYCj5y9_TCOGWwTVbGMjq_6MEUiTAi8ffTPn1T1r2ob47DBJxw-lO_F5vpl0OTqKXbJ4Ce_nompFdqAHlC7PevUpixd60MhxVLt9fFkQG00UPykK_GUA3VmK3er_zLnD8b9KXV5TJ7nbIk5kgcr8TABsWC-Hz5fovP1pPEzOu6pmI1hSeae-Q7fOmcbG3s45RXzTDiafYZLo0PEm3Tg';
  }
}
