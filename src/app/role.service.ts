import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  role : any

  constructor(
    private router : Router,
    private activeRouter : ActivatedRoute,
  ) { }

  getRoleByParam(role : any){
    this.role = role
    
  }



}
