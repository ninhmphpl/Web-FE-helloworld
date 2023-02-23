import { Component, OnInit } from '@angular/core';
import { ProductListPageService } from '../service/product-list-page.service';
import { RoleService } from '../service/role.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(
    public productService : ProductListPageService,
    public roleService : RoleService
  ){}
  ngOnInit(): void {
    this.productService.getListProduct(0);
  }


}
