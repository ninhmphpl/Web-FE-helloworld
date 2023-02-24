import { Component, OnInit } from '@angular/core';
import { APIAny } from '../service/api-any.service';
import { BuyerService } from '../service/buyer.service';
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
    public roleService : RoleService,
    public buyerService : BuyerService,
    public api : APIAny
  ){}
  ngOnInit(): void {
    this.buyerService.getAll()
  }
}
