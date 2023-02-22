import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  role : any
  userTokent : any

  constructor(
    private router : Router,
    private activeRouter : ActivatedRoute,
  ) { }

  getRoleByParam(){
    if(!this.userTokent){
      let user : any = localStorage.getItem("user_web")
      this.userTokent = JSON.parse(user) 
      if(this.userTokent) return
    }
    this.router.navigate(['/home'])
  }



}
