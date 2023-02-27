import { Component } from '@angular/core';
import {APIAny} from "../service/api-any.service";
import {UserService} from "../service/user.service";
import {environtment, ROLE} from "../../environments/environtment";

@Component({
  selector: 'app-header-seller',
  templateUrl: './header-seller.component.html',
  styleUrls: ['./header-seller.component.scss']
})
export class HeaderSellerComponent {
  role: any
  notifications : any

  constructor(
    public api: APIAny,
    public userService : UserService,
  ) {
  }

  ngOnInit(): void {
    this.role = this.api.getRole();
    if(this.role == ROLE.seller){
      this.userService.getSeller()
      this.getNotification()
    }
  }
  getNotification(){
    let url = environtment.url + '/seller/notification'
    this.api.getMapping(url, (data : any)=>{
      this.notifications = data
    })
  }
}
