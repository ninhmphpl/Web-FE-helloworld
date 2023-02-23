import { Component, OnInit } from '@angular/core';
import { environtment } from 'src/environments/environtment';
import { Buyer } from '../model/buyer';
import { UserService } from '../service/user.service';
import { CartService } from '../service/cart.service';
import { ProductListPageService } from '../service/product-list-page.service';
import { RoleService } from '../service/role.service';
import { BuyerService } from '../service/buyer.service';

@Component({
  selector: 'app-header-manager',
  templateUrl: './header-manager.component.html',
  styleUrls: ['./header-manager.component.scss']
})
export class HeaderManagerComponent {

  constructor(
    public roleService: RoleService,
    public cartService: CartService,
    public productListService: ProductListPageService,
    public userService: UserService,
    public buyerService : BuyerService
  ) { }

  ngOnInit(): void {
    this.roleService.getRoleByParam()
    this.buyerService.getBuyer()
  }
  scroll(element: any) {
    window.scrollTo(element.yPosition)
  }
}
