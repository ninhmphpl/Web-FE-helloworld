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

  constructor(
    public api: APIAny,
    public role: RoleService,
    public cartService: CartService
  ) { }


}