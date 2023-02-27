import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {environtment} from "../../environments/environtment";
import {APIAny} from "../service/api-any.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  constructor(
    private api : APIAny
  ) {
  }
  passwordOld : any
  newPassword : any
  rePassword : any

  messageError : any
  submit(){
    this.messageError = ''
    if(this.newPassword == this.rePassword){
      let url = environtment.url + "/buyer/password/" + this.passwordOld + '/' + this.newPassword
      this.api.postMapping(url, {}, (data : any)=>{

      })
      this.api
    }else this.messageError = 'Mật khẩu nhập lại không đúng'
  }

}
