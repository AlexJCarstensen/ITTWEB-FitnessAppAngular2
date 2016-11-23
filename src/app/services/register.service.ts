import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegisterService {


private baseUrl = 'https://fitnesspowah.herokuapp.com/api/'; 
private registerUrl = 'register'; 
private headers = new Headers({'Content-Type': 'application/json'});

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only

  return Promise.reject(error.message || error);
}
     constructor(private http: Http,  
                private router: Router) { }

doRegister(name: string, email: string, password: string): void {

    const url = `${this.baseUrl}${this.registerUrl}`;
    this.http.post(url, JSON.stringify({name: name,email: email, password: password}), {headers: this.headers})
      .toPromise()
      .then( response => {
          this.router.navigate(['']);  
      }   
      )
        .catch(this.handleError);
  }

   private getHeaders(): Headers {
        return new Headers({
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem("token")
        });
    }



}
