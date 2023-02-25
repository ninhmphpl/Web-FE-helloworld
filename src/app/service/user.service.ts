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
  cartLength : number = 0

  constructor(
    public api: APIAny,
    public role: RoleService,
  ) { }

  getCard(action? : any){
    let url = environtment.url + "/buyer/cart"
    this.api.getMapping(url, (data : any)=>{
      this.cart = data
      this.getLengthCard(data)
      action(data)
    })
  }

  getLengthCard(carts : any){
    let length = 0
    for (let cart of carts){
      length += cart.orders.length
    }
    this.cartLength = length
  }

  getBuyer(){
    let url = environtment.url + '/buyer/info'
    this.api.getMapping(url , (data: any)=>{
      this.user = data
    })
  }
  getBuyerAction(action : any){
    let url = environtment.url + '/buyer/info'
    this.api.getMapping(url , (data: any)=>{
      this.user = data
      action(data)
    })
  }


}
