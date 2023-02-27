import {Component, OnInit} from '@angular/core';
import {APIAny} from "../service/api-any.service";
import {RoleService} from "../service/role.service";
import {Router} from "@angular/router";
import {environtment, ROLE} from "../../environments/environtment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(
    public api : APIAny,
    public router : Router
  ){}

  ngOnInit(): void {
    localStorage.clear()
  }

  user = {
    username : '',
    password : ''
  }
  loginMessage : any
  submit(){
    this.loginMessage = null;
    let url = environtment.url + '/login'
    this.api.postMapping(url, this.user, (data : any)=>{
      localStorage.setItem('user_web', JSON.stringify(data))
      this.goPage()
    })
    this.loginMessage = "Mật khẩu không đúng"

  }

  goPage(){
    if(this.api.getRole() == ROLE.buyer){
      this.router.navigate(['/'])
      return;
    }
    if(this.api.getRole() == ROLE.seller){
      this.router.navigate(['/seller'])
      return;
    }
    if(this.api.getRole() == ROLE.employee){
      this.router.navigate(['/employee'])
      return;
    }
    if(this.api.getRole() == ROLE.admin){
      this.router.navigate(['/admin'])
      return
    }
  }
}
