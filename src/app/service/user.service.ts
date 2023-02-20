import { Injectable } from '@angular/core';
import { environtment } from 'src/environments/environtment';
import { APIAny } from './api-any.service';
import { CartService } from './cart.service';
import { RoleService } from './role.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any
  cart: any[] = []

  constructor(
    public api: APIAny,
    public role: RoleService,
    public cartService: CartService
  ) { }

  getUser() {

    let url = ''
    if (this.role.role == "BUYER") {
      url = environtment.url + "/buyer/info"
    }

    if (url != '') {
      this.api.getMapping(url, (data: any) => {
        this.user = data
        this.cartService.cart = this.user.cart
        this.cart = this.user.cart
        for(let cart of this.cart){
          cart.choice = false
        }
      })
    }
  }

  buy() {
    let listBuy : any[] = [] 
    for(let cart of this.cart){
      if(cart.choice) listBuy.push(cart)
    }
    console.log(listBuy);
    
  }



}
