import { Component, OnInit } from '@angular/core';
import {environtment, ROLE} from 'src/environments/environtment';
import { Buyer } from '../model/buyer';
import { UserService } from '../service/user.service';
import { CartService } from '../service/cart.service';
import { ProductListPageService } from '../service/product-list-page.service';
import { RoleService } from '../service/role.service';
import { BuyerService } from '../service/buyer.service';
import {APIAny} from "../service/api-any.service";

@Component({
  selector: 'app-header-default',
  templateUrl: './header-default.component.html',
  styleUrls: ['./header-default.component.scss']
})
export class HeaderDefaultComponent implements OnInit{
  constructor(
    public productListService: ProductListPageService,
    public userService: UserService,
    public api : APIAny
  ) { }

  ngOnInit(): void {
    console.log(this.api.getRole())
    if(this.api.getRole() == ROLE.buyer) this.userService.getCard()
  }
  scroll(element: any) {
    window.scrollTo(element.yPosition)
  }


}
