import { Component,DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'app-admindocuments';
  ismenurequired=false;
  isadminuser = false
  constructor(private router:Router,private service:AuthService){

  }
  ngDoCheck(): void {
    let currentur=this.router.url;
    if(currentur=='/login' || currentur=='/register'){
      this.ismenurequired=false;
    }else{
      this.ismenurequired=true;
    }if (this.service.GetUserRole()==='admin') {
        this.isadminuser = true;
    }else{
      this.isadminuser=false;
    }
  }
}
