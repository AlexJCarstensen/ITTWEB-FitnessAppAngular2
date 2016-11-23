import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegisterService {


private baseUrl = 'https://fitnesspowah.herokuapp.com/'; 
private registerUrl = 'register'; 

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only

  return Promise.reject(error.message || error);
}
  constructor() { }

  // register(): Promise<void> {

  //   const url = `${this.baseUrl}${this.registerUrl}`;
  //       return this.http
  //       .put(url, JSON.stringify({name: this.}}), {headers: this.getHeaders()})
  //       .toPromise()
  //       .then(() => workout)
  //       .catch(this.handleError);
  // }

  //  private getHeaders(): Headers {
  //       return new Headers({
  //           'Content-Type': 'application/json',
  //           "Authorization": "Bearer " + localStorage.getItem("token")
  //       });
  //   }



}
