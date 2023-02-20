import { Component, OnInit } from '@angular/core';
import { environtment } from 'src/environments/environtment';
import { Buyer } from '../model/buyer';
import { UserService } from '../service/user.service';
import { CartService } from '../service/cart.service';
import { ProductListPageService } from '../service/product-list-page.service';
import { RoleService } from '../service/role.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(
    public roleService : RoleService,
    public cartService : CartService,
    public productListService : ProductListPageService,
    public userService : UserService
  ){}

  ngOnInit(): void {
    this.userService.getUser()
  }



}
