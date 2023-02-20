import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { RoleService } from '../service/role.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  constructor(
    public userService : UserService,
    public roleService : RoleService
  ){}
  ngOnInit(): void {
    this.roleService.role = "BUYER"
    this.userService.getUser()
  }
}
