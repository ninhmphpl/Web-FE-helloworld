import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIAny } from './api-any.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  role : any
  userTokent : any
  header : any

  constructor(
    private router : Router,
    private activeRouter : ActivatedRoute,
    private api : APIAny
  ) { }

  getRoleByParam(){
  }



}
