import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  apiurl = 'http://localhost:3000/user';

  GetAll(){
    return this.http.get(this.apiurl);
  }

  GetAllRole(){
    return this.http.get('http://localhost:3000/role');
  }

  Getbycode(code:any){
    return this.http.get(this.apiurl + '/' + code);
  }

  RegisterUser(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }

  Updateuser(code: any, inputdata: any) {     // aqui teniamos un error por ponerle al update el tipo POST se le tenia que poner PUT
    return this.http.put(this.apiurl + '/' + code, inputdata);
  }

  isLoggedIn(){
    return sessionStorage.getItem('username')!=null;
  }

  GetUserRole(){
    return sessionStorage.getItem('username')!=null?sessionStorage.getItem('userrole')?.toString():'';
  }
}
