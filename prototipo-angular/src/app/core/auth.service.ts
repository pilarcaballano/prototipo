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
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + encodedClient
    });

    // const params = new HttpParams({
    //   grant_type: 'client_credentials'
    // });
    console.log(encodedClient);
    return this.http.post("http://localhost:8280/token?grant_type=client_credentials", {headers:headers})
    // .pipe(map(res => res));
    // {Authorization : "Basic RWNmdVpmSm5yZlNSNDQ2amFsTXZBMnI1aUtBYTp2OHFlZngwdTl1STNmbjJiM09YZjc0RzhlOElh",
    //  'Content-Type': "application/x-www-form-urlencoded",
    //  "Accept-Encoding" : "gzip, deflate",
    //  "Accept": "*/*",
    //  "Content-Length" : "0"});
  }

  getToken(){
    return 'eyJ4NXQiOiJNell4TW1Ga09HWXdNV0kwWldObU5EY3hOR1l3WW1NNFpUQTNNV0kyTkRBelpHUXpOR00wWkdSbE5qSmtPREZrWkRSaU9URmtNV0ZoTXpVMlpHVmxOZyIsImtpZCI6Ik16WXhNbUZrT0dZd01XSTBaV05tTkRjeE5HWXdZbU00WlRBM01XSTJOREF6WkdRek5HTTBaR1JsTmpKa09ERmtaRFJpT1RGa01XRmhNelUyWkdWbE5nX1JTMjU2IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJhZG1pbkBjYXJib24uc3VwZXIiLCJhdXQiOiJBUFBMSUNBVElPTiIsImF1ZCI6IkVjZnVaZkpucmZTUjQ0NmphbE12QTJyNWlLQWEiLCJuYmYiOjE2MjcwMzA1NjgsImF6cCI6IkVjZnVaZkpucmZTUjQ0NmphbE12QTJyNWlLQWEiLCJzY29wZSI6ImFtX2FwcGxpY2F0aW9uX3Njb3BlIGRlZmF1bHQiLCJpc3MiOiJodHRwczpcL1wvbG9jYWxob3N0Ojk0NDNcL29hdXRoMlwvdG9rZW4iLCJleHAiOjE2MjcwMzQxNjgsImlhdCI6MTYyNzAzMDU2OCwianRpIjoiYmE0NGVlNzktM2QwYy00MmYwLTg0ZTItNjRkNzlkYmFkMDNlIn0.IXed9MHCaRVteHuORGWXrbs6n_IC8lGXS-NUDAFT0abKDabxvzymRtWpcauC8eR6crLDghPtjba9l8y5_IYD2ZtJWpz8Zz_9wxwGgj9WTmTqzg1b-xiKChv7bKQH-yRp0ylwvcEqU2orcKoA-1ifTFtFXEY9zYPlAK7Wybe19oUe82N4DBa12EmMWOdhCzmmPyKGqCwI1lqpbe7TVKwAHo_qGcElz2wkwVWlnGZHErEOSEMYbED42m-kuiuppfVUWfHmU34II8IrsVft9q9XBxGUU4GKpkReqWsve3k811t-ELHE-6kHkRX2pCqS5o-m0lTLVDRMec2omaikQ42meg';
  }
}
