import { Component, OnInit } from '@angular/core';
import { environtment } from 'src/environments/environtment';
import { CartService } from '../service/cart.service';
import { RoleService } from '../service/role.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  constructor(
    public roleService : RoleService,
    public cartService : CartService,
  ){}

}
