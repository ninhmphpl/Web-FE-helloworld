import { Injectable } from '@angular/core';
import {APIAny} from "./api-any.service";
import {environtment} from "../../environments/environtment";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(
    private api : APIAny
  ) { }
  getNotification(action : any){
    let url = environtment.url + '/buyer/notification'
    this.api.getMapping(url, (data : any)=>{
      action(data)
    })
  }
}
