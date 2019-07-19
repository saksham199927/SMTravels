import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  addData(name,email,password,address,city) {
      const obj = {name,email,password,address,city};
      this
          .http
          .post(`${this.url}/add`, obj)
          .subscribe(res => console.log(res));
  }
 
  getData() {
      return(
      this
          .http
          .get(`${this.url}/disp`)
      );
  }
  upData(id, name) {
      const obj = { name };
      this
          .http
          .post(`${this.url}/update/${id}`, obj)
          .subscribe(res => console.log(res));
  }
  delData(id) {
      return this.http.get(`${this.url}/delete/${id}`).subscribe();
  }
  editData(id) {
    return this
            .http
            .get(`${this.url}/edit/${id}`);
    }
 
 
    up_data(name,email, password,address,city, id) {
 
      const obj = {
          name: name,
          email:email,
          password: password,
          address:address,
          city: city,
          
        };
      this
        .http
        .post(`${this.url}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
}