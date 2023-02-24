import { Component, OnInit } from '@angular/core';
import { APIAny } from '../service/api-any.service';
import { BuyerService } from '../service/buyer.service';
import { CartService } from '../service/cart.service';
import { RoleService } from '../service/role.service';
import { UserService } from '../service/user.service';
import {User} from "../model/user";
import {environtment} from "../../environments/environtment";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  cart : any
  constructor(
    public userService : UserService,
    public api : APIAny,
  ){}
  ngOnInit(): void {
    this.userService.getCard((data : any)=>{this.cart = data})
  }

  setAmount(orderId : any , amount : any){
    if(typeof amount != 'number') amount = amount.target.value
    let url = environtment.url + '/buyer/cart/set-amount/' + orderId + '/' + amount
    this.api.getMapping(url, (data : any)=>{
      console.log(data)
      this.userService.getCard((data : any)=>{this.cart = data})
    })
  }
  deleteOrder(orderId : any){
    let url = environtment.url + "/buyer/cart/delete/" + orderId
    this.api.deleteMapping(url, (data : any)=>{
      console.log(data)
      this.userService.getCard((data : any)=>{this.cart = data})
    })
  }

  choiceAllCard(value : any){

  }
  choiceAllOrder(value : any, cartId : any){
    let choice = value.target.checked
    console.log(choice)
    let cart = this.cart[cartId]
    cart.choice = choice
    for(let o of cart.orders){
      o.choice = choice
    }
  }

  choiceOrder(value : any, cartId : any, orderId : any){
    let choice = value.target.checked
    let order = this.cart[cartId].orders[orderId]
    order.choice = choice
  }
}
