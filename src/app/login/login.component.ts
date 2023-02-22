import { Component } from '@angular/core';
import { environtment } from 'src/environments/environtment';
import { APIAny } from '../service/api-any.service';
import { RoleService } from '../service/role.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    public api : APIAny,
    public roleService : RoleService
    ){}

  user = {
    username : '',
    password : ''
  }

  submit(){
    let url = environtment.url + '/login'
    this.api.postMapping(url, this.user, (data : any)=>{
      alert("dang ky thanh cong");
      this.roleService.userTokent = data
      localStorage.setItem('user_web', JSON.stringify(data))
    })
  }


}
