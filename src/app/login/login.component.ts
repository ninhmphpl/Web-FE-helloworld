import { Component } from '@angular/core';
import { environtment } from 'src/environments/environtment';
import { APIAny } from '../service/api-any.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public api : APIAny){
  }

  user = {
    username : '',
    password : ''
  }

  submit(){
    let url = environtment.url + '/login'
    this.api.postMapping(url, this.user, ()=>{
      alert("dang ky thanh cong")
    })
  }


}
