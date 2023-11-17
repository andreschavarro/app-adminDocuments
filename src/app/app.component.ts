import { Component,DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'app-admindocuments';
  ismenurequired=false;
  constructor(private router:Router){

  }
  ngDoCheck(): void {
    let currentur=this.router.url;
    if(currentur=='/login' || currentur=='/register'){
      this.ismenurequired=false;
    }else{
      this.ismenurequired=true;
    }
  }
}
