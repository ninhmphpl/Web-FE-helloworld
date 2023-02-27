import { Component, OnInit } from '@angular/core';
import {environtment, ROLE} from 'src/environments/environtment';
import { UserService } from '../service/user.service';
import { ProductListPageService } from '../service/product-list-page.service';
import {APIAny} from "../service/api-any.service";
import {NotificationService} from "../service/notification.service";

@Component({
  selector: 'app-header-default',
  templateUrl: './header-default.component.html',
  styleUrls: ['./header-default.component.scss']
})
export class HeaderDefaultComponent implements OnInit{

  notifications : any
  constructor(
    public productListService: ProductListPageService,
    public userService: UserService,
    public api : APIAny,
    public notificationService : NotificationService
  ) { }

  ngOnInit(): void {
    console.log(this.api.getRole())
    if(this.api.getRole() == ROLE.buyer) {
      this.userService.getCard(()=>{})
      this.userService.getBuyer()
      this.notificationService.getNotification((data: any) => this.notifications = data)
    }
  }
  scroll(element: any) {
    window.scrollTo(element.yPosition)
  }


}
