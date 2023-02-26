import { Component } from '@angular/core';
import {APIAny} from "../service/api-any.service";
import {environtment} from "../../environments/environtment";

@Component({
  selector: 'app-bill-seller',
  templateUrl: './bill-seller.component.html',
  styleUrls: ['./bill-seller.component.scss']
})
export class BillSellerComponent {
  action : any
  bills : any
  constructor(
    private api : APIAny
  ) {}

  ngOnInit(): void {
    this.getAllBill()
  }

  getAllBill(){
    let url = environtment.url + "/seller/bill"
    this.api.getMapping(url, (data : any)=>{
      this.bills = data
      this.action = 'all'
    })
  }

  getAllBillWait(){
    let url = environtment.url + "/seller/bill/wait"
    this.api.getMapping(url, (data : any)=>{
      this.bills = data
      this.action = 'wait'
    })
  }


  getAllBillDone(){
    let url = environtment.url + "/seller/bill/done"
    this.api.getMapping(url, (data : any)=>{
      this.bills = data
      this.action = 'done'
    })
  }

  getAllBillCancel(){
    let url = environtment.url + "/seller/bill/cancel"
    this.api.getMapping(url, (data : any)=>{
      this.bills = data
      this.action = 'cancel'
    })
  }

  doneBill(id : any){
    let url = environtment.url + "/seller/bill/done/" + id
    this.api.getMapping(url, (data : any)=>{
      console.log(data)
      this.getAllBillDone()
    })
  }
  idCancel : any
  cancelBill(note : any){
    console.log(note)
    let url = environtment.url + "/seller/bill/cancel/" + this.idCancel + '/' + note
    this.api.getMapping(url, (data : any)=>{
      console.log(data)
      this.getAllBillCancel()
    })
  }

}
