import {Component, OnInit} from '@angular/core';
import {APIAny} from "../service/api-any.service";
import {environtment} from "../../environments/environtment";

@Component({
  selector: 'app-bill-buyer',
  templateUrl: './bill-buyer.component.html',
  styleUrls: ['./bill-buyer.component.scss']
})
export class BillBuyerComponent implements OnInit{
  action : any
  bills : any
  constructor(
    private api : APIAny
  ) {}

  ngOnInit(): void {
    this.getAllBill()
  }

  getAllBill(){
    let url = environtment.url + "/buyer/bill"
    this.api.getMapping(url, (data : any)=>{
      this.bills = data
      this.action = 'all'
    })
  }

  getAllBillDone(){
    let url = environtment.url + "/buyer/bill/done"
    this.api.getMapping(url, (data : any)=>{
      this.bills = data
      this.action = 'done'
    })
  }

  getAllBillCancel(){
    let url = environtment.url + "/buyer/bill/cancel"
    this.api.getMapping(url, (data : any)=>{
      this.bills = data
      this.action = 'cancel'
    })
  }





}
