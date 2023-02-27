import { Component, OnInit } from '@angular/core';
import { APIAny } from '../service/api-any.service';
import { UserService } from '../service/user.service';
import {environtment} from "../../environments/environtment";
import {NotificationService} from "../service/notification.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  notifications : any
  cart : any
  total : any
  constructor(
    public userService : UserService,
    public api : APIAny,
    private notificationService : NotificationService,
  ){}
  ngOnInit(): void {
    this.userService.getCard((data : any)=>{this.cart = data})
    this.userService.getBuyer()
    this.getNotification()
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
    for(let i = 0 ; i < this.cart.length ; i ++){
      this.choiceAllOrder(value, i)
    }
  }
  choiceAllOrder(value : any, cartId : any){
    let choice = value.target.checked
    console.log(choice)
    let cart = this.cart[cartId]
    cart.choice = choice
    for(let o of cart.orders){
      o.choice = choice
    }
    this.getMoney()
  }
  choiceOrder(value : any, cartId : any, orderId : any){
    let choice = value.target.checked
    let order = this.cart[cartId].orders[orderId]
    order.choice = choice
    this.getMoney()
  }
  getMoney(){
    let money = 0
    for(let cart of this.cart){
      for (let order of cart.orders){
        if(order.choice) money += order.total
      }
    }
    this.total = money
  }

  buy(){
    let url = environtment.url + '/buyer/buy'
    this.api.postMapping(url, this.getCartToBuy(), (data: any)=>{
      console.log(data)
      this.userService.getCard((data : any)=>{this.cart = data; this.getNotification()})
    })
  }
  getCartToBuy(){
    let carts = structuredClone(this.cart)
    for(let j = 0 ; j < carts.length ; j ++){
      for(let i = 0 ; i < carts[j].orders.length ; i++){
        if(!carts[j].orders[i].choice){
          carts[j].orders.splice(i,1)
          i--
        }
      }
      if(carts[j].orders.length <= 0){
        carts.splice(j,1)
        j--
      }
    }
    console.log('getCartToBuy: ')
    console.log(carts)
    return carts
  }

  getNotification(){
    this.notificationService.getNotification((data : any)=> this.notifications = data)
  }
}
