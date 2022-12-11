import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Amplify, API } from "aws-amplify";
const baseURL = 'https://uaksyi1vml.execute-api.ap-south-1.amazonaws.com/Prod/';
Amplify.configure({
  API: {
    endpoints: [
      {
        name: "ImageSearch",
        endpoint: 'https://uaksyi1vml.execute-api.ap-south-1.amazonaws.com/Prod/'
      }
    ]
  }
});

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/json; charset=UTF-8",
      "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "Referer": "https://d2kfhbphvfoffx.cloudfront.net/",
      "Referrer-Policy": "strict-origin-when-cross-origin",

    })
  };

  constructor(private http: HttpClient) { }

 /*  errorHandler(source: Observable<any>) {
    return (err: any) => {
      debugger;
      if (err.status === 404 && err.error.Message === 'User Name or Password not found') {
        //this.presentToast(err.error.Message, 'danger');
      }
      return observableThrowError(err);
    };
  } */

  passwordReset$(email: string) {
   // throw new Error('Method not implemented.');
  }
  login(email: string, password: string) {
   // throw new Error('Method not implemented.');
  }
  confirmInvite$(userId: any, password: string, token: any) {
   // throw new Error('Method not implemented.');
  }

  loadSimilarImages(data: any, req: any) {
    debugger;
    //const observable = API.post('ImageSearch', 'postURL', data);
    //return observable;
    const observable =  this.http.post<any>(
      baseURL + req,
      data,
      this.httpOptions
    );
    return observable;
  }
}

