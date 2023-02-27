import { Injectable } from '@angular/core';
import { environtment } from 'src/environments/environtment';
import { APIAny } from './api-any.service';
import { Employee } from '../model/employee';
import { Buyer } from '../model/buyer';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  buyer: any
  cart: any[] = []
  urlCart = environtment.url + "/buyer/cart"
  urlBuyer = environtment.url + '/buyer/info'
  urlBuyerProfile = environtment.url + '/buyer/profile/'
  urlCartDelete = environtment + 'cart/delete/'

  constructor(
    private api : APIAny
  ) { }

  getAll() {
    this.getCart()
    this.getBuyer()
  }


  bill : any
  listBuy : any[] = []
  total = 0
  modalBody : any


  buy() {
    if(this.listBuy.length > 0){
      let url = environtment.url + '/buyer/cart/buy'
      this.api.putMapping(url, this.listBuy, (data : any)=>{
        this.bill = data
        document.getElementById("buysuccess")?.click()
        this.getAll()
      })
    }
  }

  getCart(){
    this.api.getMapping(this.urlCart, (data : any)=>{
      this.cart = data
    })
  }
  getBuyer(){
    this.api.getMapping(this.urlBuyer, (data : any)=>{
      this.buyer = data
    })
  }
getBuyerId(id : number, action :any){
  this.api.getMapping(this.urlBuyerProfile +id , (data : any)=>{
    this.buyer = data
    action(data)
  })

}
  choiceProduct(){
    setTimeout(()=>{
      this.listBuy = []
      this.total = 0
      for (let cart of this.cart) {
        if (cart.choice){
          this.listBuy.push(cart)
          this.total += cart.productDetail.price * cart.amount
        }
      }
    },100)
  }
  checkAlls = false

  updateBuyer(buyer: Buyer, action : any){
    let url = environtment.url
    this.api.putMapping(url+'/buyer/profile/update', buyer, (data : any) => {
      action()
    })

  }
}
